<template>
  <li class="xududiy__item item row align-center"
      v-for="list in contactList.slice(0, 4)"
      :key="list.id"
      @click="$router.push(`/xududiy-bolimlar/${list.id}`); scrollToTop()"
  >
    <img class="item__img" :src="list.img"/>
    <div class="item__titles">
      <h3 class="item__title">{{list.title}}</h3>
      <div class="row">
        <i class="fal fa-user"/>
        <span class="item__name">{{list.name}}</span>
      </div>
      <div class="row">
        <i class="fal fa-map-marker-alt"/>
        <address class="item__address">{{list.address}}</address>
      </div>
      <div class="row">
        <i class="fal fa-phone-alt"/>
        <a class="item__tel" href="tel:+999">{{list.tel}}</a>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    contactList: {
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
  color: #535C6D;
  cursor: pointer;

  i {
    font-size: 24px;
    margin-right: 14px;
  }

  .row:not(:last-child) {
    align-items: center;
    margin-bottom: 1em;
  }

  &__img {
    width: 300px;
    height: 200px;
    margin-right: 22px;
    border-radius: 16px;
    background: #838383;
  }

  &__title {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 30px;
  }

  &__name, &__address, &__tel {
    font-weight: 300;
    font-size: 17px;
  }

  &__address {
    width: 280px;
    font-style: normal;
  }

  &__tel {
    color: #535C6D;
  }
}

</style>