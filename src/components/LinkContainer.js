import { useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {
const [linkData, setLinkData] = useState( []); 


  const removeLink = (index) =>{
      if (index > -1 && index < linkData.length) {
        setLinkData(prevArr => {
          const newArr = [...prevArr];
          newArr.splice(index, 1);
          return newArr;
      });
      }
  }

  const appendData = (newRecord) =>{
     setLinkData([...linkData, newRecord]);
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {/*TODO - Add Table Component */
         <Table linkData = {linkData} removeLink = {removeLink} />
      }

      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */
         <Form  appendData = {appendData}/>
      }
      
    </div>
  )
}

export default LinkContainer
