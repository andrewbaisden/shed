<template>
  <div id="app">
    <StarRating/>
  </div>
</template>

<script>
import StarRating from "@/components/StarRating.vue";

export default {
  name: "home",
  components: {
    StarRating
  }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Exo+2:300,400,700");
:root {
  --primary-bg-colour: #d8d8d8;
  --primary-font: "Exo 2", sans-serif;
  --primary-font-color: #1d1d1d;
  --container-bg-color: #ffffff;
}

html {
  font-size: 62.5%;
  /* font-size 1em = 10px on default browser settings */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
  font-family: var(--primary-font);
  color: var(--primary-font-color);
  background: var(--primary-bg-colour);
  h1 {
    font-weight: 300;
    font-size: 4rem;
  }
  p {
    font-size: 2rem;
  }
}
</style>

