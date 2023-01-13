import React from 'react';
import {HttpService} from 'app/services/HttpService';
// import TVList from "TVModule";
import {TVList} from "modules/tv/TVList";
import {CamelCase} from 'app/services/CamelCase';
import {PaginationController} from 'PaginationModule';

export class TVController extends React.Component {

    constructor(props) {
        super(props);
        this.httpService = new HttpService();
        this.state = {
            // locals
            pageTitle: '',
            route: null, //document.location.pathname,

            page: 0,
            total_pages: 0,
            total_results: 0,
            results: [],
            update: false,
            joe: '',

            // results
            // data : {
            // 	page : 1,
            // 	results : [],
            // 	total_pages : 0,
            // 	total_results : 0
            // }
        }

        // console.log('TVController', this);

    }

    UNSAFE_componentWillMount() {
        console.log('componetWillMount or UNSAFE_componentWillMount');
        this.setState((state, props) => {
            return {
                route: document.location.pathname
            }
        });
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.doOldDidMount()
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
        // this.getTVData({
        // 	page: 1,
        // 	route: this.state.route
        // })
    }

    // useEffect(() => { moveMap(position) }, [position])

    useEffect() {
        console.log('useEffect')
        this.doOldDidMount();
    }


    // custom methods
    getTVData(obj) {
        console.log('getTVData')
        window.scrollTo(0, 0);

        let self = this;
        let {
            page,
            route
        } = obj;

        let arrRoute = route.split('/');
        let uri = arrRoute[arrRoute.length - 1];
        let apiPath = uri.replace(/-/g, '_');
        let pageTitle = uri.replace(/-/g, ' ');
        this.setState((state, props) => {
            return {
                pageTitle: pageTitle
            }
        });

        if (obj) {
            page = obj.page;
        }

        if (page === 0) {
            page = 1;
        }

        let path = '/api/v1/tv/' + apiPath + '/' + page;

        console.log('path', path);
        this.httpService.doGet(path).then((res) => {
            console.log('res', res);

            this.setState((state, props) => {
                return {
                    page: res.data.page,
                    total_pages: res.data.total_pages,
                    total_results: res.data.total_results,
                    results: res.data.results,
                    update: true,
                }
            });
        });
    }

    handleEvent(e) {

        let {
            page,
            total_pages,
            route
        } = this.state;

        let newPage = e.action === 'first' ? 1 									// go to first page
            : e.action === 'last' ? total_pages 						// go to last page
            : (e.action === 'prev' && page > 1) ? page - 1 				// go to previous page
            : (e.action === 'next' && page < total_pages) ? page + 1 	// go to next page
            : (e.action === 'prev' && page < 1) ? page 					// stay on page
            : (e.action === 'next' && page > total_pages) ? page 		// stay on page
            : e.page; // go directly to page

        // this.setState((state, props) => {
        //     return {
        //         results: [],
        //         page: newPage,
        //         update: true,
        //     }
        // })

        if (page !== newPage) {

            this.setState((state, props) => {
                return {
                    results: [],
                    page: newPage,
                    update: true
                }
            })

            this.getTVData({
                page: newPage,
                route: route
            });

        }
    }

    // react methods

    doOldDidMount() {
        console.log('doOldDidMount')
        this.getTVData({
            page: 1,
            route: this.state.route
        });
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.warn('shouldComponentUpdate', this.state, nextState)

        if (this.state.route !== document.location.pathname) {
            this.setState((state, props) => {
                return {
                    route: document.location.pathname
                }
            }, () => {
                this.getTVData({
                    page: 1,
                    route: this.state.route
                });
            })
            return false;
        }

        if (nextState.update) {
            this.setState((state, props) => {
                return {
                    update: false
                }
            });
            return true;
        } else {
            return false;
        }
        // TODO: save this code - refactor with hooks or something
        // if(this.props.location.pathname !== nextProps.location.pathname){
        // 	this.getTVData({
        // 		page : 1,
        // 		route : nextProps.location.pathname
        // 	});
        // 	return true;
        // }else{
        // 	if(this.update){
        // 		this.update = false;
        // 		return true;
        // 	}else{
        // 		return false;
        // 	}
        // }
    }

    render() {

        console.log('render');

        let {
            data,
            page,
            total_pages,
            total_results,
            results,
            pageTitle
        } = this.state;

        return (
            <div className={"container-fluid interior-wrapper mt-5 mb-5"}>

                <h1 className={"card-header"}>
                    TV: <CamelCase str={pageTitle}>
                </CamelCase>
                </h1>

                <TVList
                    list={results}>
                </TVList>

                {typeof results !== 'undefined' && results.length > 0 ?
                    <PaginationController
                        page={page}
                        total_pages={total_pages}
                        total_results={total_results}
                        notifyParent={this.handleEvent.bind(this)}>
                    </PaginationController>
                    :
                    null
                }

            </div>
        )
    }

}
