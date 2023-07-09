import React, { useState } from "react";
import styles from "../componentsStyles/SignUp.module.css";
import Button from "@mui/material/Button";
//import axios from "axios";
//import { useNavigate } from "react-router-dom";
const SignUp = ()=>{
  	//const navigate = useNavigate();
	const [user, setuser] = useState({
		Fname: "",
		email: "",
		password: "",
		Cpassword: "",
	});
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
  const handleSubmit = (e) => {
		if (
			user.Fname !== "" &&
			user.email !== "" &&
			user.password !== "" &&
			user.Cpassword !== ""
		) {
			e.preventDefault();
			// axios
			// 	.post("", user)
			// 	.then((res) => {
			// 		alert(res.data);
			// 		navigate("/");
			// 	})
			// 	.catch((err) => {
					alert("Email Already in use");
				// });
		} else {
			alert("Invalid Inputs");
		}
	};
  	return (
		<React.Fragment>
			<div className={styles.container}>
				<div className={styles.loginbox}>
					<form method="POST" className={styles.loginemail}>
						<p className={styles.logintext}>SignUp with email</p>
						<div className={styles.inputgroup}>
							<input
								type="text"
								placeholder="First Name"
								name="Fname"
								value={user.Fname}
								onChange={handleChange}
								required
							/>
						</div>
			   		<div className={styles.inputgroup}>
							<input
								type="text"
								placeholder="Email"
								name="email"
								value={user.email}
								onChange={handleChange}
								required
							/>
						</div>

						<div className={styles.inputgroup}>
							<input
								type="password"
								placeholder="password"
								name="password"
								value={user.password}
								onChange={handleChange}
								required
							/>
						</div>

						<div className={styles.inputgroup}>
							<input
								type="password"
								placeholder="Confirm Password"
								name="Cpassword"
								value={user.Cpassword}
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
							Already have an account?{" "}
              <Button> 
							{/* <Button> onClick={() => navigate("/Login")}> */}
								Sign In
							</Button>
						</p>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SignUp;