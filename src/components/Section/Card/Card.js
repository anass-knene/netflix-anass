import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
export default function Card({ movie }) {
  console.log(movie);
  return (
    <Link className="text-decoration-none" to={"/movie/" + movie.id}>
      <article
        className="Card"
        style={{
          backgroundImage: `url(${movie.image})`,
        }}
      >
        <h4>{movie.title}</h4>
      </article>
    </Link>
  );
}
