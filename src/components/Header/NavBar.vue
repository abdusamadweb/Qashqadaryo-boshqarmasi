<template>
  <nav class="header__nav nav">
    <div class="container">
      <ul class="nav__list row">
        <li class="nav__item">
          Бошқарма
          <ul class="nav__item-hov hov">
            <li class="hov__item">
              <router-link class="hov__link" to="/boshqarma-haqida">Бошқарма ҳақида</router-link>
            </li>
            <li class="hov__item">
              <router-link class="hov__link" to="/raxbariyat">Раҳбарият</router-link>
            </li>
            <li class="hov__item">
              <router-link class="hov__link" to="/xodimlar">Ҳодимлар</router-link>
            </li>
            <li class="hov__item">
              <router-link class="hov__link" to="/faoliyat-yonalishlari">Фаолият йўналишлари</router-link>
            </li>
          </ul>
        </li>
        <li class="nav__item">
          Ҳудудий бўлимлар
          <ul class="nav__item-hov hov">
            <li class="hov__item" v-for="item in $store.state.contactList.slice(0, 8)">
              <router-link class="hov__link" :to="item.route">{{ item.title }}</router-link>
            </li>
          </ul>
        </li>
        <li class="nav__item">
          Касбга ўқитиш
          <ul class="nav__item-hov hov">
            <li class="hov__item">
              <router-link class="hov__link" to="/xududiy-bolimlar/9">“Ишга Марҳамат” Мономарказ</router-link>
            </li>
            <li class="hov__item">
              <router-link class="hov__link" to="/kasbga-oqitish">KOICA</router-link>
            </li>
            <li class="hov__item">
              <router-link class="hov__link" to="/kasbga-oqitish">Деҳқонобод тумани касб-ҳунарга ўқитиш маркази</router-link>
            </li>
          </ul>
        </li>
        <li class="nav__item">
          Матбуот маркази
          <ul class="nav__item-hov hov">
            <li class="hov__item">
              <router-link class="hov__link" to="/news">Янгиликлар</router-link>
            </li>
            <li class="hov__item">
              <router-link class="hov__link" to="/gallery">Фотогалерия</router-link>
            </li>
            <li class="hov__item">
              <router-link class="hov__link" to="/video-gallery">Видеогалерия</router-link>
            </li>
          </ul>
        </li>
        <li class="nav__item">
          Меъёрий-ҳуқуқий хужжатлар
          <ul class="nav__item-hov hov">
            <li class="hov__item">
              <router-link class="hov__link" to="/qonunlar">Ўзбекистон Республикаси қонунлари</router-link>
            </li>
            <li class="hov__item">
              <router-link class="hov__link" to="/malumotlar">Ўзбекистон Республикаси Вазирлар Маҳкамаси  Қарорлари</router-link>
            </li>
            <li class="hov__item">
              <router-link class="hov__link" to="/xujjatlar">Ўзбекистон Республикаси Бандлик ва меҳнат муносабатлари вазирлиги меъёрий хужжатлари</router-link>
            </li>
          </ul>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/boglanish">Боғланиш</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.nav {
  padding: 0;
  color: #fff;
  background: #535C6D;

  &__list {
    gap: 70px;
  }

  &__link {
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 0.5px;
    color: #fff;
  }

  &__item {
    position: relative;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 0.5px;
    padding: 15px 0;
    cursor: pointer;

    &:hover .hov {
      opacity: 1;
      z-index: 100;
    }

    .hov {
      position: absolute;
      top: 100%;
      left: -10px;
      padding: 0 10px;
      background: rgba(27, 96, 225, 0.9);
      transition: opacity 0.3s ease,
      z-index 0.3s ease;
      opacity: 0;
      z-index: -2;

      &__item {

        &:not(:last-child) {
          border-bottom: 1px solid #6d98eb;
        }
      }

      &__link {
        width: 300px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        padding: 20px 10px;
        color: #fff;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}

</style>

<!--'Бошқарма', 'Ҳудудий бўлимлар', 'Касбга ўқитиш', 'Матбуот маркази', 'Меъёрий-ҳуқуқий хужжатлар', 'Боғланиш'-->