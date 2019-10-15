import React from "react"
import LoginForm from "../forms/LoginForm"
import NavBar from "../nav/NavBar"
import { Link } from "react-router-dom"

const LoginPage = () => (
	<div>
		<NavBar />
		<h1>Login Page</h1>
		<LoginForm />
		<Link to="/">New user?</Link>
	</div>
)

export default LoginPage
