<template>
  <div class="container">
    <div class="test"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";

.test {
  width: 100px;
  height: 100px;
  background-color: #000;

  @include hovershadow();
}
</style>
