import React, { Component } from "react";

class AnotherComponent extends Component {
  componentWillUnmount() {
    console.log("Another Component Will Unmount");
  }
  render() {
    return (
      <div>
        <h2>This is Another Component</h2>
      </div>
    );
  }
}

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      counter: 0,
      showAnotherComponent: false,
    };
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update");
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  toggleAnotherComponent = () => {
    this.setState((prevState) => ({
      showAnotherComponent: !prevState.showAnotherComponent,
    }));
  };

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Lifecycle Example</h1>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleClick}>Increment Counter</button>
        <br />
        <button onClick={this.toggleAnotherComponent}>
          {this.state.showAnotherComponent ? "Hide" : "Show"} Another Component
        </button>
        {this.state.showAnotherComponent && <AnotherComponent />}
      </div>
    );
  }
}

export default LifecycleExample;
