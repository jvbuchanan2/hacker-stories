import React from 'react';

const Search = props => {
    const {search, onSearch} = props;
    return(
      <div>
        <label htmlFor='search'>Search: </label>
        <input id='search' type='text' value={search} onChange={onSearch} />
        <p>
            Searching for <strong>{search}</strong>
      </p>

      </div>
    );
  }

export default Search;
  