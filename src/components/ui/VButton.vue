<template>
  <component :is="component"
             v-bind="linkProperties"
             :class="classes"
             class="v-button"
  >
    <slot></slot>
  </component>
</template>

<script>
import {computed} from "vue";

export default {
  name: 'VButton',

  props: {
    link: {
      type: String,
      default: ''
    },

    blank: {
      type: Boolean,
      default: false
    },

    color: {
      type: String,
      default: 'light',
      validator (value) {
        return ['light', 'pink', 'blue'].includes(value)
      }
    }
  },

  setup(props) {
    const classes = computed(() => {
      return [
        `v-button--${props.color}`
      ]
    });

    const component = computed(() => {
      return props.link ? 'a' : 'button'
    });

    const linkProperties = computed(() => {
      const linkProperties = {}
      if (props.link) {
        linkProperties.href = props.link
      }
      if (props.blank) {
        linkProperties.target = '_blank'
      }
      return linkProperties
    });

    return {
      classes,
      component,
      linkProperties,
    }
  },
}
</script>

<style lang="scss" scoped>
.v-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
  color: white;
  transition: background-color .3s ease;
  cursor: pointer;

  /* Colors */
  &--light {
    background-color: $blue-800;

    @include hover() {
      background-color: lighten($blue-800, 20);
    }
  }

  &--pink {
    background-color: $pink;

    @include hover() {
      background-color: lighten($pink, 20);
    }
  }

  &--blue {
    background-color: $blue;

    @include hover() {
      background-color: lighten($blue, 20);
    }
  }
  /* End Colors */
}
</style>
