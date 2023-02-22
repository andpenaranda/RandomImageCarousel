import { useState } from "react";
import { ArrowNarrowLeft, ArrowNarrowRight } from "tabler-icons-react";
import "./styles.css";

export const Carousel = () => {
  const [imageId, setImageId] = useState(1);

  const imageURL = `https://source.unsplash.com/featured/?${imageId}`;

  const nextPicture = () => {
    setImageId(imageId + 1);
  };

  const prevPicture = () => {
    if(imageId <= 1){
      setImageId(1);
    }else {
      setImageId(imageId - 1);
    }
  };

  return (
    <div>
      <h2>I M A G E S</h2>
      <div className="slider">
        <div className="leftArrow" onClick={prevPicture}>
          <ArrowNarrowLeft />
        </div>
        <div className="rightArrow" onClick={nextPicture}>
          <ArrowNarrowRight />
        </div>
          <div key={imageId} className="slide">
            {imageId && <img src={imageURL} alt={"image-" + imageId}  />}
          </div>
      </div>
    </div>
  );
}
