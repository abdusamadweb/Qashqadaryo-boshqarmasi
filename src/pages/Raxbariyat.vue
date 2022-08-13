<template>
  <div class="raxbariyat">
    <MyImg>раҳбарият</MyImg>
    <div class="raxbariyat__container container">
      <div class="raxbariyat__inner">
        <ul class="raxbariyat__list">
          <RaxbariyatXodimlarItem :studyList="$store.state.studyList">
            <i class="fal fa-clock"></i>
            <span class="item__time">қабул кунлари: душанба - 14:00 дан 16:00 гача</span>
          </RaxbariyatXodimlarItem>
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

  i {
    font-size: 24px;
    margin-right: 14px;
  }

  .item__time {
    width: 290px;
    font-weight: 300;
  }
}

</style>