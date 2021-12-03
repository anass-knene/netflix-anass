import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useParams } from "react-router";
import tvShowsData from "../../api/tvShows";
import "./TvShowEpisode.css";

export default function TvShowEpisode() {
  const { tvShowId, seasonId, episodeId } = useParams();
  const [tvShow, setTvShow] = useState({});
  const [season, setSeason] = useState({});
  const [episode, setEpisode] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const getTvShow = tvShowsData.find((el) => el.id === tvShowId);
    setTvShow(getTvShow);
    const getSeason = getTvShow.seasons.find((ele) => ele.id === seasonId);
    setSeason(getSeason);
    const getEpisode = getSeason.episodes.find(
      (element) => element.id === episodeId
    );
    setEpisode(getEpisode);
  }, [tvShowId, seasonId, episodeId]);
  return (
    <div
      className="TvShowEpisode"
      style={{ backgroundImage: `url(${tvShow?.image})` }}
    >
      <h1>{tvShow.title}</h1>
      <h2>
        {season.title}- {episode.title}
      </h2>
      <div className="Play" onClick={() => setIsOpen(!isOpen)}>
        Play
      </div>
      <Modal
        onHide={() => setIsOpen(false)}
        show={isOpen}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <iframe
          height="400"
          src={episode.video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
}
