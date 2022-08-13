<template>
  <div class="hero">
    <div class="hero__container container">
      <div class="hero__inner">
        <h2 class="hero__title">Қашқадарё вилояти Бандлик <span>бош бошқармаси</span></h2>
        <img class="hero__img" :src="heroImg" alt="hero-img">
      </div>
    </div>
  </div>
</template>

<script>
import heroImg from '@/assets/images/main-img.jpg';

export default {
  data() {
    return {
      heroImg: heroImg,
    }
  }
}
</script>

<style lang="scss">

.hero {
  position: relative;
  min-height: 780px;
  padding: 120px 0;
  overflow: hidden;

  &__title {
    width: 630px;
    font-family: 'Comfortaa', cursive;
    font-weight: 300;
    font-size: 55px;
    line-height: 70px;
    text-transform: uppercase;

    span {
      font-weight: 500;
    }
  }
  
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }
}
.next {
  display: flex;
  align-items: center;
  color: #535C6D;
  cursor: pointer;

  &:hover {
    color: #002542;
  }

  span {
    letter-spacing: 0.035em;
    margin-right: 1em;
  }
  i {
    font-size: 20px;
  }
}

</style>