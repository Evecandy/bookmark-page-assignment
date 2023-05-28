import { useState } from "react";

import easySharing from "../assets/easySharing.png";

import "./Feature.css";

const Features = () => {
  const [features, setFeatures] = useState([
    {
      name: "Simple Bookmark",

      image: easySharing,

      description:
        "A bookmark is a physical or electronic marker used to indicate the current location in a book or document.",
    },

    {
      name: "Speedy Searching",

      image: easySharing,

      description:
        "Speedy Searching allows you to quickly find the information you need.",
    },

    {
      name: "Easy sharing",

      image: easySharing,

      description:
        "Easy sharing allows you to share your favorite content with others.",
    },
  ]);

  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <>
      <div className="feature-container">
        {" "}
        <div className="featureHead">
          <h1>Features</h1>
          {" "}
          <p>
            A bookmark landing page is a web page that encourages visitors to
            bookmark your website. It includes a clear description of your
            website, a call to action, visual appeal, and social media sharing
            buttons. Bookmark landing pages can help to increase website
            traffic, improve search engine ranking, and increase brand
            awareness.
          </p>
          {" "}
        </div>
        {" "}
        <div className="listItems">
          {" "}
          <ul>
            {" "}
            {features.map((feature) => (
              <li
                key={feature.name}
                onClick={() => handleFeatureClick(feature)}
                style={{
                  padding: "10px",
                  display: "flex",
                  cursor: "pointer",
                  gap: "5px",
                }}
              >
                {feature.name}
                {" "}
              </li>
            ))}
            {" "}
          </ul>
          {" "}
        </div>
        {" "}
        {selectedFeature && (
          <div className="featureG">
            <img src={easySharing} alt={selectedFeature.name} />
            <p>{selectedFeature.description}</p>
            {" "}
          </div>
        )}
        {" "}
      </div>
      {" "}
    </>
  );
};

export default Features;