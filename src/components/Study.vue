<template>
  <div class="study">
    <div class="study__container container">
      <div class="study__body">

        <VCount
          :money-count="studyCount"
          :disabled="isCountDisabled"
        />

        <div class="study__cards">
          <StudyCard
            v-for="card in studyCards"
            :key="card.id"
            :card="card"
            :cards-count="studyCards.length"
            :class="[{'_active': card.id === studyStep}, {'_disabled': card.id < studyStep}]"
            @next="nextStudy"
            @card-change="nextStudy"
          />
        </div>

        <VControls
          :disabled="studyStep !== 3"
          @card-change="nextStudy"
        >
          <div v-if="studyStep === 3"
               class="study__controls-text"
          >
            <span>Потратить</span>
            <span>Сэкономить</span>
          </div>
        </VControls>
      </div>
    </div>

    <div class="study__image"></div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

import VCount from './ui/VCount'
import StudyCard from './study/StudyCard'
import VControls from './ui/VControls'
import {useMq} from "vue3-mq";

export default {
  name: 'Study',

  components: {
    VCount,
    StudyCard,
    VControls
  },

  setup() {
    const mq = useMq();
    const store = useStore();
    const studyCards = computed(() => mq.current === 'xs' ? store.getters['study/getStudyCardsMobile'] : store.getters['study/getStudyCards']);
    const studyStep = computed(() => store.getters['study/getStudyStep']);
    const studyCount = computed(() => store.getters['study/getStudyCount']);
    const isCountDisabled = computed(() => mq.current === 'xs' ? studyStep.value !== 4 : studyStep.value !== 2);

    const nextStudy = () => {
      if((mq.current === 'xs' && studyStep.value === 3) || (mq.current !== 'xs' && studyStep.value === 1)) store.dispatch('study/animateCount');

      if(studyStep.value === studyCards.value.length) {
        store.commit('changeStep', 'steps')
      } else {
        store.commit('study/setStudyStep', studyStep.value + 1);
      }
    }

    return {
      studyCards,
      studyStep,
      studyCount,
      nextStudy,
      isCountDisabled,
    }
  },
}
</script>

<style lang="scss" scoped>
.study {
  position: relative;
  min-height: inherit;

  @include respond-to(xs) {
    overflow: hidden;
  }

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

  &__cards {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin: 24px 0;

    @include respond-to(xs) {
      position: relative;
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      margin: 8px 0 16px;
    }
  }

  &__controls-text {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 8px;
    font-size: 12px;
    line-height: 140%;
    color: white;
    text-align: center;

    @include respond-to(xs) {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-top: 8px;
      font-size: 14px;
      line-height: 140%;
      text-align: center;
    }

    span {
      @include respond-to(xs) {
        width: 90px;
      }
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
