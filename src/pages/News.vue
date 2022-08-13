<template>
  <div class="news">
    <MyImg>янгиликлар</MyImg>
    <div class="news__container container">
      <div class="news__inner">
        <ul class="news__list">
          <NewsItem :newsList="$store.state.newsList" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NewsItem from "@/components/NewsItem";
import MyImg from "@/components/UI/MyImg";
export default {
  components: {MyImg, NewsItem}
}
</script>

<style lang="scss" scoped>

.news {

  &__inner {
    padding: 50px 0;
  }
}

</style>