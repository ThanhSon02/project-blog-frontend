import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../pages/UserContext";

function Header() {
    const { userInfo, setUserInfo } = useContext(UserContext);
    useEffect(() => {
        fetch("http://localhost:4000/profile", {
            credentials: "include",
        }).then((response) => {
            response.json().then((userInfo) => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    const logout = () => {
        fetch("http://localhost:4000/logout", {
            credentials: "include",
            method: "POST",
        });
        setUserInfo(null);
    };

    const username = userInfo?.username;

    return (
        <header>
            <Link to="/" className="logo">
                MyBlog
            </Link>
            <nav>
                {username ? (
                    <>
                        <Link to={"/create"}>Create new blog</Link>
                        <a onClick={logout}>Logout</a>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="">
                            Login
                        </Link>
                        <Link to="/register" className="">
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;
