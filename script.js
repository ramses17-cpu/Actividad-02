const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            tasks: [
                { name: 'Tarea de ejemplo 1', completed: false },
                { name: 'Tarea de ejemplo 2', completed: false },
                { name: 'Tarea de ejemplo 3', completed: false }
            ]
        };
    },
    computed: {
        completedTasks() {
            return this.tasks.filter(task => task.completed).length;
        },
        progress() {
            return Math.round((this.completedTasks / this.tasks.length) * 100);
        },
        progressColor() {
            if (this.progress <= 40) {
                return 'green';
            } else if (this.progress <= 70) {
                return 'yellow';
            } else {
                return 'red';
            }
        }
    },
    methods: {
        addTask() {
            if (this.newTask.trim()) {
                this.tasks.push({ name: this.newTask, completed: false });
                this.newTask = '';
            }
        },
        updateProgress() {
            // Método para recalcular el progreso al marcar/desmarcar tareas
        }
    }
});

app.mount('#app');
