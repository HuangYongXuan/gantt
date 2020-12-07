<template>
	<div class="mx-table">
		<table>
			<thead>
			<tr>
				<th v-for="col in columns" :key="col.filed">
					{{ col.name }}
				</th>
			</tr>
			</thead>
			<mx-table-column :data="data" :columns="columns"/>
		</table>
	</div>
</template>

<script>
import MxTableColumn from '@/components/table/MxTableColumn.js';

export default {
	name: 'MxTable',
	components: {MxTableColumn},
	provide() {
		return {
			table: this
		};
	},
	props: {
		data: Array,
		columns: {
			type: Array
		}
	}
}
</script>

<style scoped lang="scss">
.mx-table {

}
</style>