<template>
  <div class="step-result-card">
    <transition name="fade">
      <div v-if="status && status.length"
           class="step-result-card__content"
      >
        <div class="step-result-card__fraction">
          <span v-html="cardCurrent"></span> / <span v-html="cardTotal"></span>
        </div>

        <div class="step-result-card__icon">
          <div v-if="status === 'save'"
               class="step-result-card__icon-save"
          >
            +{{ savedMoney }}К
          </div>

          <div v-else
               class="step-result-card__icon-spend"
          >
            <FlyingMoney />
          </div>
        </div>

        <div class="step-result-card__text"
             v-html="status === 'save' ? card.save_text : card.spend_text">
        </div>

        <VButton
          color="pink"
          class="step-result-card__btn"
          @click="$emit('next-card')"
        >
          Дальше
        </VButton>
      </div>
    </transition>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

import VButton from './../ui/VButton'
import FlyingMoney from "@/components/animations/FlyingMoney";

export default {
  name: 'StepResultCard',

  components: {
    VButton,
    FlyingMoney,
  },

  emits: ['next-card'],

  props: {
    card: {
      type: Object,
      default: () => {}
    },

    savedMoney: {
      type: [String, Number],
      default: ''
    }
  },

  setup(props) {
    const store = useStore();
    const cardsCount = computed(() => store.getters['cards/getCardsCount']);
    const savedMoney = computed(() => store.getters['money/getSavedMoney']);
    const status = computed(() => savedMoney.value[props.card.type] !== '' ? savedMoney.value[props.card.type] > 0 ? 'save' : 'spend' : '');

    const cardCurrent = computed(() => props.card.number > 9 ? props.card.number : `0${props.card.number}`);
    const cardTotal = computed(() => cardsCount.value / 2 > 9 ? cardsCount.value / 2 : `0${cardsCount.value / 2}`);

    return {
      status,
      cardCurrent,
      cardTotal,
    }
  },
}
</script>

<style lang="scss" scoped>
.step-result-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 536px;
  padding: 24px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: $blue;
  opacity: 0;
  transition: opacity .3s ease;
  pointer-events: none;

  @include respond-to(xs) {
    height: max-content;
    min-width: calc(100vw - 40px);
    min-height: 390px;
  }

  &._active {
    position: relative;
    opacity: 1;
    pointer-events: all;
  }

  &._disabled {
    left: 50%;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-50%);
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    @include respond-to(xs) {
      min-height: inherit;
    }
  }

  &__fraction {
    font-size: 16px;
    line-height: 130%;
    font-weight: 600;
    color: white;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 245px;
    height: 254px;
    margin-top: 24px;
    border-radius: 50%;
    background-color: $blue-600;

    @include respond-to(xs) {
      width: 146px;
      height: 146px;
    }
  }

  &__icon-save {
    font-size: 40px;
    line-height: 130%;
    font-weight: 600;
    color: white;
    transition: trasform .3s ease;
    animation: save-money .8s ease-out;

    @include respond-to(xs) {
      font-size: 24px;
    }
  }

  &__icon-spend {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
    margin-left: 20px;

    @include respond-to(xs) {
      width: 90px;
      height: 90px;
    }
  }

  &__text {
    margin-top: auto;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    color: white;
  }

  &__btn {
    width: 100%;
    margin-top: auto;
  }
}

@keyframes save-money {

  0% {
    transform: scale(.3);
  }

  to {
    transform: scale(1);
  }
}
</style>
