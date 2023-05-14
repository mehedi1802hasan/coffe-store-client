import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function App() {
const LoadedCoffees=useLoaderData()
const [coffees,setCoffees]=useState(LoadedCoffees)
  return (
    <div className='m-20 '>
      <div>
      <h1 className="text-3xl font-bold text-center">
        <span className='text-red-500 '>coffee</span> <br />
    <span className='text-green-500 '>  Coffee data available: {coffees.length}  </span>  </h1>
   
      </div>
   <div className='grid gap-5 md:grid-cols-2'>
   {
      coffees.map(coffee=>
      <CoffeeCard
      key={coffee._id}
      coffees={coffees}
      setCoffees={setCoffees}
      coffee={coffee}
      >
        
      </CoffeeCard>)
    }
   </div>
  <div className="my-8 text-3xl font-bold text-center">
  <Link className='btn btn-outline btn-error'  to="/addCoffee">Add Coffee</Link>
  </div>
    </div>
  )
}

export default App
