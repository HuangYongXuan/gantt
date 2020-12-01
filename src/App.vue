<template>
	<gantt :config="config"/>
</template>

<script>
import Gantt from '@/components/Gantt.vue';

export default {
	components: {Gantt},
	data() {
		return {
			config: {
				columns: [
					{name: 'id', filed: 'id'},
					{name: 'name', filed: 'name'}
				],
				data: [
					{
						id: 1, name: 'Project', startDate: '2020-11-01 12:00:00', endDate: '2020-11-01 13:00:00', color: 'red', children: [
							{id: 2, name: 'Task', startDate: '2020-11-01 12:20:00', endDate: '2020-11-01 12:40:00', color: 'red'}
						]
					}
				]
			}
		}
	}
}
</script>

<style>
body, html {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
}
</style>
