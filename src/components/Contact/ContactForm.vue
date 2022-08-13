<template>
  <form class="contact__form form" @submit.prevent>
    <label>
      <input class="form__inp" type="text" name="name" placeholder="Ф.И.Ш">
    </label>
    <label>
      <input class="form__inp" type="text" name="name" placeholder="Почта манзили">
    </label>
    <label>
      <input class="form__inp" type="text" name="name" placeholder="Телефон рақами">
    </label>
    <label>
      <textarea class="form__inp form__area" placeholder="Xабар"></textarea>
    </label>
    <MyButton><span>юбориш</span></MyButton>
  </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: {MyButton}
}
</script>

<style lang="scss" scoped>

.form {
  padding: 60px;
  padding-bottom: 40px;
  border-radius: 16px;
  box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.2);

  label {
    display: block;
  }

  &__inp {
    width: 100%;
    height: 50px;
    padding: 12px 24px;
    margin-bottom: 40px;
    border-radius: 10px;
    border: 1px solid #c6c6c6;
    color: #002542;
    outline-color: #596c7c;

    &::placeholder {
      color: #B6B6B6;
    }
  }

  &__area {
    height: 120px;
  }
}

</style>