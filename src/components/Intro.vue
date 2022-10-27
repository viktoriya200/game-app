<template>
  <div class="intro">
    <div class="intro__container container">
      <div class="intro__card">
        <h1 class="intro__card-title" v-html="title"></h1>

        <div class="intro__card-body">
          <p class="intro__card-text" v-html="text"></p>

          <VButton
              color="pink"
              class="intro__card-btn"
              @click="changeStep"
          >
            <svg v-show="mq.current !== 'xs'" class="intro__card-icon" viewBox="0 0 46 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.0904 31.8378L38.5272 18.0739M38.5272 18.0739L6.19401 17.8175M38.5272 18.0739L27.0904 4.8766" stroke="#771746" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span v-show="mq.current === 'xs'">Начать</span>
          </VButton>
        </div>
      </div>
    </div>

    <div class="intro__image"></div>
  </div>
</template>

<script>
import {useStore} from "vuex";

import VButton from './ui/VButton'

export default {
  name: 'Intro',

  components: {
    VButton
  },

  inject: ['mq'],

  setup () {
    const store = useStore();
    const title = 'Экономить<br />или тратить?';
    const text = 'Пройдите тест-игру и проверьте, какую сумму вы&nbsp;могли&nbsp;бы сэкономить за этот год';

    return {
      title,
      text,
      changeStep: () => store.commit('changeStep', 'study')
    }
  },
}
</script>

<style lang="scss" scoped>
.intro {
  min-height: inherit;

  &__container {
    position: relative;
    z-index: 1;
    display: flex;
    min-height: inherit;
  }

  &__card {
    width: 760px;
    padding: 32px;
    margin: auto;
    border-radius: 8px;
    background-color: $vinous;

    @include respond-to(xs) {
      margin: auto 0;
      padding: 24px;
      border-radius: 8px;
      background-color: $blue;
    }
  }

  &__card-title {
    padding: 40px;
    margin-bottom: 20px;
    border-radius: 8px;
    background-color: $blue;
    font-size: 55px;
    line-height: 130%;
    font-family: $font-title;
    color: white;

    @include respond-to(xs) {
      padding: 0;
      margin-bottom: 0;
      font-size: 30px;
      line-height: 130%;
      text-align: center;
    }
  }

  &__card-body {
    display: flex;

    @include respond-to(xs) {
      flex-direction: column;
    }
  }

  &__card-text {
    padding: 40px;
    border-radius: 8px;
    background-color: white;
    font-size: 22px;
    line-height: 134%;

    @include respond-to(xs) {
      padding: 0;
      margin-top: 30px;
      border-radius: 0;
      background-color: transparent;
      font-size: 16px;
      line-height: 140%;
      color: white;
    }
  }

  &__card-btn {
    align-self: stretch;
    flex-shrink: 0;
    width: 140px;
    margin-left: 20px;

    @include respond-to(xs) {
      width: 100%;
      height: 40px;
      margin-top: 24px;
      margin-left: 0;
    }
  }

  &__card-icon {
    width: 52px;
    height: 52px;
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
