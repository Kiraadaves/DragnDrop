import React from "react";
import "animate.css";

const GalleryNavbar = ({ setSearchTerm, onSearch }) => {
  const handleInputChange = (e) => {
    console.log("Input changed:", e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    onSearch();
  };

  return (
    <div className="navbar animate__animated animate__fadeInDown  py-4 mx-2 rounded-lg">
      <h2 className="text-2xl font-bold">
        Drag<span className="text-blue-700 bg-white p-2 rounded-r-full border-4 border-blue-700">Drop</span>
      </h2>
      <nav className="nav">
        <form className="search-form " onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search images"
            className="search-input"
            onChange={handleInputChange}
          />
          {/* <button type="submit" className="search-button">
            <FaSearch />
          </button> */}
        </form>
        
      </nav>
    </div>
  );
};

export default GalleryNavbar;
