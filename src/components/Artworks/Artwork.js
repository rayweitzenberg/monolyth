import { Fragment } from "react";

import ArtworkTitle from "./ArtworkTitle";
import Card from "../UI/Card";
import "./Artwork.scss";

const Artwork = (props) => {
  // console.log('props.image992', props.image576)
  const vidOrImg = () => {
    if (props.hasVid) {
      return (
        <video autoPlay={true} loop muted={true}>
          {/* <source
            src={`/images/artworks/576px/${props.image576}`}
            type="video/mp4"
          /> */}
          <source
            src={`https://monolyth.s3.amazonaws.com/${props.image576}`}
            type="video/mp4"
          />
        </video>
      );
    } else {
      return (
        <picture>
          <source
            media="(max-width: 577px)"
            srcSet={`/images/artworks/576px/${props.image576}`}
          />
          <source
            media="(max-width: 1999px)"
            srcSet={`/images/artworks/992px/${props.image992}`}
          />
          <source
            media="(max-width: 3000px)"
            srcSet={`/images/artworks/2160px/${props.image2160}`}
          />
          <img
            className="artwork-item__image"
            src={`/images/artworks/576px/${props.image576}`}
            alt={props.alt}
          />
        </picture>
      );
    }
  };

  return (
    <Card className="artwork-item">
      {vidOrImg()}
      <div className="artwork-item__footstone">
        <div className="artwork-item__link">
          <img
            className="artwork-item__qr"
            src={`/images/qr-codes/qr-monolyth.global-utmArtwork.png`}
            alt="QR code to get additional info"
          />
          <h3>monolyth.global</h3>
          {/* <button className="artwork-item__cta">info</button> */}
        </div>
        <div className="artwork-item__headstone">
          <div className="artwork-item__deets">
            <h1 className="artwork-item__artist-name">{props.artist}</h1>
            <ArtworkTitle title={props.title} year={props.year} />
          </div>

          <Fragment>
            <p className="artwork-item__artwork-info">{props.info}</p>
          </Fragment>
        </div>
      </div>
    </Card>
  );
};

export default Artwork;
