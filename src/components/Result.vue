<template>
  <div class="result">
    <div v-if="activeResult && activeResult.id"
         class="result__container container"
    >
      <div class="result__body">
        <div class="result__btn"
             v-html="moneyCount > 0 ? `${moneyCount}К` : 'Сэкономить не&nbsp;удалось'">
        </div>

        <ResultInfo
          :title="activeResult.title"
          :text="activeResult.text"
          :share-link="activeResult.share_link"
          :money-count="moneyCount"
          class="result__info"
        />
      </div>
    </div>

    <div class="result__image"></div>
  </div>
</template>

<script>
import {computed, onMounted} from "vue";
import {useStore} from "vuex";

import ResultInfo from './result/ResultInfo'

export default {
  name: 'Result',

  components: {
    ResultInfo
  },

  setup() {
    const store = useStore();

    return {
      moneyCount: computed(() => store.getters['money/getMoneyCount']),
      activeResult: store.getters['results/getResult'],
    }
  },
}
</script>

<style lang="scss" scoped>
.result {
  min-height: inherit;
  margin-top: 8px;
  margin-bottom: 24px;

  &__container {
    position: relative;
    z-index: 1;
    min-height: inherit;
    display: flex;
    flex-direction: column;
  }

  &__body {
    position: relative;
    width: 760px;
    padding: 32px;
    margin: auto;
    border-radius: 8px;
    background-color: $vinous;
    overflow: hidden;

    @include respond-to(xs) {
      width: 100%;
      padding: 0;
      background-color: transparent;
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 14px 0;
    margin-bottom: 32px;
    border-radius: 8px;
    background-color: $pink;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: white;
    transition: background-color .3s ease;

    @include respond-to(xs) {
      margin-bottom: 16px;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 30%;
    background-image: url("@/assets/images/money-pattern.jpg");
    opacity: .8;

    @include respond-to(xs) {
      display: none;
    }
  }
}
</style>
