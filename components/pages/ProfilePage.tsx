import React from "react"
import NavBar from "../nav/NavBar"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Paragraph3 } from "baseui/typography"
import { Avatar } from "baseui/avatar"
import "../../App.css"

const Button1 = styled.button`
	font-family: sans-serif;
	font-size: 1.3rem;
	border: none;
	border-radius: 5px;
	padding: 7px 18px;
	background: blue;
	color: #ffff;
	&:hover {
		background: black;
	}
`

const ProfilePage = () => (
	<div>
		<NavBar />
		<h1>Profile Page</h1>
		<Avatar name="Abner Jr" size="scale1200" src="https://api.adorable.io/avatars/285/10@adorable.io.png" />

		<h2>Welcome to SimpleCRM</h2>
		<Paragraph3>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum velit ante, ac fringilla nulla pulvinar in. Aenean ut nisi mattis, lobortis
			purus vel, aliquet ante. In vel viverra lectus. Vivamus a diam faucibus, rutrum quam a, varius felis. Sed pellentesque sodales libero commodo vestibulum.
			Phasellus convallis gravida tempor. Sed ut bibendum nisl.
		</Paragraph3>
		<Link to="/login">
			<Button1>Log Out</Button1>
		</Link>
		<Link to="/profile"></Link>
	</div>
)

export default ProfilePage
