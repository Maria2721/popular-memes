import React, { useState } from "react";
import "./Card.scss";
import * as cx from "classnames";
import { ReactComponent as Like } from "../../assets/imgs/like.svg";

function Card({ name, url }) {
  const [like, setLike] = useState(false);

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__title">{name}</div>
        <Like
          onClick={() => setLike(!like)}
          className={cx(
            "card__estimation",
            like === true && "card__like",
            like === false && "card__dislike"
          )}
        />
      </div>
      <div className="card__imgWrapper">
        <img src={url} alt="meme" className="card__img" />
      </div>
    </div>
  );
}

export default Card;
