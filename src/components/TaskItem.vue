<template>
  <div>
    <div class="task-item">
      <router-link :to="'/task/' + task.id"><div class="task-item-title">{{ task.title }}</div></router-link>
      <div class="task-item-body">
        <div class="task-item-tags">{{ task.tags }}</div>
        <div class="task-item-descr">{{ task.description }}</div>
        <div class="task-item-date">Срок: {{ new Date(task.date).toLocaleDateString() }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task']
}
</script>

<style lang="scss" scoped>
.task-item {
  flex: 0 0 330px;
  margin: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .07), 0 2px 8px rgba(0, 0, 0, .07), 0 2px 16px rgba(0, 0, 0, .07);
}
.task-item-title {
  background-color: #52ADA2;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
}
.task-item-body {
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.task-item-descr {
  width: 300px;
  height: 150px;
  margin: 10px 0;
  text-overflow: ellipsis;
  overflow: hidden;
}
.task-item-date {
  background-color: #52ADA2;
  color: #FFF;
  padding: 5px 10px;
}
</style>
