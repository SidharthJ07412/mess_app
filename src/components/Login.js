import React, { useState } from "react";
import styles from "../componentsStyles/SignUp.module.css";
import Button from "@mui/material/Button";
//import axios from "axios"
//import { useNavigate } from "react-router-dom";
//import Cookies from "universal-cookie";
const Login= () =>{ 
	const [user, setuser] = useState({
		mem_id: 0,
		email: "",
		password: "",
	});
	const handleSubmit = async (e) => {
		if (user.email !== "" && user.password !== "") {
			e.preventDefault();
			console.log(user);
			alert("You are now Logged in.");
			// await axios
			// 	.post("https://trackmycash.onrender.com/auth/login", user)
			// 	.then((res) => {
			// 		alert("You are now Logged in.");
			// 		//user.mem_id = res.data;
			// 		//cookies.set("Member", user, { path: "/" });
			// 		//navigate("/Select");
			// 	})
			// 	.catch((err) => {
			// 		alert("Incorrect Email or Password ");
			// 	});
		} else {
			alert("Invalid input for email or password");
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		let code = value.charCodeAt(value.length - 1);
		if (
			(code > 47 && code < 58) ||
			(code > 64 && code < 91) ||
			(code > 96 && code < 123) ||
			value.charAt(value.length - 1) === "@" ||
			value.charAt(value.length - 1) === "." ||
			value.charAt(value.length - 1) === "_" ||
			value.charAt(value.length - 1) === ""
		) {
			setuser({
				...user,
				[name]: value,
			});
		} else {
			alert("Only aphanumeric characters or @,.,_ allowed");
		}
	};
  return (
    <div className={styles.container}>
		<div className={styles.loginbox}>
    	 <form method="#" className={styles.loginemail}>
						<p className={styles.logintext}>Login with email</p>
						<div className={styles.inputgroup}>
							<input
								type="text"
								placeholder="Email Address"
								name="email"
								value={user.email}
								onChange={handleChange}
								required
							/>
						</div>

						<div className={styles.inputgroup}>
							<input
								type="password"
								placeholder="Password"
								name="password"
							value={user.password}
								onChange={handleChange}
								required
							/>
						</div>
						<div className={styles.inputgroup}>
							<button
								className={styles.btn}
								name="submit"
								onClick={handleSubmit}
							>
								Login
							</button>
						</div>
						<p className={styles.loginregistertext}>
							Don't have an account? {/* <div className = > */}
							<Button
								variant="text"
								//onClick={() => navigate("/SignUp")}
							>
								Sign Up
							</Button>
							{/* </div> */}
						</p>
					</form>
    </div>
	</div>
  )
}

export default Login;