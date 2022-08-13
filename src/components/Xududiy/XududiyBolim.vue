<template>
  <div class="xududiy">
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="xududiy__container container">
      <div class="xududiy__inner">
        <h2 class="xududiy__title">Ҳудудий бўлимлар</h2>
        <ul class="xududiy__list row">
          <XududiyBolimItem :contactList="$store.state.contactList" />
        </ul>
        <div class="next" @click="$router.push('/xududiy-bolimlar'); scrollToTop()" >
          <span>Барча ҳудудий бўлимлар</span>
          <i class="fal fa-long-arrow-right"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XududiyBolimItem from "@/components/Xududiy/XududiyBolimItem";

export default {
  components: {XududiyBolimItem},

  data() {
    return {

    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style lang="scss" scoped>

.xududiy {
  position: relative;
  padding: 50px 0;

  .bg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 380px 720px;
    background-image: url('@/assets/images/bgmain.svg');
    z-index: -1;
  }

  .bg2 {
    top: 20%;
    right: 0;
    background-size: 300px 580px;
    transform: rotate(180deg);
  }

  &__title {
    text-transform: capitalize;
    font-size: 32px;
    text-align: center;
    margin-bottom: 60px;
  }

  &__list {
    gap: 30px;
    margin-bottom: 60px;
  }
}

</style>