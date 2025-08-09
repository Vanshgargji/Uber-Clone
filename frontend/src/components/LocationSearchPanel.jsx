import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props)

  // sample array for location 
  const locations = [
    'Kandhla Road, Budhana, Muzaffarnagar',
    'Kandhla Road, Budhana, Shamli',
    'birju road, aloonagar',
    'shinchan gali, kasukabe'
  ]
  return (
    <div className="max-w-full">
      {/* this is just a sample data  */}

      {
        locations.map(function(elem, idx){
          return  <div key={idx} onClick={()=>{
            props.setvehiclePanel(true);
            props.setPanel(false);
          }} className='flex items-center my-2 gap-4 border-2 p-6 border-transparent active:border-black rounded-lg justify-start'>
        <h2 className='bg-[#eee] 
       flex items-center justify-center p-2 h-10 w-16 rounded-full'><i className='ri-map-pin-fill text-2xl'></i></h2>
        <h1 className='text-4xl font-medium pl-4 whitespace-normal break-words'>{elem} </h1>
      </div>
        })
      }

    </div>
  )
}

export default LocationSearchPanel