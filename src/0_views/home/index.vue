<template>
  <div class="container">
    <div class="test"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.test {
  width: 100px;
  height: 100px;
  background-color: #000;

  @include hovershadow();
}
</style>
