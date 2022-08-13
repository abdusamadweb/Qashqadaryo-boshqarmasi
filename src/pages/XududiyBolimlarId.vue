<template>
  <div class="idxududiy">
    <MyImg>{{xudud.title}}</MyImg>
    <div class="idxududiy__container container">
      <div class="idxududiy__inner">
        <p class="idxududiy__desc">Ўзбекистон Республикаси Соғлиқни сақлаш вазирлиги (кейинчалик матнда Вазирлик) соғлиқни сақлаш бўйича марказий давлат бошқаруви ҳисобланиб, ўз фаолияти бўйича Ўзбекистон Республикаси Вазирлар Маҳкамасига бўйсунади. Вазирлик фаолиятини бошқа давлат идоралари, жумладан давлат </p>
        <div class="idxududiy__info info row between">
          <div class="info__titles">
            <h3 class="info__title">{{xudud.title}} АБКМ директори</h3>
            <ul class="info__list">
              <li class="info__item item">
                <div class="row">
                  <i class="fal fa-user"/>
                  <span class="item__name">{{xudud.name}}</span>
                </div>
              </li>
              <li class="info__item item">
                <div class="row">
                  <i class="fal fa-map-marker-alt"/>
                  <address class="item__address">{{xudud.address}}</address>
                </div>
              </li>
              <li class="info__item item">
                  <div class="row">
                    <i class="fal fa-phone-alt"/>
                    <a class="item__tel" href="tel:+999">{{xudud.tel}}</a>
                  </div>
              </li>
            </ul>
          </div>
          <iframe class="info__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99419.97853441215!2d65.72175756183337!3d38.8582335852689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea63944a8e4c1%3A0x694369ac2037509d!2z0JrQsNGA0YjQuCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2shk!4v1660126499680!5m2!1sru!2shk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImg from "@/components/UI/MyImg";
import { useStore } from 'vuex'

export default {
  components: {MyImg},

  data() {
    return {
      xudud: null
    }
  },
  created() {
    const store = useStore();
    const xududlar = store.state.contactList;
    const xudud = xududlar.find(xudud => xudud.id == this.$route.params.id);
    if (xudud) {
      this.xudud = xudud
    }
  }
}


</script>

<style lang="scss">

.idxududiy {

  &__inner {
    padding: 50px 0;
  }

  .info {

    iframe {
      width: 800px;
      height: 350px;
      border-radius: 16px;
    }

    &__title {
      max-width: 470px;
      font-weight: 500;
      font-size: 26px;
      margin-bottom: 26px;
    }

    .item {
      color: #535C6D;

      i {
        font-size: 26px;
        margin-right: 14px;
      }

      .row {
        margin-bottom: 20px;
      }

      &__name, &__address, &__tel {
        font-weight: 300;
        font-size: 22px;
      }

      &__address {
        width: 470px;
        font-style: normal;
      }

      &__tel {
        color: #535C6D;
      }
    }
  }
}

.idxududiy__desc {
  font-size: 24px;
  line-height: 35px;
  margin-bottom: 50px;
  color: #51596A;
}

</style>