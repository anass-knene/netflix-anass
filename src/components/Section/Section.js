import React from "react";
import Card from "./Card/Card";
import "./Section.css";
import Slider from "react-slick";
export default function Section({ title, data }) {
  //let title = "Action Movies";
  console.log(title, data);
  return (
    <section className="Section">
      <h4>{title}</h4>
      <Slider slidesToShow={3} slidesToScroll={3} className="Cards">
        {data?.map((item) => (
          <Card key={item.id} movie={item} />
        ))}
      </Slider>
    </section>
  );
}
