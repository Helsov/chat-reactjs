import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Response from './validation';

class Registration extends Component {
    state = {
        name: '',
        login: '',
        password: '',
        success: ''
    };

    componentWillMount(){
        this.verifReg();
    }

    verifReg = () => {
        localStorage.getItem('id_token') ? this.props.history.push('/') : console.log('dont token');
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    };

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

        const name = this.state.name;
        const login = this.state.login;
        const password = this.state.password;

        axios.post('http://localhost:3001/addUser', {name, login, password })
        .then(res => {
            console.log(res);
            
            this.setState({
                success: true
            });

            setTimeout(() => {
                this.props.history.push("/");
            }, 2000);
        })
        .catch(err => {
            console.log(err);
            this.setState({
                success: false
            })
        })
    }

    render(){
        return (
            this.state.success ? <Response/> :
            <div>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h2 className="form-signin-heading">Регистрация</h2>
                    <div className="form-group">
                        <input type="text" value={this.state.value} onChange={this.handleNameChange} className="form-control" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <input type="text" value={this.state.value} onChange={this.handleLoginChange} className="form-control" placeholder="Login" required />
                    </div>
                    <div className="form-group">
                        <input type="password" value={this.state.value} onChange={this.handlePasswordChange} className="form-control" placeholder="Password" required /> 
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Зарегистрироваться</button>
                </form>
                <h4>
                    <Link to="/">{'Авторизоваться'}</Link>
                </h4>
            </div>
        )
    }
}

export default Registration;