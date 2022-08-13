<template>
  <div class="newsid">
    <MyImg>янгиликлар</MyImg>
    <div class="newsid__container container">
      <div class="newsid__inner">
        <h3 class="newsid__title">{{ xabar.title }}</h3>
        <div class="newsid__times row align-center">
          <i class="fal fa-calendar-day"/>
          <time class="newsid__time" :datetime="xabar.time">{{ xabar.time }}</time>
        </div>
        <img class="newsid__img" :src="xabar.img">
        <p class="newsid__desc">{{ xabar.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import MyImg from "@/components/UI/MyImg";
import {useStore} from "vuex";
export default {
  components: {MyImg},

  data() {
    return {
      xabar: null
    }
  },
  created() {
    const store = useStore();
    const xabarlar = store.state.newsList;
    const xabar = xabarlar.find(xabar => xabar.id == this.$route.params.id);
    if (xabar) {
      this.xabar = xabar
    }
  }
}
</script>

<style lang="scss" scoped>

.newsid {
  color: #51596A;

  &__inner {
    padding: 50px 0;
  }

  &__title {
    font-weight: 500;
    font-size: 30px;
    line-height: 34px;
    padding-right: 50px;
    margin-bottom: 30px;
  }

  &__times {
    font-weight: 300;
    font-size: 22px;
    padding: 10px 0;
    border-top: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;
    margin-bottom: 40px;

    i {
      font-size: 22px;
      margin-right: 10px;
    }
  }

  &__img {
    width: 100%;
    height: 430px;
    margin-bottom: 40px;
    border-radius: 16px;
    object-fit: cover;
  }

  &__desc {
    font-size: 26px;
    line-height: 40px;
  }
}

</style>