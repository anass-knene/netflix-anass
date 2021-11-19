import "./Movies.css";
import React from "react";
import Section from "../../components/Section/Section";
import { actionMovies, newMovies } from "../../api/movies";
// console.log(actionMovies);
// console.log(newMovies);
export default function Movies() {
  return (
    <div>
      <Section title="Action Movies" data={actionMovies} />
      <Section title="New Movies" data={newMovies} />
    </div>
  );
}
