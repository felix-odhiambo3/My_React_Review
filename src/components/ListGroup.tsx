import { useState } from "react";

//import { MouseEvent } from "react";
function ListGroup() {

  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];

  //let selectedIndex = 0;

  const [selectedIndex, setSelectedIndex] = useState(-1);


  //const handleClick = (event: MouseEvent) => console.log(event);
  

  //const Message = items.length === 0 ? <p>No item found</p> : null

 
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p> }
      <ul className="list-group">
         {items.map((item, index) => 
         <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={ ()=> {setSelectedIndex (index) } }>{item}</li>)}
      </ul>
    </>
  );
}

export default ListGroup;
