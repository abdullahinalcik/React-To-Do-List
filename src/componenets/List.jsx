import {AiTwotoneDelete } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';

const List = ({list,setList}) => {


  const handleDelete = (e) => {
    setList(list.filter((items) => e.id !== items.id));
  };

  const handleCheck = (id) => {
    setList(list.map((items)=>items.id==id?{...items,checked:!items.checked}:items))
  
  };
  return (


    
<>
{list.map((items) => (
              <li  key={items.id} className={items.checked ? 'background' : ''}>
                <input className=" " type="checkbox" defaultValue id="check"
                checked={items.checked}
                onChange={()=>{handleCheck(items.id)}}
                
                />{" "}
                <span style={{textDecorationLine:items.checked?"line-through":""}}>{items.text}</span>{" "}
                <AiTwotoneDelete
                  className="i "
                  onClick={() => handleDelete(items)}
                />
              </li>
            ))}

 
</>
  )
}

export default List 