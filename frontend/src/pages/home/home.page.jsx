import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="container-fluid">
            <Outlet/>
            <Link to={"/signup"}>Signup</Link>
            <Link to={"/login"}>Login</Link>
        </div>
    )
}

export default Home