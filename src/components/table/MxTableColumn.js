/**
 * @module
 * @author      nayo
 * @date        2020/12/7 2:50 下午
 * @version     1.0
 */
let trNodes = []
export default {
	props: {
		data: Array,
		columns: {
			type: Array
		}
	},
	data() {
		return {
			trNodes: []
		}
	},
	methods: {
		getTr(data = [], columns = []) {
			this.data.forEach(item => {
				let td = this.getTd(item, columns)
				trNodes.push(<tr>{td}</tr>)
				if (item.children && Array.isArray(item.children)) {
					this.getTr(item.children, columns);
				}
			})
		},
		getTd(data = {}, columns = []) {
			return columns.map(item => {
				return <td>{data[item.filed]}</td>
			})
		}
	},
	render(createElement, context) {
		trNodes = [];
		this.getTr(this.data, this.columns)
		return <tbody>{trNodes}</tbody>
	}
}