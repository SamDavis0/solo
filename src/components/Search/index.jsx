import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {FetchVideos} from '../../redux/actions/searchAction'

const SearchContainer = styled.div`

`;


export default function Search() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.searchTerm);

    const [searchTerm, setSearchTerm] = useState('')
    
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(FetchVideos(searchTerm));
    };
    

    return (
        <React.Fragment>
        <SearchContainer>
            <div>
                <form onSubmit={() => dispatch(handleSubmit())}>
                    <input
                    name="search"
                    placeholder="Search..."
                    onChange={() => dispatch(handleChange())}
                    />
                </form>
            </div>
        </SearchContainer>
        </React.Fragment>
    );
}
