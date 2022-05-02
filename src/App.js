import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from "./components/NavBar";
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";
import "bootstrap/dist/css/bootstrap.css";


const App = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;