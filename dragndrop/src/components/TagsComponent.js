import React, { useState } from "react";
import "animate.css";

const TagsComponent = ({ setSelectedTag, fetchImagesByTag }) => {
  const [activeTag, setActiveTag] = useState("All");

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    setSelectedTag(tag);

    // Fetch images based on the selected tag
    fetchImagesByTag(tag);
  };

  return (
    <div className="tags animate__animated animate__fadeInLeft flex md:mt-14 md:gap-8">
      <div
        className={`tag ${activeTag === "All" ? "active" : "blank"}`}
        onClick={() => handleTagClick("All")}
      >
        All
      </div>
      
      <div
        className={`tag ${activeTag === "Beautiful" ? "active" : "blank"}`}
        onClick={() => handleTagClick("Beautiful")}
      >
        Beautiful
      </div>{" "}
      <div
        className={`tag ${activeTag === "Cars" ? "active" : "blank"}`}
        onClick={() => handleTagClick("Cars")}
      >
        Cars
      </div>
      <div
        className={`tag ${activeTag === "Dark" ? "active" : "blank"}`}
        onClick={() => handleTagClick("Dark")}
      >
        Dark
      </div>
      <div
        className={`tag ${activeTag === "Nature" ? "active" : "blank"}`}
        onClick={() => handleTagClick("Nature")}
      >
        Nature
      </div>
    </div>
  );
};

export default TagsComponent;
