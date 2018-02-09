let React = require('react');

let httpService = require('HttpService');

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

let ModalController = React.createClass({
	
	// state and props
	
	getInitialState: function(){
		return {
		
		}
	},
	
	getDefaultProps: function() {
		return {
			modalId: '',
			header: 'Modal',
			close: 'Close',
			modalShow: false,
			onClose : function(){
				console.error('you did not set the onClose prop');
			}
		}
	},
	
	propTypes: {
		modalId : React.PropTypes.string.isRequired,
		header : React.PropTypes.string,
		close : React.PropTypes.string,
		show : React.PropTypes.bool
	},
	
	// controller methods
	
	openModal: function(){
		// console.log('open modal');
		$('#'+this.props.modalId).modal('show');
	},
	
	closeModal: function(){
		// console.log('close modal');
		let { onClose } = this.props;
		onClose();
		$('#' + this.props.modalId).modal('hide');
		
	},
	
	// life cycle methods
	
	componentWillMount: function(){
	
	},
	
	componentDidMount: function(){
	
	},
	
	componentWillReceiveProps: function(nextProps){
		// console.log('ModalController componentWillReceiveProps', nextProps);
		this.setState(nextProps);
		if(nextProps.show){
			this.openModal();
		}
	},
	
	shouldComponentUpdate: function(nextProps, nextState){
		// console.log('ModalController shouldComponentUpdate', nextProps, nextState);
		return true;
	},
	
	componentWillUpdate: function(){
	
	},
	
	componentDidUpdate: function(){
		// console.log('ModalController Did Update');
	},
	
	componentWillUnmount: function(){
	
	},
	
	render : function(){
		
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
							<button type="button" className="close" data-dismiss-disabled="modal" aria-label="Close" onClick={this.closeModal}>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							{this.props.children}
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss-disabled="modal" onClick={this.closeModal}>
								{close}
							</button>
						</div>
					</div>
				</div>
			</div>
			
		)
		
	}
	
});

module.exports = ModalController;

