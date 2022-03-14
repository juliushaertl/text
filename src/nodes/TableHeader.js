import { TableHeader } from '@tiptap/extension-table-header'

export default TableHeader.extend({
	content: 'inline*',

	addAttributes() {
		return {}
	},

	toMarkdown(state, node) {
		state.write(' ')
		state.renderInline(node)
		state.write(' |')
	},

	parseHTML() {
		return [
			{ tag: 'table thead:empty ~ tbody :first-child th', priority: 80 },
			{ tag: 'table thead:empty ~ tbody :first-child td', priority: 80 },
			{ tag: 'table thead :first-child th', priority: 60 },
			{ tag: 'table thead :first-child td', priority: 60 },
			{ tag: 'table tbody :first-child th', priority: 60 },
			{ tag: 'table tbody :first-child td', priority: 60 },
			{ tag: 'table > :first-child > th', priority: 60 },
			{ tag: 'table > :first-child > td', priority: 60 },
		]
	},
})
