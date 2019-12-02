<template>
  <div>
    <div class="page-title">Новая задача</div>
    <div class="form-item">
      <div class="input-title">Название</div>
      <input type="text" placeholder="Новая задача" autocomplete="off" v-model="title">
    </div>
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
    <button @click="submit">Сохранить задачу</button>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  data() {
    return {
      title: '',
      tags: '',
      date: Date.now(),
      description: ''
    }
  },
  components: {
    Datepicker
  },
  methods: {
    submit() {
      let task = {
        id: Date.now(),
        title: this.title,
        tags: this.tags,
        date: this.date,
        description: this.description,
        status: 'todo'
      }

      this.$store.dispatch('saveTask', task);
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss">
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
.form-item input, #date {
  width: 360px;
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
