<template>
  <TodosComponent />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import TodosComponent from '../components/TodosComponent.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    TodosComponent,
  },
});
</script>
