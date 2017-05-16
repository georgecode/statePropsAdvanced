// var React = require('react');


// class Test extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 			<h1>xxxHELLO</h1>
// 			</div>
// 			)
// 	}
// }



// module.exports = class extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				<Test />
// 				<h1>YO YO YO whats up</h1>
// 			</div>
// 			)
// 	}
// }



var React = require('react');


class Input extends React.Component{

	constructor(props,context){
		super(props, context);

		this.state = {
			userInput:''
		};

		this.handleUserInput = this.handleUserInput.bind(this);

		//BIND handleUserInput
	}//END ES6 way

	handleUserInput(e){
		this.setState({userInput:e.target.value})
		// console.log(e.target.value)

	}

	render(){
		return(
		<div>
			{/*you don't even neeed a form or a submit button  you can use 
			input all by itself*/}
        	<input 
         	 value ={this.state.userInput}
         	 type="text" 
         	 onChange={this.handleUserInput} 
         	 />
        	<h1>{this.state.userInput}</h1>
      	</div>
			)
	}
}//End Input class


module.exports = class extends React.Component{
	render(){
		return(
			<div>
				<Input />
				<h1>YO YO YO whats up</h1>
			</div>
			)
	}
}






