import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import DetailView from "./DetailView";
import AddHabit from "./AddHabit";
import WeeklyView from "./WeeklyView";

function App() {
  return (
    <div className="App">
      {/* use of router to navigate through app */}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<DetailView />} />
          <Route exact path="/add-habit" element={<AddHabit />} />
          <Route exact path="/week" element={<WeeklyView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
