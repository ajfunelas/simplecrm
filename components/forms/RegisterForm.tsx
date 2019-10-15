import React, { useState } from "react"
import { Form, Button } from "semantic-ui-react"
interface Props {}

const RegisterForm: React.FC<Props> = () => {
	const [email, setEmail] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	// const [userlist, setuserlist] = useState(DummyData.users)
	const [isSuccess, setIsSuccess] = useState(true)

	// const onChange = (e: any) => {}
	const onSubmit = () => {
		alert("Registered!")
	}
	// console.log(userlist)
	return (
		<Form onSubmit={onSubmit}>
			<Form.Field>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Username"
					value={username}
					onChange={(event: any) => {
						setUsername(event.currentTarget.value)
					}}
				/>
				{isSuccess ? null : <h5>Username is empty</h5>}
			</Form.Field>
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
			<Button primary>Register</Button>
		</Form>
	)
}

export default RegisterForm

// class RegisterForm1 extends React.Component {
// 	state = {
// 		data: {
// 			username: "",
// 			email: "",
// 			password: "",
// 		},
// 		loading: false,
// 		isSuccess: true,
// 	}
// 	onChange = (e: any) => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
// 	onSubmit = () => {
// 		if (this.state.data.email === "") {
// 			this.setState({
// 				isSuccess: false,
// 			})
// 		} else {
// 			this.setState({
// 				isSuccess: true,
// 			})
// 		}
// 	}
// 	render() {
// 		const { data } = this.state
// 		return (
// 			<Form onSubmit={this.onSubmit}>
// 				<Form.Field>
// 					<label htmlFor="username">Username</label>
// 					<input type="text" id="username" name="username" placeholder="Username" value={data.username} onChange={this.onChange} />
// 					{this.state.isSuccess ? null : <h5>Username is empty</h5>}
// 				</Form.Field>
// 				<Form.Field>
// 					<label htmlFor="email">Email</label>
// 					<input type="email" id="email" name="email" placeholder="example@example.com" value={data.email} onChange={this.onChange} />
// 					{this.state.isSuccess ? null : <h5>Email is invalid</h5>}
// 				</Form.Field>
// 				<Form.Field>
// 					<label htmlFor="password">Password</label>
// 					<input type="password" id="password" name="password" placeholder="Make it secure" value={data.password} onChange={this.onChange} />
// 					{this.state.isSuccess ? null : <h5>Password is invalid</h5>}
// 				</Form.Field>
// 				<Button primary>Register</Button>
// 			</Form>
// 		)
// 	}
// }
