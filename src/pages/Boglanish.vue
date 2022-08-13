<template>
  <div class="contact">
    <MyImg>Богланиш</MyImg>
    <div class="contact__container container">
      <div class="contact__inner row between">
        <div class="contact__info col-md-5">
          <ContactList />
          <ContactForm />
        </div>
        <div class="col-md-7">
          <iframe class="info__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99419.97853441215!2d65.72175756183337!3d38.8582335852689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea63944a8e4c1%3A0x694369ac2037509d!2z0JrQsNGA0YjQuCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2shk!4v1660126499680!5m2!1sru!2shk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImg from "@/components/UI/MyImg";
import ContactList from "@/components/Contact/ContactList";
import ContactForm from "@/components/Contact/ContactForm";

export default {
  components: {ContactForm, ContactList, MyImg}
}
</script>

<style lang="scss" scoped>

.contact {

  &__inner {
    padding: 50px 0;

    iframe {
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
  }
}

</style>