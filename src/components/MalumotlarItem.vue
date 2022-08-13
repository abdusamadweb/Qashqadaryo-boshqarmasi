<template>
  <li class="info__item item" v-for="item in openSource" :key="item.id">
    <div class="item__times row align-center">
      <i class="fal fa-calendar-day"/>
      <time class="item__time" :datetime="item.time">{{ item.time }}</time>
    </div>
    <p class="item__desc">{{ item.desc }}</p>
    <slot></slot>
  </li>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: {MyButton},
  props: {
    openSource: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>

.item {
  padding: 40px 2em;
  border-radius: 16px;
  border: 1px solid #A9B2BA;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  i {
    font-size: 22px;
    margin-right: 10px;
  }

  &__times {
    margin-bottom: 20px;
  }

  &__time {
    font-weight: 300;
    font-size: 20px;
  }

  &__desc {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 30px;
    color: #51596A;
  }
}

</style>