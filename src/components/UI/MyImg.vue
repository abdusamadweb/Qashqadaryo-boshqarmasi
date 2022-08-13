<template>
  <div class="imgui">
    <img class="imgui__img" :src="imgUi" >
    <h2 class="imgui__title"><slot></slot></h2>
  </div>
</template>

<script>
import imgUi from '@/assets/images/imgui.png';

export default {
  data() {
    return {
      imgUi: imgUi
    }
  }
}
</script>

<style lang="scss" scoped>

.imgui {
  position: relative;
  height: 350px;
  background: #FFFFFFB2;

  &__img {
    position: relative;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &__title {
    position: absolute;
    top: 60%;
    left: 6%;
    width: 635px;
    line-height: 35px;
    text-transform: uppercase;
    font-size: 28px;
    letter-spacing: -0.03em;
    color: #51596A;
  }
}

</style>