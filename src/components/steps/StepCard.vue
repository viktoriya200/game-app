<template>
  <div :style="transformStyle"
       :class="[{[`_${direction}`]: direction}, {'_inactive': isInactive}]"
       class="step-card"
       @touchstart="handleTouchstart"
       @touchmove="handleTouchmove"
       @touchend="handleTouchend"
  >
    <div class="step-card__fraction">
      <span v-html="cardCurrent"></span> / <span v-html="cardTotal"></span>
    </div>

    <div class="step-card__image">
      <img :src="card.image" />
    </div>

    <div class="step-card__text" v-html="card.text"></div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed, watch} from "vue";
import {useCardTouch} from "@/use/card-touch";

export default {
  name: 'StepCard',

  props: {
    card: {
      type: Object,
      default: () => {}
    },
  },

  emits: ['card-change'],

  setup(props, {emit}) {
    const {handleTouchstart, handleTouchmove, handleTouchend, transformStyle, direction, isInactive} = useCardTouch(props.card.id);
    const store = useStore();
    const cardsCount = computed(() => store.getters['cards/getCardsCount']);

    const cardCurrent = computed(() => props.card.number > 9 ? props.card.number : `0${props.card.number}`);
    const cardTotal = computed(() => cardsCount.value / 2 > 9 ? cardsCount.value / 2 : `0${cardsCount.value / 2}`);

    watch(direction, value => {
      if(value !== '') {
        emit('card-change', value);
      }
    });

    return {
      cardsCount,
      cardCurrent,
      cardTotal,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      transformStyle,
      direction,
      isInactive
      // ...useCardTouch(props.card.id),
    }
  },
}
</script>

<style lang="scss" scoped>
.step-card {
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 536px;
  padding: 24px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: $blue;
  transform: translateX(-50%);
  transform-origin: 50% 100%;
  pointer-events: none;

  @include respond-to(xs) {
    height: 100%;
    min-width: calc(100vw - 40px);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: white;
    opacity: .4;
    transition: opacity .3s ease;
  }

  &._active {
    position: relative;
    left: 0;
    pointer-events: all;
    transform: translateX(0);

    &:before {
      opacity: 0;
    }
  }

  &._disabled {
    left: 50%;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-50%);
  }

  &._save {
    transform: translateX(30rem) rotate(30deg) !important;
  }

  &._spend {
    transform: translate(-30rem) rotate(-30deg) !important;
  }

  &._inactive {
    transition: all .6s ease;
  }

  &._below {
    z-index: 1;
  }

  &__fraction {
    font-size: 16px;
    line-height: 130%;
    font-weight: 600;
    color: white;
  }

  &__image {
    width: 245px;
    height: 254px;
    margin-top: 24px;
    border-radius: 16px;
    background-color: $blue-600;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__text {
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-top: 24px;
    font-size: 16px;
    line-height: 140%;
    color: white;
    text-align: center;
  }
}
</style>
