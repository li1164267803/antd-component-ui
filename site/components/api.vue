<template>
  <div class="markdown api-container">
    <slot />
  </div>
</template>
<script>
import { isZhCN } from '../util';
export default {
  components: {},
  name: 'Api',
  inject: {
    demoContext: { default: {} },
  },
  data() {
    return {
      isZhCN: true,
    };
  },
};
</script>
