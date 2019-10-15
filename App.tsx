import React from "react"
import { Route } from "react-router-dom"
import RegisterPage from "./components/pages/RegisterPage"
import LoginPage from "./components/pages/LoginPage"
import ProfilePage from "./components/pages/ProfilePage"
import "./App.css"
const App: React.FC = () => {
	return (
		<div className="App ui container">
			<Route path="/" exact component={RegisterPage} />
			<Route path="/login" exact component={LoginPage} />
			<Route path="/profile" exact component={ProfilePage} />
		</div>
	)
}

export default App
