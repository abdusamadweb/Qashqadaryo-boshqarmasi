<template>
  <li class="news__item item" v-for="item in newsList" :key="item.id" @click="scrollToTop">
    <router-link class="item__link row align-center" :to="{path: `/news/${item.id}`}">
      <img class="item__img" :src="item.img">
      <div>
        <h3 class="item__title">{{ item.title }}</h3>
        <div class="item__times row align-center">
          <i class="fal fa-calendar-day"/>
          <time class="item__time" :datetime="item.time">{{ item.time }}</time>
        </div>
        <MyButton>
          <span>Батафсил</span>
        </MyButton>
      </div>
    </router-link>
  </li>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  components: {MyButton},
  props: {
    newsList: {
      type: Array
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

.item {
  &__link {
    padding: 25px 2em;
    border-radius: 16px;
    border: 1px solid #A9B2BA;
  }

  i {
    font-size: 20px;
    margin-right: 10px;
    color: #51596A;
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  &__img {
    width: 250px;
    height: 250px;
    margin-right: 2em;
    border-radius: 16px;
    object-fit: cover;
  }

  &__title {
    width: 900px;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 20px;
    color: #51596A;
  }

  &__times {
    margin-bottom: 30px;
  }

  &__time {
    font-weight: 300;
    font-size: 20px;
    color: #51596A;
  }
}

</style>