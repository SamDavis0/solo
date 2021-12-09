import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/actions/searchAction.js";

const Search = ({ onSearchSubmit }) => {
  const [search, setSearch] = useState("");

  // const onFormSubmit = (event) => {
  //     event.preventDefault();
  //     onSearchSubmit(search);
  // };

  const dispatch = useDispatch();

  const handleFetchVideos = () => {
    dispatch(fetchVideos(search))
    console.log(search);
  };
  
  React.useEffect(() => {
    console.log(search);
  }, [search])

  return (
    <form onSubmit={handleFetchVideos}>
      <div>
        <input
          type="text"
          placeholder="Enter Seach Term"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Search;
