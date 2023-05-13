import React from 'react';
import { useState } from 'react';
//import { Link } from 'react-router-dom';

const CoffeeCard = ({coffee}) => {
   // const [users,setUsers]=useState(coffee)
    const {_id,name,quntity,supplier,category,details,photoUrl}=coffee;
    
    const handleDelete=_id=>{
        console.log(_id)
        fetch(`http://localhost:3000/coffee/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
          
         /**   if(data.deletedCount>0){
                alert('deleted successfully');
                const remaining  = users.filter(user=>user._id !== id);
                setUsers(remaining);
         * */ 
        })
    }
    return (
       <div>
         <div className="shadow-xl card card-side bg-base-100">
        <figure><img src={photoUrl} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <p>{category}</p>
          <p>{supplier}</p>
          <p>{quntity}</p>
</div>
<div>
          <div className="justify-end my-10 card-actions">
          <div className="gap-3 btn-group btn-group-vertical">
  <button className="btn ">View</button>
  <button className="btn">edit</button>
  <button onClick={()=>handleDelete(_id)} className="btn">X</button>
</div>
          </div>
        </div>
       
      </div>
  
       </div>
    );
};

export default CoffeeCard; 