import React, { useState } from "react"
import { Form, Button } from "semantic-ui-react"
import { Link } from "react-router-dom"
interface Props {}

const LoginForm: React.FC<Props> = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const [isSuccess, setIsSuccess] = useState(true)

	function handleSubmit(event: any) {
		event.preventDefault()
	}

	function validateForm() {
		return email.length > 0 && password.length > 0
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Field>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="example@example.com"
					value={email}
					onChange={(event: any) => {
						setEmail(event.currentTarget.value)
					}}
				/>
				{isSuccess ? null : <h5>Email is invalid</h5>}
			</Form.Field>
			<Form.Field>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Make it secure"
					value={password}
					onChange={(event: any) => {
						setPassword(event.currentTarget.value)
					}}
				/>
				{isSuccess ? null : <h5>Password is invalid</h5>}
			</Form.Field>
			<Link to="/profile">
				<Button primary disabled={!validateForm()} type="submit">
					Login
				</Button>
			</Link>
		</Form>
	)
}

export default LoginForm

// class LoginForm1 extends React.Component {
// 	state = {
// 		data: {
// 			email: "",
// 			password: "",
// 		},
// 		loading: false,
// 		isSuccess: true,
// 	}
// onChange = (e: any) => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
// onSubmit = () => {
// 	if (this.state.data.email === "") {
// 		this.setState({
// 			isSuccess: false,
// 		})
// 	} else {
// 		this.setState({
// 			isSuccess: true,
// 		})
// 	}
// }
// render() {
// 	const { data } = this.state

// 	}
// }
