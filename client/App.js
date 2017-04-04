import React,{Component} from 'react';
import ToastsList from './components/toasts/ToastsList';
import NavigationBar from './components/NavigationBar';
import ModalContainer from './components/common/ModalContainer';

export default class App extends Component {
  // componentWillReceiveProps() {
  //   window.previousLocation = this.props.location;
  //   console.log("previous location is " + window.previousLocation.pathname);
  // }
  componentWillReceiveProps(nextProps) {
    // if we changed routes...
    if ((
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    )) {
      // save the old children
      this.previousChildren = this.props.children
    }
  }

  render() {
    let { location } = this.props

    let isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )

    return (
        <div className="container site-container full-height">
          <NavigationBar pathname={this.props.location.pathname}/>
          <ToastsList/>
          <div>
            {isModal ?
              this.previousChildren :
              this.props.children
            }
            {isModal && (
                <ModalContainer navigationModal={true} backToLink={this.previousChildren.props.location.pathname} modalTitle = {location.state.title} transitionName="modal-anim">
                  {this.props.children}
                </ModalContainer>
            )}
          </div>
        </div>
    );
  }
}
