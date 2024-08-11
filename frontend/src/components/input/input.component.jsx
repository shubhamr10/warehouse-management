import propTypes from "prop-types";


const Input = ({
    label,
    name,
    type,
    id,
    classname,
    placeholder,
    value,
    onChangeHandler,
    required,
    autoComplete,
    isInvalid,
    invalidMessage,
    isValidated
}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input type={type} id={id} name={name} onChange={onChangeHandler} value={value} placeholder={placeholder} className={`form-control ${isValidated && isInvalid ? "is-invalid" : ""} ${isValidated && !isInvalid ? "is-valid" : ""} ${classname}`} required={required} autoComplete={autoComplete} />
            { isInvalid ? <div className="invalid-feedback">{invalidMessage}</div> : <div className="valid-feedback">Looks good!</div> }
        </div>
    )
}

Input.propTypes = {
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    id:propTypes.string.isRequired,
    classname:propTypes.string,
    placeholder:propTypes.string,
    value:propTypes.string,
    onChangeHandler:propTypes.func.isRequired,
    required:propTypes.bool.isRequired,
    autoComplete:propTypes.string,
    isInvalid:propTypes.bool.isRequired,
    invalidMessage:propTypes.string,
    isValidated:propTypes.bool.isRequired
}



export default Input;