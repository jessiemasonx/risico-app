import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setNewLocalStorage } from '../functions/setNewLocalStorage.js';
import { getLocalStorageValue } from '../functions/getLocalStorageValue.js';

class MyHouseComponent extends PolymerElement {
  static get template() {
    return html`


	<style include="shared-styles">

	</style>

	<fieldset>
		<legend>Huisvesting</legend>
		<div class="form-item-container">
			<label for="living">Soort woning</label>
			<select id="living" on-change="changeAnswer" name="living">
					<option value="own">Eigen woning</option>
					<option value="hire">Huurwoning met huurtoeslag</option>
					<option value="no-hire">Huurwoning zonder huurtoeslag</option>
					<option value="unknown">Onbekend</option>
			</select>
		</div>
		<div class="form-item-container">
			<label for="household">Type huishouden</label>
			<select id="household" on-change="changeAnswer" name="household">
					<option value="oneparent">Eenouderhuishouden</option>
					<option value="married-kids">Gehuwd paar met kinderen</option>
					<option value="not-married-kids">Niet-gehuwd paar met kinderen</option>
					<option value="married-no-kids">Gehuwd paar zonder kinderen</option>
					<option value="institutional">Institutioneel huishouden</option>
					<option value="not-married-no-kids">Niet-gehuwd paar zonder kinderen</option>
					<option value="other">Overig huishouden</option>
					<option value="unknown">Onbekend huishouden</option>
			</select>
		</div>
		</fieldset>

    `;
  }
}


window.customElements.define('my-house-component', MyHouseComponent);

// NEXT COMPONENT


class MyRelationshipComponent extends PolymerElement {
  static get template() {
    return html`



		<style include="shared-styles">

		</style>

		<fieldset>
			<legend>Relaties</legend>
			<div class="form-item-container">
				<label for="divorce">Ouders gescheiden</label>
				<select id="divorce" on-change="changeAnswer" name="divorce">
					<option value="no">Nee</option>
					<option value="yes">Ja</option>
				</select>
			</div>
		</fieldset>
    `;
  }
}

window.customElements.define('my-relationship-component', MyRelationshipComponent);