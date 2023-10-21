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
    <div className="md:px-10 navbar flex flex-col md:flex-row items-center justify-between animate__animated animate__fadeInDown  py-4">
      <h2 className="text-2xl font-bold mb-10 md:mb-0 mt-5 md:mt-0">
        Drag
        <span className="text-blue-700 bg-white p-2 rounded-r-full border-4 border-blue-700">
          Drop
        </span>
      </h2>

      <form
        className="search-form bg-white rounded-lg "
        onSubmit={handleSubmit}
      >
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
    </div>
  );
};

export default GalleryNavbar;
