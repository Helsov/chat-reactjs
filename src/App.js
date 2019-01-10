import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Registration from './components/authentication/registration';
import Authorization from './components/authentication/authorization';
import PageAPI from './components/pageApi/index';
import MainPage from './components/main/mainPage';


class App extends Component {
  render() {
    const {login} = this.props;
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <BrowserRouter>
              <Switch>
              <Route exact path="/" login={login} component={MainPage}/>
              <Route exact path="/login" component={Authorization}/>
              <Route exact path="/registration" component={Registration}/>
              <Route exact path="/api" component={PageAPI}/>
              </Switch> 
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = store => {
  return {
    ...store
  }
}

export default connect(mapStateToProps)(App)