import React from 'react';


const List = props => {
    return (
      <div>
        {props.list.map(function(element,index) {
          return (
            <div key={index}>
              <span>
                <a href={element.url}>{element.title}</a>
              </span>
              <span>{element.author}</span>
              <span>{element.num_comments}</span>
              <span>{element.points}</span>
            </div>

          );
        })}
      </div>
    )
  }
  
  export default List;