<template lang="html">
  <div>
    <div v-if="task">
      <div class="page-title">Задача: {{ task.title }}</div>
      <div class="form-item">
        <div class="input-title">Теги</div>
        <input type="text" placeholder="#новая #задача" autocomplete="off" v-model="tags">
      </div>
      <div class="form-item">
        <div class="input-title">Срок</div>
        <datepicker placeholder="Укажите дату" v-model="date"></datepicker>
      </div>
      <div class="form-item">
        <div class="input-title">Описание</div>
        <textarea v-model="description"></textarea>
      </div>
      <div class="form-item">
        <div class="input-title">Статус</div>
        <select class="form-item-select" v-model="status">
          <option value="todo">Нужно сделать</option>
          <option value="active">В работе</option>
          <option value="complited">Готово</option>
        </select>
      </div>
      <button @click="submit">Сохранить задачу</button>
    </div>
    <div v-else>Задача не найдена</div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  data() {
    return {
      title: '',
      tags: '',
      date: '',
      description: '',
      status: ''
    }
  },
  components: {
    Datepicker
  },
  computed: {
    task() {
      return this.$store.getters.taskById(Number(this.$route.params.id));
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        tags: this.tags,
        date: this.date,
        description: this.description,
        status: this.status
      });
      this.$router.push('/');
    }
  },
  mounted() {
    this.title = this.task.title;
    this.tags = this.task.tags;
    this.date = this.task.date;
    this.description = this.task.description;
    this.status = this.task.status;
  }
}
</script>

<style lang="scss" scoped>
.form-item {
  width: 480px;
  border-bottom: 1px solid #bbb;
  display: flex;
  align-items: top;
  margin-bottom: 15px;
}
.input-title {
  width: 120px;
  margin: 5px 0;
  font-weight: bold;
}
.form-item input, #date, .form-item-select {
  width: 360px;
  font-family: inherit;
  font-size: 16px;
  padding: 5px 0;
  border: 0;
}
.form-item textarea {
  display: block;
  width: 360px;
  height: 208px;
  font-size: 16px;
  padding: 5px 0;
  margin-bottom: 10px;
  resize: none;
  border: 0;
}
button {
  width: 180px;
  padding: 5px 0;
  background-color: #52ADA2;
  color: #FFF;
  font-size: 16px;
  border: 0;
  transition: background-color .2s ease-in-out;
}
button:hover {
  background-color: #3A7A73;
}
</style>
