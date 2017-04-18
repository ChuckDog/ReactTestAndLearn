import React from 'react';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pui-react-buttons';

class PuiTest extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			showDefaultMessage: false,
			showPrimaryMessage: false,
			showDangerMessage: false,
			showBrandMessage: false
		};
		this.showMessage = this.showMessage.bind(this);
	}

	showMessage(e) {

		var btnType;
		if(e.target.className.indexOf('default') !== -1) {
			btnType = 'Default';
		} else if (e.target.className.indexOf('primary') !== -1) {
			btnType = 'Primary';
		} else if (e.target.className.indexOf('danger') !== -1) {
			btnType = 'Danger';
		} else if (e.target.className.indexOf('brand') !== -1) {
			btnType = 'Brand';
		}

		const btnName = 'show' + btnType + 'Message';
		var clickObj = {};
		clickObj[btnName] = true;
		this.setState(clickObj);
	}

	render() {

		return (
			<div className="puiBtnContainer">
		       <DefaultButton onClick={this.showMessage}>Show Message</DefaultButton> <br /><br />
		       { this.state.showDefaultMessage ? <h1>Hello world!</h1> : null } <br />
		       <PrimaryButton onClick={this.showMessage}>Show Message</PrimaryButton> <br /> <br />
		       { this.state.showPrimaryMessage ? <h1>Hello world!</h1> : null } <br />
		       <DangerButton onClick={this.showMessage}>Show Message</DangerButton> <br /> <br />
		       { this.state.showDangerMessage ? <h1>Hello world!</h1> : null } <br />
		       <BrandButton onClick={this.showMessage}>Show Message</BrandButton> <br /> <br />
		       { this.state.showBrandMessage ? <h1>Hello world!</h1> : null }
		    </div>
		);
	}
}

export default PuiTest;