import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = styled.input`
  border-width: 0px;
  width: 15rem;
  height: 1.8rem;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.685) 0%, rgba(126, 126, 126, 0.726) 35%, rgba(187, 187, 187, 0.198) 100%);
  background-color: black;
`;

const SearchButton = styled.button`
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.685) 0%, rgba(126, 126, 126, 0.726) 35%, rgba(187, 187, 187, 0.198) 100%);
`

const Search = ({ setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <SearchBar
          type="text"
          placeholder="Enter A Song"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchButton type="submit">Search</SearchButton>
      </div>
    </form>
  );
};

export default Search;
