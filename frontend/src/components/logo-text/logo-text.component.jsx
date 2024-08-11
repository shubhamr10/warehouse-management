import "./logo-text.style.scss";
import { Link } from "react-router-dom";

const LogoText = () => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="text-center logo-text text-uppercase">
                    <Link to={"/"} className="logo-link">WareSync</Link>
                </div>
            </div>
        </div>
    )
}

export default LogoText;