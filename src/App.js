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
                <Route login={login} exact path="/" component={Authorization} /> 
                <Route path="/registration" component={Registration} /> 
                <Route path="/api_rest" component={PageAPI}/> 
                <Route path="/main" component={MainPage}/>
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