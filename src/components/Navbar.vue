<template>
  <div class="nav">
    <div class="container">
      <div class="nav-body">
        <div class="nav-logo">
          <router-link to="/" exact class="nav-logo-text">Task Borad</router-link>
        </div>
        <div class="nav-list">
          <router-link to="/" exact class="nav-item">Список задач</router-link>
          <router-link to="/newtask" class="nav-item">Новая задача</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.nav {
  height: 60px;
  background-color: #52ADA2;
}
.nav-body {
  height: 60px;
  display: flex;
  justify-content: space-between;
}
.nav-logo-text {
  color: #FFF;
  font-size: 28px;
  line-height: 60px;
}
.nav-list {
  display: flex;
}
.nav-item {
  line-height: 60px;
  color: #FFF;
  padding: 0 10px;
  cursor: pointer;
  transition: background-color .2s ease-in-out;
}
.nav-item:hover {
  background-color: #3A7A73;
}
</style>
