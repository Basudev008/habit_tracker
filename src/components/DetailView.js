import React, { Component } from "react";
import { connect } from "react-redux";
import { changeView } from "../actions";

import Habit from "./Habit";

class DetailView extends Component {
  componentDidMount() {
    // to set inWeekPage variable as false in store
    this.props.dispatch(changeView(false));
  }
  render() {
    const { habits } = this.props.state;
    return (
      <div className="detail-view">
        {/* header containing title, duration, time */}
        <div className="habit">
          <div>Title</div>
          <div>Duration</div>
          <div>Time</div>
        </div>
        {/* using map function, sending habit as prop to Habit component */}
        {habits.map((habit) => (
          <Habit habit={habit} key={`habit-${habit.title}`} />
        ))}
      </div>
    );
  }
}

// used connect function to connect to store
function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps)(DetailView);
