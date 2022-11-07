import React, { Component } from "react";
import { connect } from "react-redux";

import { changeView } from "../actions";
import WeeklyHabit from "./WeeklyHabit";

class WeeklyView extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(changeView(true));
  }
  render() {
    const { habits } = this.props.state;
    return (
      <div className="detail-view">
        {/* passing habit as a prop to WeeklyHabit component */}
        {habits.map((habit) => (
          <WeeklyHabit habit={habit} key={`habit-${habit.title}`} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps)(WeeklyView);
