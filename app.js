const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            toDoTime: '',
            todos: []
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({ 
                    text: this.newTodo, 
                    completed: false,
                    startTime: this.toDoTime
                });
                this.newTodo = '';
                this.toDoTime = '';
            }
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    }
});

app.mount('#app');
