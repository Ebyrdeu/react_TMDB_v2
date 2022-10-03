import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Notification} from "@mantine/core";
import {IconX} from "@tabler/icons";

const Portal = (props) => {
	const node = document.createElement("div");
	document.body.appendChild(node);
	return ReactDOM.createPortal(props.children, node);
};

class ErrorBoundary extends Component {
	state = {error: false};

	static getDerivedStateFromError() {return {error: true};}

	render() {
		if (this.state.error === true) return (
			<Portal>
				<Notification icon={<IconX size={18}/>} color="red" style={{position: "absolute", right: 10, top: 10}}>
					Something went Wrong {this.state.error}
				</Notification>
			</Portal>
		);
		return this.props.childElement;
	}
}

export default ErrorBoundary;