import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { displayAddButton } from "../actions";

class Navbar extends Component {
  handleInAddPage = () => {
    this.props.dispatch(displayAddButton(true));
  };

  render() {
    return (
      <div className="navbar">
        <h4>Habit Tracker App</h4>
        <div className="nav-buttons">
          {/* conditional rendering for AddHabit button */}
          {!this.props.state.inAddPage && (
            <Link to="/add-habit">
              <button onClick={this.handleInAddPage}>Add Habit</button>
            </Link>
          )}
          {/* conditional toggling of week and detail view button */}
          {!this.props.state.inWeekPage ? (
            <Link to="/week">
              <button>Week View</button>
            </Link>
          ) : (
            <Link to="/">
              <button>Detail View</button>
            </Link>
          )}
        </div>

        {/* display message if present  */}
        {this.props.state.message && (
          <div className="notification">{this.props.state.message}</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps)(Navbar);
