export const TOGGLE_ADD_BUTTON = "TOGGLE_ADD_BUTTON";
export const ADD_HABIT = "ADD_HABIT";
export const TOGGLE_WEEK_DETAIL_VIEW = "TOGGLE_WEEK_DETAIL_VIEW";
export const INITIALIZE_DATE_STATUS = "INITIALIZE_DATE_STATUS";
export const UPDATE_DATE_STATUS = "UPDATE_DATE_STATUS";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

// to display add button
export function displayAddButton(value) {
  return {
    type: TOGGLE_ADD_BUTTON,
    value,
  };
}

// to add habit
export function addHabit(title, duration, time) {
  return {
    type: ADD_HABIT,
    habit: {
      time,
      title,
      duration,
    },
  };
}

// to change inWeekPage variable
export function changeView(status) {
  return {
    type: TOGGLE_WEEK_DETAIL_VIEW,
    status,
  };
}

// this function is used to initialize dates with none status
export function addStatusToDate(habit, date) {
  return {
    type: INITIALIZE_DATE_STATUS,
    habit,
    date,
  };
}

// action to update status
export function updateStatus(habit, date, status) {
  return {
    type: UPDATE_DATE_STATUS,
    habit,
    date,
    status,
  };
}

// this function is called to clear message variable in state
export function clearMessage() {
  return {
    type: CLEAR_MESSAGE,
  };
}
