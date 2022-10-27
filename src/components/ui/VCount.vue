<template>
  <div :class="classes"
       class="v-count"
  >
    <div class="v-count__body">
      <div class="v-count__progress">
        <div :style="{transform: `scaleX(${transform})`}"
             class="v-count__progress-line">
        </div>

        <div :class="{'_light': transform > .2}"
            class="v-count__progress-num">
          {{ moneyCount > 0 ? `${moneyCount} К` : `${moneyCount} K` }}
        </div>
      </div>
    </div>

    <div class="v-count__sound"
         @click="toggleSound"
    >
      <svg v-if="!isSoundOn" class="v-count__sound-icn" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.3333 20L21.3333 12M29.3333 12L21.3333 20" stroke="black" stroke-width="2.66667" stroke-linecap="round"/>
        <path d="M2.66667 19.9454V12.0534C2.66667 11.2881 3.26401 10.6667 4.00001 10.6667H8.78134C8.95778 10.6661 9.13227 10.6297 9.29428 10.5599C9.4563 10.49 9.60248 10.388 9.72401 10.2601L13.724 5.74272C14.564 4.86806 16 5.48806 16 6.72406V25.2761C16 26.5214 14.5467 27.1361 13.712 26.2441L9.72534 21.7521C9.60346 21.6205 9.45581 21.5154 9.29156 21.4434C9.12732 21.3714 8.95001 21.3339 8.77067 21.3334H4.00001C3.26401 21.3334 2.66667 20.7121 2.66667 19.9454Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg v-else class="v-count__sound-icn" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.3333 11.3334C23.1107 13.7041 23.1107 18.2961 21.3333 20.6667M25.3333 6.66672C30.6507 11.7441 30.6827 20.2894 25.3333 25.3334M2.66667 19.9454V12.0534C2.66667 11.2881 3.26401 10.6667 4.00001 10.6667H8.78134C8.95778 10.6661 9.13227 10.6297 9.29428 10.5599C9.4563 10.49 9.60248 10.388 9.72401 10.2601L13.724 5.74272C14.564 4.86806 16 5.48806 16 6.72406V25.2761C16 26.5214 14.5467 27.1361 13.712 26.2441L9.72534 21.7521C9.60346 21.6205 9.45581 21.5154 9.29156 21.4434C9.12732 21.3714 8.95001 21.3339 8.77067 21.3334H4.00001C3.26401 21.3334 2.66667 20.7121 2.66667 19.9454Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: 'VCount',

  props: {
    moneyCount: {
      type: Number,
      default: 0
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const store = useStore();
    const maxCount = 708;
    const activeStep = computed(() => store.getters['getActiveStep']);
    const moneyCount = computed(() => activeStep.value === 'study'
        ? store.getters['study/getStudyCount']
        : store.getters['money/getMoneyCount']);
    const classes = computed(() => {
      return {
        _disabled: props.disabled
      }
    });
    const transform = computed(() => moneyCount.value / maxCount);

    return {
      maxCount,
      classes,
      transform,
      isSoundOn: computed(() => store.getters.getIsSoundOn),
      toggleSound: () => store.commit('toggleSound'),
    }
  },
}
</script>

<style lang="scss" scoped>
.v-count {
  display: flex;
  width: 50%;
  margin: 0 auto;
  $count: &;

  @include respond-to(xs) {
    width: 100%;
  }

  &._disabled {
    opacity: .3;

    #{$count}__progress {
      background-color: transparent;
    }

    #{$count}__sound {
      border-color: transparent;
      background-color: #ffdfd6;
    }

    #{$count}__sound-icn {
      opacity: 0;
    }
  }

  &__body {
    position: relative;
    flex-grow: 1;
    padding: 8px;
    border-radius: 8px;
    background-color: $pink-light;
  }

  &__progress {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
  }

  &__progress-line {
    width: 100%;
    height: 100%;
    padding: 8px;
    background-color: $pink;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .6s ease-out;
  }

  &__progress-num {
    position: absolute;
    top: 50%;
    left: 16px;
    font-size: 12px;
    line-height: 130%;
    font-weight: 600;
    transform: translateY(-50%);
    transition: color .3s ease;

    &._light {
      color: white;
    }
  }

  &__sound {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    margin-left: 8px;
    border-radius: 8px;
    border: 3px solid $pink;
    background-color: $pink-light;
    transition: all .3s ease;

    @include respond-to(xs) {
      border: 2px solid $pink;
    }
  }

  &__sound-icn {
    width: 24px;
    height: 24px;
  }
}
</style>
