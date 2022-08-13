<template>
  <button class="btn row align-center"><slot></slot></button>
</template>

<script>
export default {

}
</script>

<style lang="scss" >

.btn {
  text-transform: capitalize;
  font-size: 20px;
  border-radius: 7px;
  padding: 5px 0;
  color: #fff;
  background: #535C6D;
  transition: background 0.3s ease;
  
  &:hover {
    background: #002542;
  }
  span {
    margin: 0 10px;
  }
  i {
    margin: 0 8px;
  }
}

</style>