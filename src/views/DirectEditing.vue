<!--
  - @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
  -
  - @author Julius Härtl <jus@bitgrid.net>
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
	<div id="direct-editor" :class="{'icon-loading': saving}">
		<EditorWrapper ref="editor"
			:initial-session="initialSession"
			:active="true"
			:mime="initial.mimetype"
			:is-direct-editing="true"
			@ready="loaded">
			<template #header>
				<button class="icon-share" @click="share" />
				<button class="icon-close" @click="close" />
			</template>
		</EditorWrapper>
	</div>
</template>

<script>
import Vue from 'vue'
import EditorWrapper from '../components/EditorWrapper.vue'

const log = Vue.observable({
	messages: [],
	mtime: 0,
})

const callMobileMessage = (messageName, attributes) => {
	console.debug('callMobileMessage ' + messageName, attributes)
	let message = messageName
	if (typeof attributes !== 'undefined') {
		message = {
			MessageName: messageName,
			Values: attributes,
		}
	}
	let attributesString = null
	try {
		attributesString = JSON.stringify(attributes)
	} catch (e) {
		attributesString = null
	}

	// Forward to mobile handler
	if (window.DirectEditingMobileInterface && typeof window.DirectEditingMobileInterface[messageName] === 'function') {
		if (attributesString === null || typeof attributesString === 'undefined') {
			window.DirectEditingMobileInterface[messageName]()
		} else {
			window.DirectEditingMobileInterface[messageName](attributesString)
		}
	}

	// iOS webkit fallback
	if (window.webkit
		&& window.webkit.messageHandlers
		&& window.webkit.messageHandlers.DirectEditingMobileInterface) {
		window.webkit.messageHandlers.DirectEditingMobileInterface.postMessage(message)
	}

	window.postMessage(message)
}

window.addEventListener('message', function(message) {
	log.messages.push(message.data)
	console.debug('postMessage', message)
})

export default {
	name: 'DirectEditing',
	components: { EditorWrapper },
	data() {
		return {
			initial: OCP.InitialState.loadState('text', 'file'),
			messages: log.messages,
			log,
			saving: false,
		}
	},
	computed: {
		initialSession() {
			return JSON.parse(this.initial.session) || null
		},
	},
	beforeMount() {
		callMobileMessage('loading')
	},
	mounted() {
		document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0')
	},
	methods: {
		async close() {
			this.saving = true
			setTimeout(async () => {
				await this.$refs.editor.close()
				callMobileMessage('close')
			}, 0)
		},
		share() {
			callMobileMessage('share')
		},
		loaded() {
			callMobileMessage('loaded')
		},
	},
}
</script>

<style scoped lang="scss">
	body {
		position: fixed;
	}

	#direct-editor {
		width: 100%;
		height: 100%;
		position: fixed;
		overflow: hidden;

		&::v-deep .text-editor {
			height: 100%;
			top: 0;
		}
		&::v-deep .text-editor__wrapper div.ProseMirror {
			margin-top: 0;
		}
	}

	pre {
		width: 100%;
		max-width: 700px;
		margin: auto;
		background-color: var(--color-background-dark);
	}

	button {
		width: 44px;
		height: 44px;
		margin: 0;
		background-size: 16px;
		border: 0;
		background-color: transparent;
		opacity: .5;
		color: var(--color-main-text);
		background-position: center center;
		vertical-align: top;
		&:hover, &:focus, &:active {
			background-color: var(--color-background-dark);
		}
		&.is-active,
		&:hover,
		&:focus {
			opacity: 1;
		}
	}
</style>
