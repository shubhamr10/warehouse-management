
export default function SignUpValidator (state) {
    let form_errors = {};
    const { firstName, lastName, designation, password, rePassword } = state;

    if(firstName === "" || firstName === undefined){
        form_errors["firstName"] = "First name is required."
    }

    if(lastName === "" || lastName === undefined){
        form_errors["lastName"] = "Last name is required."
    }

    if(designation === "" || designation === undefined){
        form_errors["designation"] = "Designation is required."
    }

    if(password === "" || password === undefined){
        form_errors["password"] = "Password is required."
    }

    if(rePassword === "" || rePassword === undefined){
        form_errors["rePassword"] = "Password is required."
    }

    if(password !== rePassword){
        form_errors["password"] = "Passwords should match";
        form_errors["rePassword"] = "Passwords should match";
    }


    return form_errors
}
