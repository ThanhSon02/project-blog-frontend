import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/" className="logo">
                MyBlog
            </Link>
            <nav>
                <Link to="/login" className="">
                    Login
                </Link>
                <Link to="/register" className="">
                    Register
                </Link>
            </nav>
        </header>
    );
}

export default Header;
