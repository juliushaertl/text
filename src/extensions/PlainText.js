/*
 * @copyright Copyright (c) 2022 Max <max@nextcloud.com>
 *
 * @author Max <max@nextcloud.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
*/

import { Extension } from '@tiptap/core'

/* eslint-disable import/no-named-as-default */
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Text from '@tiptap/extension-text'
/* eslint-enable import/no-named-as-default */

import PlainTextDocument from './../nodes/PlainTextDocument.js'

export default Extension.create({
	name: 'PlainText',

	addExtensions() {
		return [
			PlainTextDocument,
			Text,
			CodeBlockLowlight,
		]
	},

})
