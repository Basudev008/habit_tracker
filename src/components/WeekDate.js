import React, { Component } from "react";
import { connect } from "react-redux";

import { updateStatus } from "../actions";

class WeekDate extends Component {
  getStatus(currHabit) {
    // function which returns status for a particular habit and date (passed as props to this component)
    var status = "";
    this.props.state.habits.map((habit) => {
      if (habit.title === currHabit.title) status = habit[`${this.props.date}`];
      return habit;
    });

    return status;
  }

  changeStatus(status) {
    // function to change status on clicking on the status
    var newStatus = "";
    if (status === "none") newStatus = "done";
    else if (status === "done") newStatus = "notdone";
    else if (status === "notdone") newStatus = "none";

    this.props.dispatch(
      updateStatus(this.props.habit.title, this.props.date, newStatus)
    );
  }
  render() {
    const status = this.getStatus(this.props.habit);
    return (
      <div className="week-day">
        <h5>{this.props.date}</h5>
        <div className="status" onClick={() => this.changeStatus(status)}>
          {/* Based on status type, various icons are displayed */}
          {status === "done" && (
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="tick mark"
            />
          )}
          {status === "notdone" && (
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
              alt="cross icon"
            />
          )}
          {status === "none" && (
            <img
              src="https://cdn-icons-png.flaticon.com/512/463/463292.png"
              alt="three dots"
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps)(WeekDate);
