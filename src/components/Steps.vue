<template>
  <div class="steps">
    <div class="steps__container container">
      <div class="steps__body">
        <VCount
          :money-count="moneyCount"
        />

        <div class="steps__cards">
          <component
            :is="card.isQuestion ? 'StepCard' : 'StepResultCard'"
            v-for="card in cards"
            :key="card.id"
            :card="card"
            :saved-money="savedMoney[card.type]"
            :class="[{'_active': card.id === activeCardId}, {'_disabled': card.id < activeCardId}]"
            @next-card="handleNextCard"
            @card-change="handleCardChange"
          />
        </div>

        <VControls
          :disabled="!(activeCardId % 2)"
          class="steps__controls"
          @card-change="handleCardChange"
        />
      </div>

      <audio ref="save" :src="sounds.save" type="audio/mpeg"></audio>
      <audio ref="spend" :src="sounds.spend" type="audio/mpeg"></audio>
    </div>

    <div class="steps__image"></div>
  </div>
</template>

<script>
import VCount from './ui/VCount'
import StepCard from './steps/StepCard'
import StepResultCard from './steps/StepResultCard'
import VControls from './ui/VControls'
import {useStore} from "vuex";
import {computed, ref} from "vue";
import {useAudio} from "@/use/audio";

export default {
  name: 'Steps',

  components: {
    VCount,
    StepCard,
    StepResultCard,
    VControls
  },

  setup() {
    const store = useStore();
    const { sounds, save, spend, audioPlay} = useAudio();

    const cards = computed(() => store.getters['cards/getCards']);
    const activeCardId = computed(() => store.getters['cards/getActiveCard']);
    const activeCard = computed(() => cards.value.find(card => card.id === activeCardId.value));

    const handleNextCard = () => {
      activeCardId.value === cards.value.length
          ? store.commit('changeStep', 'result')
          : store.commit('cards/setActiveCard', activeCardId.value + 1);
    }

    const handleCardChange = (type) => {
      store.commit('money/saveMoney', {
        type: activeCard.value.type,
        count: type === 'save' ? activeCard.value.count : 0
      });

      handleNextCard();
      audioPlay(type);
    }

    return {
      cards,
      activeCardId,
      activeCard,
      save,
      spend,
      moneyCount: computed(() => store.getters['money/getMoneyCount']),
      savedMoney: computed(() => store.getters['money/getSavedMoney']),
      handleNextCard,
      handleCardChange,
      sounds,
    }
  },
}
</script>

<style lang="scss" scoped>
.steps {
  min-height: inherit;
  overflow: hidden;

  &__container {
    position: relative;
    z-index: 1;
    min-height: inherit;
    display: flex;
    flex-direction: column;
  }

  &__cards {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin: 24px 0;

    @include respond-to(xs) {
      margin: 8px 0 16px;
    }
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
