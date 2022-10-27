<template>
  <div class="result-info">
    <h2 class="result-info__title" v-html="title"></h2>

    <p class="result-info__text" v-html="text"></p>

    <div class="result-info__btn">
      <VCircleButton
        color="light"
        :size="mq.current !== 'xs' ? 'small' : 'medium'"
        class="result-info__btn-round"
        @click="onBtnClick"
      >
        <div class="result-info__btn-icon">
          <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.62143 14.4635C11.2292 14.1714 13.3192 12.0868 13.6166 9.47899C14.007 6.06922 11.3567 3.16666 8.03454 3.12948V1.59986C8.03454 1.51489 7.92832 1.46974 7.85662 1.52285L4.70708 3.83587C4.65397 3.8757 4.65397 3.95271 4.70708 3.99255L7.85662 6.30557C7.92832 6.35868 8.03454 6.31088 8.03454 6.22855V4.70159C10.3688 4.73877 12.2383 6.72515 12.079 9.09924C11.9436 11.1414 10.2785 12.7985 8.23636 12.9286C6.07206 13.0667 4.23173 11.5211 3.90244 9.47634C3.84136 9.09659 3.50941 8.82041 3.12701 8.82041C2.65166 8.82041 2.27987 9.24265 2.35423 9.71268C2.8163 12.6259 5.50642 14.8114 8.62143 14.4635Z" stroke="none" />
          </svg>
        </div>
      </VCircleButton>

      <span class="result-info__btn-title">
        Пройти заново
      </span>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

import VCircleButton from './../ui/VCircleButton'

export default {
  name: 'ResultInfo',

  components: {
    VCircleButton,
  },

  props: {
    title: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    },

    shareLink: {
      type: String,
      default: ''
    },

    moneyCount: {
      type: Number,
      default: 0
    }
  },

  inject: ['mq'],

  setup() {
    const store = useStore();

    const onBtnClick = () => {
      store.commit('changeStep', 'intro');
      store.commit('study/setStudyStep', 1);
      store.commit('money/resetMoney');
      store.commit('cards/setActiveCard', 1);
    }

    return {
      onBtnClick,
    }
  },
}
</script>

<style lang="scss" scoped>
.result-info {
  padding: 24px;
  border-radius: 8px;
  background-color: $blue;
  color: white;

  &__title {
    font-size: 20px;
    line-height: 130%;
  }

  &__text {
    margin-top: 16px;
    font-size: 16px;
    line-height: 140%;
    color: #f9f7ff;
  }

  &__btn {
    display: flex;
    align-items: center;
    margin-top: 16px;
  }

  &__btn-round {
    //
  }

  &__btn-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
  }

  &__btn-title {
    margin-left: 8px;
    font-size: 12px;
    line-height: 140%;
  }

  &__modal {

    .modal__content {
      border-radius: 16px 16px 0 0;
    }
  }
}
</style>
