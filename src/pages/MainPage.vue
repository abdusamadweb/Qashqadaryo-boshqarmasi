<template>
  <div>
    <Hero />
    <XududiyBolim />
    <HeroNews />
    <StudyJob />
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import XududiyBolim from "@/components/Xududiy/XududiyBolim";
import HeroNews from "@/components/HeroNews";
import StudyJob from "@/components/KasbgaOqitish/StudyJob";
import Footer from "@/components/Footer/Footer";

export default {
  components: {Footer, StudyJob, HeroNews, XududiyBolim, Hero}


}
</script>

<style scoped>

</style>