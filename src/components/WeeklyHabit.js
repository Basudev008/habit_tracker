import React, { Component } from "react";
import { connect } from "react-redux";

import { addStatusToDate } from "../actions";
import WeekDate from "./WeekDate";

class WeeklyHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateArray: [],
    };
    const array = [];
    const date = new Date();
    console.log(date);
    for (let i = 1; i <= 7; i++) {
      // storing the dates of past seven days in array
      var newDate = new Date(date - 86400000 * (7 - i));
      var currDate = `${newDate.getDate()}-${
        newDate.getMonth() + 1
      }-${newDate.getFullYear()}`;
      array.push(currDate);
    }

    this.state = {
      dateArray: array,
    };

    this.state.dateArray.map((date) =>
      // for each date for each habit setting the status as none as default
      this.props.dispatch(addStatusToDate(this.props.habit.title, date))
    );
    console.log(this.props.state);
  }
  render() {
    return (
      <div className="habit-week">
        <h3>{this.props.habit.title}</h3>
        <div className="week-days">
          {this.state.dateArray.map((date) => (
            // passing habit and date as prop to WeekDate component
            <WeekDate habit={this.props.habit} date={date} key={date} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps)(WeeklyHabit);
