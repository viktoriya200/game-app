<template>
  <div :style="transformStyle"
       :class="[classes, {[`_${direction}`]: direction}, {'_inactive': isInactive}]"
       class="study-card"
       @touchstart="handleTouchstart"
       @touchmove="handleTouchmove"
       @touchend="handleTouchend"
  >
    <div class="study-card__fraction">
      <span v-html="cardCurrent"></span> / <span v-html="cardTotal"></span>
    </div>

    <div class="study-card__icon" v-html="card.icon"></div>

    <div class="study-card__text" v-html="card.text"></div>

    <VButton
      :color="card.btn_color"
      class="study-card__btn"
      @click="handleClick"
    >
      {{ card.btn_text }}
    </VButton>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed, watch} from "vue";

import VButton from './../ui/VButton'
import {useStudyTouch} from "@/use/study-touch";

export default {
  name: 'StudyCard',

  components: {
    VButton
  },

  emits: ['next'],

  props: {
    card: {
      type: Object,
      default: () => {}
    },

    cardsCount: {
      type: Number,
      default: 0
    }
  },

  setup(props, {emit}) {
    const store = useStore();
    const {handleTouchstart, handleTouchmove, handleTouchend, transformStyle, direction, isInactive} = useStudyTouch(props.card.id);

    const cardCurrent = computed(() => props.card.id > 9 ? props.card.id : `0${props.card.id}`);
    const cardTotal = computed(() => props.cardsCount > 9 ? props.cardsCount : `0${props.cardsCount}`);

    const classes = computed(() => {
      return {
        '_bottom-hint': props.card.id === 3,
        '_top-hint': props.card.id === 4
      };
    })

    watch(direction, value => {
      if(value !== '') {
        emit('card-change', value);
      }
    });

    const handleClick = () => {
      props.card.id === 4 ? store.commit('changeStep', 'steps') : emit('next');
    }

    return {
      cardCurrent,
      cardTotal,
      classes,
      handleClick,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      transformStyle,
      direction,
      isInactive,
    }
  },
}
</script>

<style lang="scss" scoped>
.study-card {
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
  padding: 24px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: $blue;
  transition: opacity .3s ease;
  transform: translateX(-50%);
  transform-origin: 50% 100%;
  pointer-events: none;

  @include respond-to(xs) {
    min-width: calc(100vw - 40px);
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    opacity: 0;
    transition: transform .3s ease, opacity .3s ease;
    pointer-events: none;
  }

  &:before {
    top: -7px;
    border-bottom: 7px solid $blue;
    transform: translate3d(-50%, 100%, 0);
  }

  &:after {
    bottom: -7px;
    border-top: 7px solid $blue;
    transform: translate3d(-50%, -100%, 0);
  }

  &._active {
    position: relative;
    left: 0;
    pointer-events: all;
    transform: translateX(0);

    &._top-hint:before {
      @include respond-to(xs) {
        opacity: 1;
        transform: translate3d(-50%, 0, 0);
      }
    }

    &._bottom-hint:after {
      @include respond-to(xs) {
        opacity: 1;
        transform: translate3d(-50%, 0, 0);
      }
    }
  }

  &._disabled {
    opacity: 0;
    pointer-events: none;
  }

  &__fraction {
    font-size: 16px;
    line-height: 130%;
    font-weight: 600;
    color: white;

    @include respond-to(xs) {
      font-size: 16px;
      line-height: 130%;
      font-weight: 600;
      color: white;
    }
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 245px;
    height: 254px;
    margin-top: 24px;
    border-radius: 20px;
    background-color: $blue-600;

    @include respond-to(xs) {
      width: 200px;
      height: 200px;
      margin-top: 24px;
    }

    :global(svg) {
      width: 180px;
      height: 180px;

      @include respond-to(xs) {
        width: 140px;
        height: 140px;
      }
    }
  }

  &__text {
    margin-top: 24px;
    font-size: 16px;
    line-height: 140%;
    color: white;
    text-align: center;

    @include respond-to(xs) {
      margin-top: 24px;
      font-size: 16px;
      line-height: 140%;
      color: white;
      text-align: center;
    }
  }

  &__btn {
    width: 100%;
    margin-top: 24px;

    @include respond-to(xs) {
      width: 100%;
      margin-top: 24px;
    }
  }
}
</style>
