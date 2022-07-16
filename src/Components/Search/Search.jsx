import React from 'react';
import "./Search.css";

function Search() {
    return (
        <div className="input-group search p-2 rounded search shadow">
            <span className="input-group-text border-0 search">
                <ion-icon name="search-outline"></ion-icon>
            </span>
            <input type="search" className="form-control border-0" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        </div>
    );
}

export default Search;