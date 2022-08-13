<template>
  <div class="job study">
    <MyImg>касбга ўқитиш</MyImg>
    <div class="job__container container">
      <div class="job__inner">
        <ul class="job__list row between">
          <StudyJobItem :studyList="$store.state.studyList" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MyImg from "@/components/UI/MyImg";
import StudyJobItem from "@/components/KasbgaOqitish/StudyJobItem";
export default {
  components: {StudyJobItem, MyImg}
}
</script>

<style lang="scss" scoped>

.job {
  padding: 0;

  &__inner {
    padding: 80px 0;
  }
}

</style>2