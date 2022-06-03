import React from "react";
import { MdLocationPin } from "react-icons/md";

const JournalEntry = ({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) => {
  return (
    <div>
      <div className="entry">
        <div
          className="entry-img"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        ></div>
        <div className="infoPart">
          <div className="descPart">
            <div className="locationInfo">
              <MdLocationPin className="icon iconRed" />
              <span className="country">{location.toUpperCase()}</span>
              <a className="gMapsUrl" href={googleMapsUrl}>
                View on Google Maps
              </a>
            </div>
            <h2 className="locationTitle">{title}</h2>
          </div>
          <div className="descPart">
            <p className="dateInfo">
              {startDate} - {endDate}
            </p>
            <p className="descriptionInfo">{description}</p>
          </div>
        </div>
      </div>
      <div className="entrySeparation"></div>
    </div>
  );
};

export default JournalEntry;
