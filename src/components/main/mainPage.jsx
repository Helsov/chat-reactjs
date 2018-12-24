import React from 'react';
import { connect } from 'react-redux';

class MainPage extends React.Component {
    state = {
        login: this.props.login
    }
    render(){
        return (
            <h1>Hello {this.state.login}</h1>
        )
    }
}

const mapStateToProps = store => {
    return {
      ...store
    }
  }
  
export default connect(mapStateToProps)(MainPage)