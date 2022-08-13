<template>
  <div class="study">
    <div class="study__container container">
      <div class="study__inner">
        <h1 class="study__title">Касбга ўқитиш</h1>
        <ul class="study__list row between">
          <StudyJobItem :studyList="$store.state.studyList" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import StudyJobItem from "@/components/KasbgaOqitish/StudyJobItem";
import study1 from '@/assets/images/study1.png';
import study2 from '@/assets/images/study2.png';
import study3 from '@/assets/images/study3.png';

export default {
  components: {StudyJobItem},
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

.study {
  padding: 60px 0;

  &__title {
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 60px;
  }
}

</style>