import React from 'react'
import carPhoto from "../assets/car_photo.png";

const LookingForDriver = (props) => {
  return (
      <div className="h-1/2">
        <h5
          className="absolute top-2 left-1/2 -translate-x-1/2 text-2xl cursor-pointer"
          onClick={() => {
            props.setvehicleFound(false);
            props.setvehiclePanel(false);
          }}
        >
          <i className="ri-arrow-down-wide-line text-black"></i>
        </h5>
  
        <h3 className="text-2xl font-semibold mb-3">Looking for a Driver</h3>
  
        <div className="flex justify-between flex-col items-center gap-2">
          <img className="h-[200px] w-[300px]" src={carPhoto} alt="" />
          <div className="w-full">
            <div className="flex items-center gap-6 p-4 border-b-2">
              <i className="text-3xl ri-map-pin-user-fill"></i>
              <div>
                <h3 className="text-2xl font-bold">562/11-A</h3>
                <p className="text-lg -mt-1 text-gray-600">
                  Kankariya Talab, Bhopal
                </p>
              </div>
            </div>
  
            <div className="flex items-center gap-6 p-4 border-b-2">
              <i className="text-3xl ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-2xl font-bold">562/11-A</h3>
                <p className="text-lg -mt-1 text-gray-600">
                  Kankariya Talab, Bhopal
                </p>
              </div>
            </div>
  
            <div className="flex items-center gap-6 p-4">
              <i className="text-3xl ri-currency-line"></i>
              <div>
                <h3 className="text-2xl font-bold">₹102.98</h3>
                <p className="text-lg -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
}

export default LookingForDriver