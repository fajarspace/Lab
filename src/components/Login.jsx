import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Login = () => {
	const [authenticated, setauthenticated] = useState(null);
useEffect(() => {
    const loggedInUser = localStorage.getItem(authenticated);
    if (loggedInUser) {
    setauthenticated(loggedInUser);
    }
}, []);
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const users = [{ username: "Jane", password: "testpassword" }];
	const handleSubmit = (e) => {
	e.preventDefault();
	const account = users.find((user) => user.username === username);
	if (account && account.password === password) {
		localStorage.setItem(authenticated, true);
		navigate("/test");
	}
	};
	return (
	<div>
		<form onSubmit={handleSubmit}>
 <input
 type="text"
 name="Username"
 value={username}
 onChange={(e) => setUsername(e.target.value)}
 />
 <input
 type="password"
 name="Password"
 onChange={(e) => setPassword(e.target.value)}
 />
 <input type="submit" value="Submit" />
 </form>
	</div>
	);
};

export default Login;