import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { Link } from 'react-router-dom';
function App() {
const coffees=useLoaderData()
  return (
    <div className='m-20 '>
      <div>
      <h1 className="text-3xl font-bold text-center ">
        coffe <br />
      Coffee data available: {coffees.length}    </h1>
   
      </div>
   <div className='grid gap-5 md:grid-cols-2'>
   {
      coffees.map(coffee=>
      <CoffeeCard
      key={coffee._id}
      coffee={coffee}
      >
        
      </CoffeeCard>)
    }
   </div>
  <div className="my-8 text-3xl font-bold text-center text-green-500">
  <Link to="/addCoffee">Add Coffee</Link>
  </div>
    </div>
  )
}

export default App
