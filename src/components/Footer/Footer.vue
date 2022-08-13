<template>
  <div class="footer">
    <img class="footer__bg-img" :src="imgs.bgImg">
    <div class="footer__container container">
      <div class="footer__inner row">
        <div class="col-md-4">
          <router-link class="header__logo logo row" to="/">
            <img class="logo__img" :src="imgs.footerLogo" alt="logo">
            <h1 class="logo__txt">Қашқадарё вилояти <span>Бандлик бош бошқармаси</span></h1>
          </router-link>
          <div class="footer__descs">
            <p class="footer__desc">Қашқадарё вилояти <br> Бандлик бош бошқармаси</p>
            <p class="footer__desc">Сайт материалларидан фойдаланганда, <br> ушбу сайтга хавола кўрсатилиши шарт</p>
          </div>
        </div>
        <div class="footer__body row col-md-8">
          <div class="col-md-6">
            <strong class="footer__title">Фойдали хаволалар</strong>
            <ul class="footer__list">
              <li class="footer__item">
                <a class="footer__link" href="www.lex.uz" target="_blank">Ўзбекистон Республикаси Бандлик <br> ва меҳнат муносабатлари вазирлиги</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="www.lex.uz" target="_blank">Lex.uz</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="www.lex.uz" target="_blank">Ягона интерактив давлат <br> хизматлари портали</a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="www.lex.uz" target="_blank">Ташқи меҳнат миграцияси <br> агентлиги (Қарши)</a>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <strong class="footer__title">Бизнинг манзил</strong>
            <address class="footer__link">180100, қашқадарё вилояти, Қарши шаҳри, хонабод кўчаси 46 уй </address>
            <a class="footer__link" href="tel:+998">+998 75 224-04-80</a>
            <img class="footer__img" :src="imgs.uz">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/images/logo2.svg";
import bgImg from "@/assets/images/main-img.jpg";
import uz from  '@/assets/images/uz.svg';

export default {
  data() {
    return {
      imgs: {
        footerLogo: logo,
        bgImg: bgImg,
        uz: uz
      },
    }
  }
}
</script>

<style lang="scss" scoped>

.footer {
  position: relative;
  padding: 30px 0;
  color: #fff;
  background: rgba(83, 92, 109, 0.87);
  overflow: hidden;

  &__bg-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .logo {
    margin-bottom: 40px;

    &__txt {
      font-size: 18px;
      color: #fff;
    }
  }

  &__desc {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 30px;
  }

  &__body {
    padding-top: 20px;
  }

  &__title {
    display: block;
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 70px;
  }

  &__link {
    font-size: 15px;
    margin-bottom: 30px;
    color: #fff;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
  address {
    font-style: normal;
  }

  &__img {
    width: 455px;
    height: 300px;
  }

}

</style>