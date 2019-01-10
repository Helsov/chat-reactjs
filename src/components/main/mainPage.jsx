import React from 'react';
import { connect } from 'react-redux';
import AuthService from '../authentication/authnService';
import withAuth from '../authentication/withAuth';
const Auth = new AuthService();

class MainPage extends React.Component {
    state = {
        login: this.props.user.login
    }

    handleLogout(){
        Auth.logout()
        this.props.history.push('/login');
       
    }    

    render(){
        return (
            <div>
                <h1>Hello {this.state.login}</h1>
                <p className="App-intro">
                    <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
                </p>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
      ...store
    }
  }
  
export default connect(mapStateToProps)(withAuth(MainPage))