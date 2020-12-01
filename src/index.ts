/**
 * @module
 * @author      nayo
 * @date        2020/12/1 4:24 下午
 * @version     1.0
 */
interface GanttConfig {
	data: GanttData[],
	columns: GanttColumns[]
}

interface GanttColumns {
	name: String,
	width: Number,
	treeNode?: Boolean,
	filed?: String
}

interface GanttData {
	id: String | Number,
	children?: GanttData[],
	color?: String,
	startData: String | Date,
	endData: String | Date,
	progress?: Number
}