import React from "react";
import Star from "./Star";
import { v4 as uuidv4 } from "uuid";

function Stars({ count = 0 }) {
  let arrCount = Array(count).fill({ id: "", value: 1 });
  arrCount = arrCount.map((item) => {
    return { ...item, id: uuidv4() };
  });
  const isRenderStars = count >= 1 && count <= 5;
  return (
    isRenderStars && (
      <ul className="card-body-stars u-clearfix">
        {arrCount.map((it) => (
          <Star key={it.id}></Star>
        ))}
      </ul>
    )
  );
}

export default Stars;
