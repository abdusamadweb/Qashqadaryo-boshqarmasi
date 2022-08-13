<template>
  <div class="xududiy">
    <MyImg>Ҳудудий бўлимлар</MyImg>
    <div class="xududiy__container container">
      <div class="xududiy__inner">
        <ul class="xududiy__list row between">
          <li class="xududiy__item item" v-for="item in $store.state.contactList">
            <router-link :to="{path: `/xududiy-bolimlar/${item.id}`}" @click="scrollToTop">
              <img class="item__img" :src="item.img">
              <h3 class="item__title">{{item.title}}</h3>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MyImg from "@/components/UI/MyImg";

export default {
  components: {MyImg},
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style lang="scss" scoped>

.xududiy {

  &__inner {
    padding: 50px 0;
  }

  &__desc {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 50px;
    color: #51596A;
  }

  &__list {
    gap: 30px;
  }

  .item {
    cursor: pointer;

    &__img {
      width: 400px;
      height: 225px;
      margin-bottom: 10px;
      border-radius: 16px;
    }

    &__title {
      text-transform: capitalize;
      letter-spacing: -0.02em;
      color: #535C6D;
    }
  }
}

</style>