let React = require('react');

let MovieListComponent = React.createClass({
	render: function(){
		
		let {  page, total_pages, total_results, results } = this.props;
		let moviesListHtml = results.map(function(obj){
			
			let regexSpace = /\s+/g;
			let regexSpecialChars = /[^a-zA-Z0-9\-]/g;
			let hrefTitle = obj.original_title.replace(regexSpace, '-').replace(regexSpecialChars, '').toLowerCase();
			
			let src = "https://image.tmdb.org/t/p/w300/" + obj.backdrop_path ; // w500_and_h281_bestv2
			let href = "#/movie/detail/" + hrefTitle + '/' + obj.id;
			
			return (
				<div key={obj.id} className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-3">
					<a href={href}>
						<img src={src} />
						<h4>{obj.title}</h4>
					</a>
				</div>);
		});
		
		if(results.length === 0){
			return (
				<div className={"container mb-5"}>
					<div className={"row"}>
						<div className={"col-12 text-center"}>
							<span className={"fa fa-spin fa-spinner fa-4x"}>
							</span>
						</div>
					</div>
				</div>
			);
		}else{
			return (
				<div className={"container-fluid interior-wrapper mb-5"}>
					<div className={"row"}>
						{moviesListHtml}
					</div>
				</div>
			);
		}
		
		
	}
});

module.exports = MovieListComponent;