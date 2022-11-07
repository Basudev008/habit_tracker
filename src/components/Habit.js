import React, { Component } from "react";

class Habit extends Component {
  render() {
    return (
      <div className="habit">
        {/* use of divs to display habit values, have used flex to display */}
        <div className="habit-title">{this.props.habit.title}</div>
        <div className="habit-duration">{this.props.habit.duration}</div>
        <div className="habit-time">{this.props.habit.time}</div>
      </div>
    );
  }
}

export default Habit;
