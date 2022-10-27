<template>
  <router-view></router-view>
</template>

<script>
import { useMq } from "vue3-mq";
import {provide} from "vue";

export default {
  setup() {
    const mq = useMq();

    provide('mq', mq);
  }
}

</script>
