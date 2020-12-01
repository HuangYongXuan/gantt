<template>
	<div class="gantt">
		<div class="table" v-if="config.columns && config.columns.length > 0">
			<table border="1" :width="300">
				<thead>
				<tr>
					<th v-for="col in config.columns" :key="col.filed">{{ col.name }}</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>1</td>
					<td>2</td>
				</tr>
				</tbody>
			</table>
		</div>
		<div class="gantt-container"></div>
	</div>
</template>

<script>
export default {
	name: 'Gantt',
	props: {
		config: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped lang="css">
.gantt {
	width: 100%;
	height: 100%;
}
</style>