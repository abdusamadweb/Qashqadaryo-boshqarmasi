<template>
  <div class="header">
    <div class="header__container container">
      <div class="header__inner row between align-center">
        <router-link class="header__logo logo row align-center" to="/">
          <img class="logo__img" :src="imgs.logo" alt="logo">
          <h1 class="logo__txt">Қашқадарё вилояти <span>Бандлик бош бошқармаси</span></h1>
        </router-link>
        <div class="header__search-lang row">
          <div class="row">
            <i class="fal fa-phone-alt"/>
            <a class="tel" href="tel:+998">+998(71) 233-22-00</a>
          </div>
          <div class="langs row align-center">
            <span>O'zb</span>
            <span>У'зб</span>
          </div>
          <button class="search" @click="modalVisible = true">
            <img :src="imgs.searchBtn" alt="search-btn">
          </button>
          <MyModal v-model:show="modalVisible">
            <input class="modal-inp" type="text" placeholder="Кидиринг..." v-focus>
          </MyModal>
        </div>
      </div>
    </div>
    <NavBar />
  </div>
</template>

<script>
import logo from '@/assets/images/logo.svg';
import searchBtn from '@/assets/icons/search.svg';
import NavBar from "@/components/Header/NavBar";
import MyModal from "@/components/UI/MyModal";

export default {
  components: {MyModal, NavBar},
  data() {
    return {
      imgs: {
        logo: logo,
        searchBtn: searchBtn,
      },
      modalVisible: false
    }
  }
}
</script>

<style lang="scss">

.logo {
  gap: 10px;

  &__img {
    width: 75px;
    height: 75px;
  }
  &__txt {
    width: 300px;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #4883A5;

    span {
      font-weight: 500;
    }
  }
}

.header {

  &__inner {
    padding: 20px 0;
  }

  &__search-lang {
    gap: 60px;
    color: #535C6D;

    i {
      font-size: 22px;
      margin-right: 10px;
    }

    .tel {
      font-size: 18px;
      color: #535C6D;

      &:hover {
        color: #002542;
      }
    }

    .langs {
      font-size: 18px;
      gap: 8px;
      cursor: pointer;

      span:hover {
          color: #002542;
      }
    }

    .search {
      width: 23px;
      height: 23px;
    }
  }
}

.modal-inp {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 40px;
  padding: 0 10px;
  border-radius: 10px;
  color: #2c3e50;
  outline-color: #002542;

  &::placeholder {
    font-size: 14px;
  }
}

</style>