<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import "../public/reset.css";
@import url('https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap&subset=cyrillic');

$red-pear: #7B3638; //text: milk-tooth
$carmine-pink: #E54B49; //text: red-pear
$milk-tooth: #FAEBD6; //text: carmine-pink
$emerald-wave: #52ADA2; //text: milk-tooth

#app {
  font-family: "PT Sans", sans-serif;
  color: #333;
}
.container {
  width: 1080px;
  margin: 0 auto;
}
.main {
  padding: 30px 0;
}
.page-title {
  font-size: 24px;
  margin-bottom: 15px;
}
</style>
