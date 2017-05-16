var React = require('react');


class Test extends React.Component{
	render(){
		return(
			<div>
			<h1>123HELLO</h1>
			</div>
			)
	}
}



module.exports = class extends React.Component{
	render(){
		return(
			<div>
				<Test />
				<h1>123YO YO YO whats up</h1>
			</div>
			)
	}
}