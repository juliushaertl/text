<!--
  - @copyright Copyright (c) 2022 Max <max@nextcloud.com>
  -
  - @author Max <max@nextcloud.com>
  -
  - @license GNU AGPL version 3 or any later version
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program. If not, see <http://www.gnu.org/licenses/>.
  -
  -->

<template>
	<NodeViewWrapper data-text-el="table-cell" as="td">
		<div class="container">
			<NodeViewContent class="content" />
			<Actions v-if="editor.isEditable"
				data-text-table-actions="row">
				<ActionButton data-text-table-action="add-row-before"
					close-after-click
					@click="addRowBefore">
					<template #icon>
						<TableAddRowBefore />
					</template>
					{{ t('text', 'Add row before') }}
				</ActionButton>
				<ActionButton data-text-table-action="add-row-after"
					close-after-click
					@click="addRowAfter">
					<template #icon>
						<TableAddRowAfter />
					</template>
					{{ t('text', 'Add row after') }}
				</ActionButton>
				<ActionButton data-text-table-action="remove-row"
					close-after-click
					@click="deleteRow">
					<template #icon>
						<Delete />
					</template>
					{{ t('text', 'Delete this row') }}
				</ActionButton>
			</Actions>
		</div>
	</NodeViewWrapper>
</template>

<script>
import { NodeViewWrapper, NodeViewContent } from '@tiptap/vue-2'
import Actions from '@nextcloud/vue/dist/Components/Actions'
import ActionButton from '@nextcloud/vue/dist/Components/ActionButton'
import { TableAddRowBefore, TableAddRowAfter, Delete } from '../../components/icons.js'

export default {
	name: 'TableCellView',
	components: {
		ActionButton,
		Actions,
		NodeViewWrapper,
		NodeViewContent,
		TableAddRowBefore,
		TableAddRowAfter,
		Delete,
	},
	props: {
		editor: {
			type: Object,
			required: true,
		},
		getPos: {
			type: Function,
			required: true,
		},
	},
	computed: {
		t: () => window.t,
	},
	methods: {
		deleteRow() {
			this.editor.chain()
				.focus()
				.setTextSelection(this.getPos())
				.deleteRow()
				.run()
		},
		addRowBefore() {
			this.editor.chain()
				.focus()
				.setTextSelection(this.getPos())
				.addRowBefore()
				.run()
		},
		addRowAfter() {
			this.editor.chain()
				.focus()
				.setTextSelection(this.getPos())
				.addRowAfter()
				.run()
		},
	},
}
</script>

<style scoped lang="scss">
td {
	position: relative;

	.container {
		display: flex;
		flex-wrap: wrap;
		min-height: 36px;
	}

	.content {
		flex: 1 1 0;
		margin: 0;
		padding-top: 0.6em;
	}

	.action-item {
		position: absolute;
		right: -48px;
		flex: 0 1 auto;
		display: none;
		top: 2px;
	}

	&:last-child {
		.action-item {
			display: block;
			opacity: 50%;
		}

		&:hover, &:active, &:focus, &:focus-within {
			.action-item {
				opacity: 100%;
			}
		}
	}

}

</style>
