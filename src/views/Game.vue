<template>
  <section class="app"
  >
    <transition name="fade"
                mode="out-in"
    >
      <component
          :is="activeStep"
          :key="activeStep"
      />
    </transition>
  </section>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

import Intro from '@/components/Intro'
import Result from '@/components/Result'
import Steps from '@/components/Steps'
import Study from '@/components/Study'

export default {
  name: 'Game',

  components: {
    Intro,
    Study,
    Steps,
    Result
  },

  setup() {
    const store = useStore();

    return {
      activeStep: computed(() => store.getters.getActiveStep),
    }
  },
}
</script>

<style lang="scss">
.app {
  min-height: 100vh;
}
</style>
