<template>
  <ul class="contact__list">
    <li class="contact__item item row align-center">
      <div class="item__icon"><i class="fas fa-map-marker-alt"/></div>
      <div>
        <span class="item__title">Манзил</span>
        <address class="item__address">180100, қашқадарё вилояти, Қарши шаҳри, хонабод кўчаси 46 уй </address>
      </div>
    </li>
    <li class="info__item item row align-center">
      <div class="item__icon"><i class="fas fa-envelope"/></div>
      <div>
        <span class="item__title">Почта манзили</span>
        <address class="item__address">180100, қашқадарё вилояти, Қарши шаҳри, хонабод кўчаси 46 уй </address>
      </div>
    </li>
    <li class="info__item item row align-center">
      <div class="item__icon"><i class="fas fa-phone-alt"/></div>
      <div>
        <span class="item__title">Телефон рақам</span>
        <a class="item__tel" href="tel:+998752240480">+998 75 224-04-80</a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.contact__list {
  padding: 60px 45px;
  margin-bottom: 50px;
  border-radius: 16px;
  box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.2);
}

.item {

  &__icon {
    position: relative;
    width: 50px;
    height: 50px;
    margin-right: 24px;
    border-radius: 50%;
    color: #fff;
    background: #535C6D;

    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 18px;
    }
  }

  &__title {
    display: block;
    font-size: 18px;
    margin-bottom: 6px;
    color: #2A3243;
  }

  &__address {
    width: 240px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: #51596A;
  }

  &__tel {
    font-weight: 300;
    font-size: 14px;
    color: #51596A;
  }
}

</style>