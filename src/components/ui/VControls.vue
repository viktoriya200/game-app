<template>
  <div :class="{'_disabled': disabled}"
       class="v-controls"
  >
    <div class="v-controls__body">
      <VCircleButton
        color="red"
        size="large"
        class="v-controls__btn"
        @click.stop="onBtnClick('spend')"
      >
        <svg class="v-controls__btn-icn" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 29.6667L28.6667 11" stroke="white" stroke-width="4.12903" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 11.0003L28.6667 29.667" stroke="white" stroke-width="4.12903" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </VCircleButton>

      <VCircleButton
        color="green"
        size="large"
        class="v-controls__btn"
        @click.stop="onBtnClick('save')"
      >
        <svg class="v-controls__btn-icn" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 21.3333L17.3333 30.6667L34 12" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </VCircleButton>
    </div>

    <slot></slot>
  </div>
</template>

<script>
import VCircleButton from './VCircleButton'

export default {
  name: 'VControls',

  components: {
    VCircleButton
  },

  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },

  setup(_, {emit}) {
    return {
      onBtnClick: (type) => emit('card-change', type),
    };
  },
}
</script>

<style lang="scss" scoped>
.v-controls {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  transition: opacity .3s ease;

  @include respond-to(xs) {
    position: relative;
    top: 0;
    width: auto;
    transform: translateY(0);
  }

  &._disabled {
    opacity: .3;
    pointer-events: none;
  }

  &__body {
    display: flex;
    justify-content: space-between;
    padding: 0 60px;

    @include respond-to(xs) {
      justify-content: center;
      gap: 30px;
      padding: 0;
    }
  }

  &__btn {
    //
  }

  &__btn-icn {
    width: 40px;
    height: 40px;
  }
}
</style>
