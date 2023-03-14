import { useState } from "react";

function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const Register = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.status === 200) {
            alert("Resgistration Successful");
        } else {
            alert("Resgistration Failed");
        }
    };

    return (
        <form className="register" onSubmit={Register}>
            <h1>Register</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button>Register</button>
        </form>
    );
}

export default RegisterPage;
