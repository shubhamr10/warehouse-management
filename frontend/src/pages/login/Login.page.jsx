import { Component } from "react";
import "./Login.style.scss";
import LoginValidator from "./Login.validator";
import Input from "../../components/input/input.component";
import { Outlet } from "react-router-dom";

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email:"shubham@gmail.com",
            password:"1234",
            form_errors:{},
            loading:false,
            validated:false,
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e){
        const {name, value} = e.target;
        this.setState({
            [name]:value,
            validated:false,
            form_errors:{}
        })
    }

    onSubmitHandler = event => {
        event.preventDefault();
        event.stopPropagation();
        let errors_form = LoginValidator(this.state);
        console.log(errors_form);
        if(Object.keys(errors_form).length > 0){
            this.setState(() => {
                return {
                    form_errors:errors_form
                }
            }, () => {
                console.log(this.state);
                this.setState({validated:true});
            })
        } else {
            this.setState({validated:true});
        }

    }
    render(){
        const {email, password, form_errors, validated} = this.state;
        const { onSubmitHandler, onChangeHandler } = this;
        const isEmailInvalid = form_errors["email"] ? true : false;
        const isPasswordInvalid = form_errors["password"] ? true : false;
        return (
            <div className="container-fluid login-container">
                <Outlet/>
                <div className="row">
                    <div className="col-sm-12 text-uppercase text-center login-text">
                        Login
                    </div>
                    <div className="col-sm-6 mx-auto">
                        <form noValidate className={`login-form`} onSubmit={onSubmitHandler}>
                            <Input
                                label="Email"
                                name="email"
                                id="email"
                                type="email"
                                value={email}
                                isInvalid={isEmailInvalid}
                                placeholder={"Enter your email"}
                                onChangeHandler={onChangeHandler}
                                required={true}
                                autoComplete={"true"}
                                invalidMessage={form_errors["email"]}
                                isValidated={validated}
                                
                            />
                            <Input
                                label="Password"
                                name="password"
                                id="password"
                                type="password"
                                value={password}
                                isInvalid={isPasswordInvalid}
                                placeholder={"Enter your password"}
                                onChangeHandler={onChangeHandler}
                                required={true}
                                autoComplete={"true"}
                                invalidMessage={form_errors["password"]}
                                isValidated={validated}
                                
                            />

                            <button type="submit text-uppercase" className="btn btn-primary">LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;