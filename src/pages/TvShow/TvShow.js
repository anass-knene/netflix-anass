import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TvShow.css";
import tvShowsArray from "../../api/tvShows";
import { Link } from "react-router-dom";
export default function TvShow() {
  const { tvShowId } = useParams();
  const [tvShowObject, setTvShowObject] = useState();
  const [tvShowSeason, setTvShowSeason] = useState();
  useEffect(() => {
    const getTvShow = tvShowsArray.find((ele) => ele.id === tvShowId);
    setTvShowObject(getTvShow);
    setTvShowSeason(getTvShow.seasons[1]);
  }, [tvShowId]);

  return (
    <div>
      <h1> {tvShowObject?.title} </h1>
      <div className="TvShow">
        <div className="Seasons">
          {tvShowObject?.seasons?.map((el) => (
            <div
              key={el.id}
              className="Season"
              onClick={() => setTvShowSeason(el)}
            >
              {el.title}
            </div>
          ))}
        </div>
        <div className="Episodes">
          {tvShowSeason?.episodes?.map((element) => (
            <div key={element.id} className="Episode">
              <Link
                to={`/tv-show-episode/${tvShowObject.id}/${tvShowSeason.id}/${element.id}`}
              >
                <img
                  className="EpisodeImage"
                  src={element.image}
                  alt="img"
                  width="200px"
                />
              </Link>
              <span>{element.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
