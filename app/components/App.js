var React = require('react');


class Test extends React.Component{
	render(){
		return(
			<div>
			<h1>HELLO</h1>
			</div>
			)
	}
}



module.exports = class extends React.Component{
	render(){
		return(
			<div>
				<Test />
			</div>
			)
	}
}