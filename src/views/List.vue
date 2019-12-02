<template>
  <div>
    <div class="page-title">Нужно сделать</div>
    <div class="task-list" v-if="todoTasks.length">
      <TaskItem
        v-for="task in todoTasks"
        :task="task"
        :key="task.id"
      />
    </div>
    <div class="task-no-title" v-else>Задач нет</div>
    <div class="page-title">В работе</div>
    <div class="task-list" v-if="activeTasks.length">
      <TaskItem
        v-for="task in activeTasks"
        :task="task"
        :key="task.id"
      />
    </div>
    <div class="task-no-title" v-else>Задач нет</div>
    <div class="page-title">Готово</div>
    <div class="task-list" v-if="complitedTasks.length">
      <TaskItem
        v-for="task in complitedTasks"
        :task="task"
        :key="task.id"
      />
    </div>
    <div class="task-no-title" v-else>Задач нет</div>
    <!-- <button @click="getLog">GetLog</button> -->
  </div>
</template>

<script>
import TaskItem from "@/components/TaskItem"

export default {
  computed: {
    todoTasks() {
      return this.$store.getters.tasksByStatus('todo');
    },
    activeTasks() {
      return this.$store.getters.tasksByStatus('active');
    },
    complitedTasks() {
      return this.$store.getters.tasksByStatus('complited');
    }
  },
  components: {
    TaskItem
  },
  methods: {
    getLog() {
      console.log(this.activeTasks);
    }
  }
}
</script>

<style lang="scss" scoped>
.task-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
}
.task-no-title {
  font-size: 18px;
  margin: 0 0 30px 15px;
}
</style>
