<template>
  <li class="study__item item" v-for="item in studyList">
    <img class="item__img" :src="item.img">
    <div class="item__titles">
      <h3 class="item__title">{{item.title}}</h3>
      <div class="row">
        <i class="fal fa-user"/>
        <span class="item__name">{{item.name}}</span>
      </div>
      <div class="row">
        <i class="fal fa-map-marker-alt"/>
        <address class="item__address">{{item.address}}</address>
      </div>
      <div class="row">
        <i class="fal fa-phone-alt"/>
        <a class="item__tel" href="tel:+999">{{item.tel}}</a>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    studyList: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>

.study {
  .item {
    padding: 45px 35px;
    margin-bottom: 0;
    border-radius: 16px;
    color: #535C6D;
    background: #FFFFFF;
    box-shadow: -1px -1px 20px rgba(215, 207, 207, 0.25), 1px 1px 20px rgba(215, 207, 207, 0.25);

    i {
      font-size: 24px;
      margin-right: 12px;
    }

    &__img {
      width: 100px;
      height: 100px;
      display: block;
      margin: 0 auto;
      margin-bottom: 35px;
    }

    &__title {
      width: 360px;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.02em;
      margin-bottom: 36px;
    }

    .row:not(:last-child) {
      align-items: center;
      margin-bottom: 1em;
    }

    &__name, &__address, &__tel {
      font-weight: 300;
      font-size: 15px;
    }

    &__address {
      width: 300px;
      font-style: normal;
    }

    &__tel {
      color: #535C6D;
    }
  }
}

</style>