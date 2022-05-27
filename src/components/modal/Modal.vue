<template>
  <teleport to="#portal">
    <div class="Portal app-modal">
      <slot></slot>
    </div>
  </teleport>
</template>

<script>
import { getUseModal } from 'multi-modals';

export default {
  name: 'Modal',
  props: {
    zIndex: { type: Number, required: false },
    handleOpen: { type: Function, required: false },
    handleClose: { type: Function, required: false },
  },
  setup() {},
  data() {
    const { handleMounted, handleBeforeUnmount } = getUseModal({
      classAppModal: 'app-modal',
      zIndex: this.zIndex,
      handleOpen: this.handleOpen,
      handleClose: this.handleClose,
    });

    return {
      handleMounted,
      handleBeforeUnmount,
    };
  },

  mounted() {
    this.handleMounted();
  },
  beforeUnmount() {
    this.handleBeforeUnmount();
  },
};
</script>

<style scoped>
.Portal {
  min-height: 100vh;
}
</style>
