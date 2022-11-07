import React, { Component } from "react";
import { connect } from "react-redux";

import { displayAddButton, addHabit, clearMessage } from "../actions";

class AddHabit extends Component {
  constructor() {
    super();
    this.state = {
      time: "",
      duration: 0,
      title: "",
    };
  }

  componentWillUnmount() {
    this.props.dispatch(displayAddButton(false));
  }
  addHabitToState = () => {
    const { title, duration, time } = this.state;
    // dispatch add habit action and then clear message after three seconds to clear the notification
    this.props.dispatch(addHabit(title, duration, time));
    setTimeout(() => this.props.dispatch(clearMessage()), 3000);
  };
  handleChange = (type, value) => {
    // a function to set values of time, duration and title variable in state
    if (type === "time") {
      this.setState({
        time: value,
      });
    } else if (type === "duration") {
      this.setState({
        duration: value,
      });
    } else if (type === "title") {
      this.setState({
        title: value,
      });
    }
  };
  render() {
    const { title, duration, time } = this.state;
    console.log(title, duration, time);
    return (
      <div className="add-habit">
        {/* basic input tags and use of onChange function to call handleChange function */}
        <input
          type="time"
          placeholder="Time"
          onChange={(e) => this.handleChange("time", e.target.value)}
        />
        <input
          type="number"
          placeholder="Duration(mins)"
          onChange={(e) => this.handleChange("duration", e.target.value)}
        />
        <input
          type="text"
          placeholder="title"
          onChange={(e) => this.handleChange("title", e.target.value)}
        />
        <button onClick={this.addHabitToState}>ADD HABIT</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(AddHabit);
