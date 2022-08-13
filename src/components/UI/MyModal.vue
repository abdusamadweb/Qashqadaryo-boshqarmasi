<template>
  <div class="dialog" v-if="show" @click="hideModal">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000064;
  z-index: 20;
}

.dialog__content {
  position: relative;
  width: 400px;
  height: 100px;
  padding: 20px;
  margin: 8px auto;
  border-radius: 10px;
  background: #fff;
}

</style>