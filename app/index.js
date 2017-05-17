var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var FormUpdateServer = require('./components/FormUpdateServer');
var LifeCycleMethods = require('./components/LifeCycleMethods');

// ReactDOM.render(
//   <FormUpdateServer />,

//   document.getElementById('header')
//   );

//*****************************//
///HAD TO ADD THIS HERE BECAUSE IT WOULD NOT EXPORT



// //THE THREE MOUNTING LIFECYCLE METHODS ARE:
// // componentWillMount
// // componentDidMount
// // render

// //Mounting methods will only fire the first time a component is rendered 

class Flashy extends React.Component{


	componentWillMount(){
		alert('componentWillMount AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
	}

	componentDidMount(){
		alert('componentDidMount YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');

	}

	render(){
		alert('Flashy is rendering!');
    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );

	}

}


ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);

setTimeout(function () {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);




