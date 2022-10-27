<template>
  <component :is="component"
             v-bind="linkProperties"
             :class="classes"
             class="v-circle-button"
  >
    <slot></slot>
  </component>
</template>

<script>
import {computed} from "vue";

export default {
  name: 'VCircleButton',

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
      default: 'vinous',
      validator (value) {
        return ['vinous', 'light', 'green', 'red'].includes(value)
      }
    },

    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['small', 'medium', 'large'].includes(value)
      }
    }
  },

  setup(props, {emit}) {
    const component = computed(() => props.link ? 'a' : 'button');
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
    const classes = computed(() => {
      return [
        `v-circle-button--${props.color}`,
        `v-circle-button--${props.size}`
      ]
    });

    return {
      component,
      linkProperties,
      classes,
    }
  },
}
</script>

<style lang="scss" scoped>
.v-circle-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  transition: background-color .3s ease;
  cursor: pointer;

  /* Size */
  &--small {
    width: 40px;
    height: 40px;

    @include respond-to(xs) {
      width: 20px;
      height: 20px;
    }

    svg {
      width: 24px;
      height: 24px;

      @include respond-to(xs) {
        width: 16px;
        height: 16px;
      }
    }
  }

  &--medium {
    width: 64px;
    height: 64px;

    @include respond-to(xs) {
      width: 48px;
      height: 48px;
    }

    svg {
      width: 24px;
      height: 24px;

      @include respond-to(xs) {
        width: 16px;
        height: 16px;
      }
    }
  }

  &--large {
    width: 80px;
    height: 80px;

    @include respond-to(xs) {
      width: 64px;
      height: 64px;
    }

    svg {
      width: 24px;
      height: 24px;

      @include respond-to(xs) {
        width: 40px;
        height: 40px;
      }
    }
  }
  /* End Size */

  /* Colors */
  &--vinous {
    background-color: $vinous;

    @include hover() {
      background-color: lighten($vinous, 20);
    }

    svg {
      fill: white;
      stroke: white;
    }
  }

  &--light {
    background-color: $blue-800;

    @include hover() {
      background-color: lighten($blue-800, 20);
    }

    svg {
      fill: white;
      stroke: white;
    }
  }

  &--green {
    background-color: #36ba30;

    @include hover() {
      background-color: lighten(#3ab94e, 20);
    }

    svg {
      fill: white;
      stroke: white;
    }
  }

  &--red {
    background-color: #e33124;

    @include hover() {
      background-color: lighten(#e33124, 20);
    }

    svg {
      fill: white;
      stroke: white;
    }
  }
  /* End Colors */
}
</style>
