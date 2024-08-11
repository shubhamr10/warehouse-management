

function LoginValidator(state){
    let form_errors = {};

    const { email, password } = state;
    if(email === "" || email === undefined){
        form_errors["email"] = "Email is required!";
    }

    if(password === "" || password === undefined){
        form_errors["password"] = "Password is required!";
    }

    if(password.length < 6){
        form_errors["password"] = "Password length should be more than 6";
    }
    return form_errors;
}

export default LoginValidator;