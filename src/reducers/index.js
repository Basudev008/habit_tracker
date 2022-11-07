import {
  TOGGLE_ADD_BUTTON,
  ADD_HABIT,
  TOGGLE_WEEK_DETAIL_VIEW,
  INITIALIZE_DATE_STATUS,
  UPDATE_DATE_STATUS,
  CLEAR_MESSAGE,
} from "../actions";

// initial state with habits, inAddPage to display add button
// inWeekPage to toggle WeekView and Detail View
// message to display notification on adding habit
const initialState = {
  habits: [
    { title: "WorkOut", duration: 50, time: "16:40" },
    { title: "Reading", duration: 40, time: "18:40" },
    { title: "Sports", duration: 60, time: "19:40" },
  ],
  inAddPage: false,
  inWeekPage: false,
  message: null,
};

export default function habitTracker(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ADD_BUTTON:
      return {
        ...state,
        inAddPage: action.value,
      };
    case ADD_HABIT:
      return {
        ...state,
        habits: [action.habit, ...state.habits],
        message: "ADDED NEW HABIT",
      };
    case TOGGLE_WEEK_DETAIL_VIEW:
      return {
        ...state,
        inWeekPage: action.status,
      };
    case INITIALIZE_DATE_STATUS:
      const newHabits = state.habits.map((habit) => {
        if (habit.title === action.habit) {
          // dynamically adding none status for all dates for past seven days
          const mHabit = {
            ...habit,
            [action.date]: "none",
          };
          console.log(mHabit);
          return mHabit;
        }
        return habit;
      });
      console.log(newHabits);
      return {
        ...state,
        habits: newHabits,
      };
    case UPDATE_DATE_STATUS:
      const updatedHabits = state.habits.map((habit) => {
        if (habit.title === action.habit) {
          // dynamically updating status for a given date and habit
          habit[`${action.date}`] = action.status;
          return habit;
        }
        return habit;
      });
      return {
        ...state,
        habits: updatedHabits,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
}
