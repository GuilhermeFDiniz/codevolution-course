import React from "react";

const Hello = () => {
  // return(
  //   <div className="lol">
  //     <h1>Hello Guilherme</h1>
  //   </div>
  // )
  return React.createElement(
    'div',
    {id: 'hello',
     className: 'lol'},
    React.createElement('h1', null, 'Hello Guilherme'))
}

export default Hello;
