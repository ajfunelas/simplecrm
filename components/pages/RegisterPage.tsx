import React from "react"
import { Link } from "react-router-dom"
import NavBar from "../nav/NavBar"
import RegisterForm from "../forms/RegisterForm"
import "../../App.css"
const RegisterPage = () => (
	<div>
		<NavBar />
		<h1>Register Page</h1>
		<RegisterForm />
		<Link to="/login">Existing user?</Link>
	</div>
)

export default RegisterPage
