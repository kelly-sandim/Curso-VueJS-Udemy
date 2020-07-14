<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TasksProgress :progress="progress" />
		<NewTask @taskAdded="addTask" />
		<TaskGrid
				:tasks="tasks" 
				@taskDeleted="deleteTask"
				@taskStateChanged="toggleTaskState" />
	</div>
</template>

<script>
import TasksProgress from './components/TasksProgress.vue'
import NewTask from './components/NewTask.vue'
import TaskGrid from './components/TaskGrid.vue'

export default {
	components: { TasksProgress, NewTask, TaskGrid },
	data() {
		return {
			tasks: []
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done / total * 100) || 0
		}
	},
	watch: {
		tasks: {
			deep: true, //faz um watch profundo, dentro dos elementos tbm
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods: {
		addTask(task) {
			const sameName = t => t.name === task.name
			//Se tiver tamanho igual a zero, então realmente é um novo nome
			const reallyNew = this.tasks.filter(sameName).length === 0
			//aqui é uma bruxaria do JS
			//se o ReallyNew for falso, nem vai pra segunda expressão
			//se for verdadeiro, ele vai pra segunda expressão
			reallyNew && this.tasks.push({
				name: task.name,
				pending: task.pending || true
			})			
		},
		deleteTask(indice) {
			//splice: o primeiro parâmetro é a partir de que índice quer remover
			//o segundo parâmetro é quantos elementos, a partir desse índice, quer remover
			this.tasks.splice(indice, 1)
		},
		toggleTaskState(indice) {
			this.tasks[indice].pending = !this.tasks[indice].pending
		}
	},
	created() {
		const json = localStorage.getItem('tasks')
		const array = JSON.parse(json)
		this.tasks = Array.isArray(array) ? array : []		
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
