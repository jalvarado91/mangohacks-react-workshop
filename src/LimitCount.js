import React from "react"

class LimitCount extends React.Component {
	render() {
		return <span>
			{60 - this.props.text.length} characters left
			<Grandchild sexyHotdog={this.props.text} />
		</span>
	}
}

export default LimitCount;