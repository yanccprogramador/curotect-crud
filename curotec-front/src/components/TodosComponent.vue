<template>
  <div>
    <h1>Todos</h1>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="todo" label="Todo" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn @click="addTodo"> Add </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-list lines="one">
          <v-list-item v-for="todo in todos" :key="todo.id">
            <template v-slot:append>
              <v-icon icon="mdi-trash-can" @click="deleteTodo(todo.id)"></v-icon>
              <v-icon
                icon="mdi-check-all"
                @click="completeTodo(todo)"
                v-if="todo.status == 'active'"
              ></v-icon>
              <v-icon
                icon="mdi-check-bold"
                @click="activeTodo(todo)"
                v-if="todo.status == 'completed'"
              ></v-icon>
            </template>

            <v-list-item-title v-text="todo.action"></v-list-item-title>
            <v-list-item-subtitle v-text="todo.status"></v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TodoComponent",
  data() {
    return {
      todo: "",
    };
  },
  computed: {
    todos: {
      get() {
        return this.$store.getters.todos;
      },
    },
  },
  created() {
    this.$store.dispatch("initialize");
  },
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo", { action: this.todo });
    },
    deleteTodo(id){
      this.$store.dispatch("deleteTodo", id);
    },
    activeTodo(todo){
      this.$store.dispatch("updateTodo", {...todo, status:'active'});
    },
    completeTodo(todo){
      this.$store.dispatch("updateTodo", {...todo, status:'completed'});
    }
  },
};
</script>
