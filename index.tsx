import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"
import { Client as Styletron } from "styletron-engine-atomic"
import { Provider as StyletronProvider } from "styletron-react"
import { LightTheme, BaseProvider, styled } from "baseui"
// import { StatefulInput } from "baseui/input"

const engine = new Styletron()
const Centered = styled("div", {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "100%",
})

ReactDOM.render(
	<StyletronProvider value={engine}>
		<BaseProvider theme={LightTheme}>
			<Centered>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Centered>
		</BaseProvider>
	</StyletronProvider>,
	document.getElementById("root"),
)

serviceWorker.register()
