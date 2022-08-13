<template>
  <div class="gallery">
    <MyImg>Видеогалерия</MyImg>
    <div class="gallery__container container">
      <div class="gallery__inner">
        <ul class="galler__list row between">
          <GalleryItem :galleryList="$store.state.galleryList">
            <div class="item__imgs--before"></div>
            <i class="far fa-play-circle play"></i>
          </GalleryItem>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MyImg from "@/components/UI/MyImg";
import GalleryItem from "@/components/GalleryItem";

export default {
  components: {GalleryItem, MyImg}
}
</script>

<style lang="scss" scoped>


</style>