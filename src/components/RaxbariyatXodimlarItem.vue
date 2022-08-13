<template>
  <li class="raxbariyat__item item row align-center" v-for="item in studyList" :key="item.id">
    <div class="item__imgs">
      <i class="fal fa-user item__img"/>
    </div>
    <div class="item__titles">
      <h3 class="item__title">{{item.title}}</h3>
      <div class="item__descs row">
        <div class="item__wrapper">
          <div class="row">
            <i class="fal fa-user"/>
            <span class="item__name">{{ item.name }}</span>
          </div>
          <div class="row">
            <i class="fal fa-phone-alt"/>
            <a class="item__tel" href="tel:+998">{{ item.tel }}</a>
          </div>
        </div>
        <div class="row">
          <slot></slot>
        </div>
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

.raxbariyat {
  .item {
    color: #535C6D;

    &:not(:last-child) {
      padding-bottom: 50px;
      border-bottom: 1px solid #bdbdbd;
    }

    &:not(:first-child) {
      padding-top: 50px;
    }

    i {
      font-size: 24px;
      margin-right: 14px;
    }

    &__wrapper {
      margin-right: 80px;
    }

    .row:not(:last-child) {
      align-items: center;
      margin-bottom: 30px;
    }

    &__imgs {
      width: 180px;
      height: 210px;
      margin-right: 50px !important;
      border-radius: 16px;
    }

    &__img {
      width: 100%;
      height: 100%;
      font-size: 75px !important;
      border-radius: 16px;
      background: linear-gradient(172.51deg, #E6E6E6 -19.12%, #FDFDFD 124.44%);

      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &__title {
      font-weight: 400;
      font-size: 24px;
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
}

</style>