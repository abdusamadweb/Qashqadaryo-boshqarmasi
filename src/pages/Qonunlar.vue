<template>
  <div class="info">
    <MyImg>Ўзбекистон Республикаси қонунлари</MyImg>
    <div class="info__container container">
      <div class="info__inner">
        <ul class="info__list">
          <MalumotlarItem :openSource="$store.state.openSource">
            <MyButton>
              <span>батафсил</span>
              <i class="fal fa-long-arrow-alt-right"/>
            </MyButton>
          </MalumotlarItem>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MyImg from "@/components/UI/MyImg";
import MalumotlarItem from "@/components/MalumotlarItem";
import MyButton from "@/components/UI/MyButton";

export default {
  components: {MyButton, MalumotlarItem, MyImg}
}
</script>

<style lang="scss" scoped>

.info {

  &__inner {
    padding: 50px 0;
  }
}

</style>