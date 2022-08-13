<template>
  <div class="news">
    <div class="news__container container">
      <div class="news__inner">
        <h2 class="news__title">янгиликлар</h2>
        <div class="news__imgs row between">
          <img class="news__img1"
               :src="$store.state.newsList[0].img"
               @click="$router.push(`/news/1`); scrollToTop()"
          >
          <div class="row" style="flex-direction: column">
            <img class="news__img2"
                 :src="$store.state.newsList[1].img"
                 @click="$router.push(`/news/2`); scrollToTop()"
                 style="margin-bottom: 20px;"
            >
            <img class="news__img2"
                 :src="$store.state.newsList[2].img"
                 @click="$router.push(`/news/3`); scrollToTop()"
            >
          </div>
        </div>
        <div class="next" @click="$router.push(`/news`); scrollToTop()">
          <span>Барча янгиликлар</span>
          <i class="fal fa-long-arrow-right"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import news1 from "@/assets/images/news1.png";
import news2 from "@/assets/images/news2.png";
import news3 from "@/assets/images/news3.png";

export default {
  data() {

  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style lang="scss" scoped>

.news {
  padding: 30px 0;

  &__title {
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 60px;
  }

  &__imgs {
    margin-bottom: 40px;

    img {
      border-radius: 16px;
      cursor: pointer;
    }
  }

  &__img1 {
    width: 810px;
    object-fit: cover;
  }

  &__img2 {
    width: 500px;
  }
}

</style>