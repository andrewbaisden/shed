<template>
  <div :class="container">
    <div>
      <h2>{{title}}</h2>
    </div>
    <div :class="starList" data-rating="3">
      <span :class="star">&nbsp;</span>
      <span :class="star">&nbsp;</span>
      <span :class="star">&nbsp;</span>
      <span :class="star">&nbsp;</span>
      <span :class="star">&nbsp;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "starList", "star", "container"]
};
</script>

<style lang="scss" scoped>
</style>
