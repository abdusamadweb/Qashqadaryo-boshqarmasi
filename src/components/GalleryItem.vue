<template>
  <li class="gallery__item item" v-for="item in galleryList" :key="item.id">
    <div class="item__imgs">
      <slot></slot>
      <img class="item__img" :src="item.img">
    </div>
    <div class="row align-center">
      <i class="fal fa-calendar-day"/>
      <time class="item__time" :datetime="item.time">{{ item.time }}</time>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    galleryList: {
      type: Array
    }
  }
}
</script>

<style lang="scss">

.item {
  color: #535C6D;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  i {
    font-size: 20px;
    margin-right: 10px;
  }

  &__imgs {
    position: relative;
    width: 420px;
    height: 250px;
    margin-bottom: 12px;
    border-radius: 16px;
    background: #838383;

    &--before {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      background: #00000070;
    }

    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 85px;
      color: #fff;
      opacity: 0.7;
      cursor: pointer;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }

  &__time {
    font-weight: 300;
    font-size: 20px;
  }
}

</style>