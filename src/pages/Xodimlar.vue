<template>
  <div class="raxbariyat">
    <MyImg>ходимлар</MyImg>
    <div class="raxbariyat__container container">
      <div class="raxbariyat__inner">
        <ul class="raxbariyat__list">
          <RaxbariyatXodimlarItem :studyList="$store.state.studyList" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import RaxbariyatXodimlarItem from "@/components/RaxbariyatXodimlarItem";
import MyImg from "@/components/UI/MyImg";
export default {
  components: {MyImg, RaxbariyatXodimlarItem}
}
</script>

<style lang="scss">

.raxbariyat {

  &__inner {
    padding: 50px 0;
  }
}

</style>