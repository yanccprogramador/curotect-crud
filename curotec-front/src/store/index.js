import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:[]
  },
  getters: {
    todos(state){
      return state.todos
    }
  },
  mutations: {
    initializeTodos(state,allTodos){
      state.todos=allTodos;
    }
  },
  actions: {
     addTodo({dispatch},todo){
      fetch('http://localhost:8000/api/todos',{method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(todo)})
      .then(async (data)=>{
        if (data.status == 201){
          dispatch('initialize')
        }
      }).catch((error)=>console.log(error))
    },
    async initialize({commit}){
      let allTodos = await fetch('http://localhost:8000/api/todos',{method: 'GET', headers: {'Accept': 'application/json'}})
      .then(data=>data.json()).catch((error)=>console.log(error))
      commit('initializeTodos',allTodos);
    },
    async deleteTodo({commit}, id){
      let data = await fetch('http://localhost:8000/api/todo/'+id,{method: 'DELETE', headers: {'Accept': 'application/json'}}).catch((error)=>console.log(error))
      if (data.status == 200){ 
        let allTodos = await fetch('http://localhost:8000/api/todos',{method: 'GET', headers: {'Accept': 'application/json'}})
        .then(data=>data.json()).catch((error)=>console.log(error))
        commit('initializeTodos',allTodos);
      }
    },
    async updateTodo({commit}, todo){
      let data = await fetch(`http://localhost:8000/api/todo/${todo.id}`,{method: 'PUT', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(todo)}).catch((error)=>console.log(error))
      if (data.status == 200){ 
        let allTodos = await fetch('http://localhost:8000/api/todos',{method: 'GET', headers: {'Accept': 'application/json'}})
        .then(data=>data.json()).catch((error)=>console.log(error))
        commit('initializeTodos',allTodos);
      }
    }
  },
  modules: {
  }
})
