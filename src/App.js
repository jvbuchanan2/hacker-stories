import React from 'react';
import Search from './Search';
import List from './List';


function App() {
  const books = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Algorithms',
      url: 'https://redux.js.org/',
      author: 'Karen Sedgewick',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Compilers',
      url: 'https://redux.js.org/',
      author: 'Aho Sethi Ullman',
      num_comments: 1,
      points: 4,
      objectID: 0
    },
    {
      title: 'Physics',
      url: 'https://redux.js.org/',
      author: 'Servi',
      num_comments: 3,
      points: 2,
      objectID: 0
    }
  ];
  const [searchTerm,setSearchTerm] = React.useState('React');
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };
  
  const searchedBooks = books.filter(story => story.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} search={searchTerm}/>

      <hr />
      <List list={searchedBooks}/>
    </div>
  );
}

export default App;
