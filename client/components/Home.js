import React,{Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';

// import {getCountryList} from '../actions/countryListActions';
// import {getHotelsList} from '../actions/hotelListActions';
// import {getAvailability} from '../actions/availabilityActions';
// import {getUserInfo} from '../actions/userInfoActions';

export default class Home extends Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      //Uncomment the following code once the APIs are ready. It is extremely important that the APIs from home
      //are called only if the user is authenticated, hence checking the state (redux state) before the API calls are triggered.

      // const {isAuthenticated} = this.props.auth;
      // if(isAuthenticated) {
      //   this.getCountryList();
      //   this.getHotelsList();
      //   this.getAvailability();
      //   this.getUserInfo();
      // }
      // else {
      //   this.context.router.push('/');
      // }
    }
    render() {
        return (
            <div>
              <div className="row">
                <div className="col-xs-12">
                  <h1>Home sweet home!</h1>
                </div>
              </div>
            </div>
        );
    }
}

//Marking required prop types ensure that another dev who will be using your component always knows what the component
//expects since React throws an error if a required prop is missing.

//Home also acts as the container(responsible for triggering API calls)

// Home.propTypes = {
//   getCountryList:React.PropTypes.func.isRequired,
//   getHotelsList:React.PropTypes.func.isRequired,
//   getAvailability:React.PropTypes.func.isRequired,
//   getUserInfo:React.PropTypes.func.isRequired
// }

// Home.contextTypes = {
//   router:React.PropTypes.object.isRequired
// }
//
// function mapStateToProps(state) {
//   return {
//     auth:state.auth,
//   }
// }
//
// export default connect(mapStateToProps, { getCountryList , getHotelsList, getAvailability,getUserInfo})(Home)
