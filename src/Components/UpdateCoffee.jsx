import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const UpdateCoffee = () => {
  const coffeLoader=useLoaderData();
  const {_id,name,quntity,supplier,category,taste,details,photoUrl}=coffeLoader
  const handleUpdateCoffee=event=>{
    event.preventDefault()

    const form=event.target;
       const name=form.name.value;
       const quntity=form.quntity.value;
       const supplier=form.supplier.value;
       const category=form.category.value;
       const details=form.details.value;
       const photoUrl=form.photoUrl.value;
     const updateCoffee={name,quntity,supplier,category,details,photoUrl,taste};
     console.log(updateCoffee)
     fetch(`http://localhost:3000/coffee/${_id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(updateCoffee)
  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data)
    
      if(data.modifiedCount>0){
        Swal.fire({
          title: 'Updated!',
          text: 'wow!! update successfully ',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }

    return (
         <div>
      <div className='p-20 bg-gray-200 '>
        <h3 className='text-2xl font-bold text-center'>Update coffee</h3>
       <form onSubmit={handleUpdateCoffee}>
        
        {/*name row*/}
       <div className=' md:flex'>
        <div className="md:w-1/2 form-control">
  <label className="label">
  </label>
  <label className="input-group">
    <span>name</span>
    <input  type="text" name='name' placeholder="please enter your name" className="md:w-full input input-bordered" defaultValue={name}/>
  </label>
</div>
<div className="ml-4 md:w-1/2 form-control">
  <label className="label">
  </label>
  <label className="input-group">
    <span>quntity</span>
    <input type="text"name='quntity' placeholder="please enter the quntity" className="md:w-full input input-bordered" defaultValue={quntity} />
  </label>
</div>
        </div>
          {/*supplier row*/}
        <div className=' md:flex'>
        <div className="md:w-1/2 form-control">
  <label className="label">
  </label>
  <label className="input-group">
    <span>supplier</span>
    <input  type="text"name='supplier' placeholder="please enter supplier name" className="md:w-full input input-bordered"  defaultValue={supplier}/>
  </label>
</div>
<div className="ml-4 md:w-1/2 form-control">
  <label className="label">
  </label>
  <label className="input-group">
    <span>Taste</span>
    <input type="text" name='taste'placeholder="please enter the taste" className="md:w-full input input-bordered"  defaultValue={taste}/>
  </label>
</div>
        </div>
          {/*category row*/}
        <div className=' md:flex'>
        <div className="md:w-1/2 form-control">
  <label className="label">
  </label>
  <label className="input-group">
    <span>category</span>
    <input  type="text" name='category'placeholder="please enter category" className="md:w-full input input-bordered" defaultValue={category} />
  </label>
</div>
<div className="ml-4 md:w-1/2 form-control">
  <label className="label">
  </label>
  <label className="input-group">
    <span>Details</span>
    <input type="text"name='details' placeholder="please enter the Details" className="md:w-full input input-bordered" defaultValue={details} />
  </label>
</div>
        </div>
        
          {/*photourl row*/}
        <div>
        <div className="md:w-full form-control">
  <label className="label">
  </label>
  <label className="input-group">
    <span>photoUrl</span>
    <input  type="text"name='photoUrl' placeholder="please enter photourl" className="md:w-full input input-bordered" defaultValue={photoUrl} />
  </label>
</div>

        </div>
        <button className="flex justify-center w-6/12 mx-auto my-3 btn btn-active">Add COffee</button>
       </form>
       
      </div>
      <div className="my-8 text-3xl font-bold text-center text-green-500">
      <Link to="/">View CoffeeCards</Link>
      </div>
      </div>
    );
};

export default UpdateCoffee;