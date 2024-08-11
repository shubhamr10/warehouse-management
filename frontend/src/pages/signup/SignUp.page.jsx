import { Component } from "react";
import { Outlet } from "react-router-dom";
import Input from "../../components/input/input.component";
import "./SignUp.styles.scss";
import SignUpValidator from "./SignUp.validator";



class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            firstName:"",
            lastName:"",
            designation:"",
            password:"",
            rePassword:"",
            form_errors:{},
            validated:false
        }
    }

    onChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({
            [name]:value,
            form_errors:{},
            validated:false
        })
    }

    onSubmitHandler = e => {
        e.preventDefault();
        e.stopPropagation();
        const errors_form = SignUpValidator(this.state);
        if(Object.keys(errors_form).length > 0){
            this.setState(()=>{
                return {
                    form_errors:errors_form
                }
            }, () => {
                this.setState({
                    validated:true
                })
            })
        } else {
            console.log(this.state);
        }
    }


    render(){
        const { firstName, lastName, designation, password, rePassword, form_errors, validated } = this.state;
        const { onChangeHandler, onSubmitHandler } = this;
        return (
            <div className="container-fluid signup-container">
                <Outlet/>
                <div className="row">
                    <div className="col-sm-6 mx-auto">
                        <form className="sign-up-form" onSubmit={onSubmitHandler} noValidate>
                            <Input
                                name="firstName"
                                label="First Name"
                                id="firstName"
                                type="text"
                                value={firstName}
                                isInvalid={form_errors["firstName"] ? true : false}
                                placeholder={"Enter your first name"}
                                onChangeHandler={onChangeHandler}
                                required={true}
                                autoComplete={"false"}
                                invalidMessage={form_errors["firstName"]}
                                isValidated={validated}
                            />

                            <Input
                                name="lastName"
                                label="Last Name"
                                id="lastName"
                                type="text"
                                value={lastName}
                                isInvalid={form_errors["lastName"] ? true : false}
                                placeholder={"Enter your last name"}
                                onChangeHandler={onChangeHandler}
                                required={true}
                                autoComplete={"false"}
                                invalidMessage={form_errors["lastName"]}
                                isValidated={validated}
                            />

                            <div className="mb-3">
                                <label htmlFor="designation" className="form-label">Designation</label>
                                <select name="designation" onChange={onChangeHandler} className="form-control" id="designation">
                                    <option defaultValue>Select access level</option>
                                    <option value="marketing_admin">Marketing Manager - Sub Admin</option>
                                    <option value="sales_admin">Sales Manager - Sub Admin</option>
                                    <option value="attendance_admin">Attendence Manager- Sub Admin</option>
                                    <option value="defective_product_admin">Defective Products Manager - Admin</option>
                                    <option value="super_admin">Administrator</option>
                                </select>
                            </div>

                            <Input
                                name="password"
                                label="Password"
                                id="password"
                                type="password"
                                value={password}
                                isInvalid={form_errors["password"] ? true : false}
                                placeholder={"Enter the password you want to set"}
                                onChangeHandler={onChangeHandler}
                                required={true}
                                autoComplete={"false"}
                                invalidMessage={form_errors["password"]}
                                isValidated={validated}
                            />

                            <Input
                                name="rePassword"
                                label="Re-enter Password"
                                id="rePassword"
                                type="password"
                                value={rePassword}
                                isInvalid={form_errors["rePassword"] ? true : false}
                                placeholder={"Re-enter your password"}
                                onChangeHandler={onChangeHandler}
                                required={true}
                                autoComplete={"false"}
                                invalidMessage={form_errors["rePassword"]}
                                isValidated={validated}
                            />
                            <button type="submit text-uppercase" className="btn btn-primary">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;