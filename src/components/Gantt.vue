<template>
	<div class="gantt">
		<div class="table" v-if="config.columns && config.columns.length > 0">
			<mx-table :data="config.data" :columns="config.columns"></mx-table>
		</div>
		<div class="gantt-container"></div>
	</div>
</template>

<script>
import MxTable from '@/components/table/MxTable';
export default {
	name: 'Gantt',
	components: {MxTable},
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