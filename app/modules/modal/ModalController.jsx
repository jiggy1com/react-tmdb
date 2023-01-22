import React from 'react';

import {HttpService} from 'app/services/HttpService';

// class MyComponent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { /* initial state */ };
// 	}
// }
//
// is equivalent to
//
// var MyComponent = React.createClass({
// 	getInitialState() {
// 		return { /* initial state */ };
// 	},
// });

export class ModalController extends React.Component {


	// controller methods

	openModal(){
		// console.log('open modal');
		$('#'+this.props.modalId).modal('show');
	}

	closeModal(){
		// console.log('close modal');
		let { onClose } = this.props;
		onClose();
		$('#' + this.props.modalId).modal('hide');
	}

	// life cycle methods

	componentWillReceiveProps(nextProps){
		// console.log('ModalController componentWillReceiveProps', nextProps);
		this.setState(nextProps);
		if(nextProps.show){
			this.openModal();
		}
	}

	shouldComponentUpdate(nextProps, nextState){
		// console.log('ModalController shouldComponentUpdate', nextProps, nextState);
		return true;
	}

	componentWillUpdate(){

	}

	componentDidUpdate(){
		// console.log('ModalController Did Update');
	}

	componentWillUnmount(){

	}

	render (){

		let { header, close, modalId, showModal, onClose } = this.props;

		if(modalId === ''){
			console.error('You did not set the modalId. This is required, and MUST be unique.');
		}

		return (

			<div className="modal" tabIndex="-1" role="dialog" id={modalId} data-backdrop={"static"}>
				<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">
								{header}
							</h5>
							<button type="button" className="close" data-dismiss-disabled="modal" aria-label="Close" onClick={this.closeModal.bind(this)}>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							{this.props.children}
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss-disabled="modal" onClick={this.closeModal.bind(this)}>
								{close}
							</button>
						</div>
					</div>
				</div>
			</div>

		)

	}

}

ModalController.defaultProps = {
	modalId: '',
	header: 'Modal',
	close: 'Close',
	modalShow: false,
	onClose (){
		console.error('you did not set the onClose prop');
	}
}
