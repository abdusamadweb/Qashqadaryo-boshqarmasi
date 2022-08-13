<template>
  <div class="gallery">
    <MyImg>Фотогалерия</MyImg>
    <div class="gallery__container container">
      <div class="gallery__inner">
        <ul class="galler__list row between">
          <GalleryItem :galleryList="$store.state.galleryList" />
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

<style lang="scss">

.gallery {

  &__inner {
    padding: 50px 0;
  }
}

</style>