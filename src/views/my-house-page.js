/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {
    PolymerElement,
    html
} from '@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';
import '../components/my-house-component.js';
import '../components/my-button-component.js';



class MyHousePage extends PolymerElement {
    static get template() {
        return html `
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
		.flex {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
		}
		.buttons {
			display: flex;
			justify-content: space-between;
		}
      </style>

		<div class="card">
			<h1>Huisvesting & relaties</h1>
			<form>
				<my-house-component></my-house-component>
				<my-relationship-component></my-relationship-component>
				<div class="buttons">
					<my-prev-button></my-prev-button>
					<my-next-button></my-next-button>
				</div>
			</form>
		</div>
    `;
    }

}


window.customElements.define('my-house-page', MyHousePage);
