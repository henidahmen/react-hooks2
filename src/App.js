import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { moviedata } from "./Data";
import AddMovie from "./components/AddMovie";
// import Filter from "./components/Filter";
import MovieList from "./components/Movie list";
// import Moviecard from "./components/Movie card";
import { useState } from "react";
import Filter from "./components/filter";
import { BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  const [movielist, setMovielist] = useState(moviedata);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0)
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRate(newRating)
  };
  const handleAdd = (newMovie) => {
    setMovielist([...movielist,newMovie])
  }
  
  return (
    <div className="App">
      <Router>
      <Filter handleChange={handleChange} title={title} ratingChanged={ratingChanged} />
     <Route path="/" render={() =>  <MovieList
        movielist={movielist.filter((movie) =>
          movie.title.trim().toLowerCase().includes(title.trim().toLowerCase()) && movie.rate>=rate
        )}
      />}/>
      <AddMovie handleAdd = {handleAdd} />
      </Router>
    </div>
  );
}

export default App;
