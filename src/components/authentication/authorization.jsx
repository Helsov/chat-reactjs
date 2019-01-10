import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import { connect } from 'react-redux';
import {getLogin} from '../../redux/action';
import AuthService from './authnService';

class Authorization extends Component {
    constructor(prop){
        super(prop);
        this.state = {
            login: '',
            password: '',
        };
        this.Auth = new AuthService();
    };

    componentWillMount(){
        this.verifReg();
    }

    verifReg = () => {
        localStorage.getItem('id_token') ? this.props.history.push('/') : console.log('dont token');
    }

    handleLoginChange = (e) => {
        this.setState({
            login: e.target.value
        })
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault(); 

        const login = this.state.login;
        const password = this.state.password;

        // axios.post('http://localhost:3001/users/login', {login, password })
        // .then(res => {
        //     console.log(res.data);

        //     if(res.data.sucess === true){
        //         window.localStorage.login = login;
        //         this.props.history.push('/');
        //     }
        // })
        // .catch(err => {
        //     console.log(err);
        // })

        this.Auth.login(login, password)
            .then(res =>{
                console.log(res.sucess)
                this.props.history.push('/');
            })
            .catch(err =>{
                console.log(err);
            })
    }

    render(){
        return (
            <div>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h2 className="form-signin-heading">Вход в систему</h2>
                    <div className="form-group">
                        <input type="text" value={this.state.value} onChange={this.handleLoginChange} className="form-control" placeholder="Login" required />
                    </div>
                    <div className="form-group">
                        <input type="password" value={this.state.value} onChange={this.handlePasswordChange} className="form-control" placeholder="Password" required /> 
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
                </form>
                <h4>
                    <Link to="/registration">{'Регистрация'}</Link>
                </h4>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
      ...store
    }
}

function mapDispatchToProps( dispatch ){
    return {
      getLogin(login) {
        dispatch(getLogin(login))
      },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization)