import React from 'react'
import carPhoto from "../assets/car_photo.png";
import bikePhoto from "../assets/bike_photo.png";
import autoPhoto from "../assets/auro_image.png";

const vehiclePanel = (props) => {
  return (
    <div>
          <h5 className="absolute top-2 left-1/2 -translate-x-1/2 text-2xl cursor-pointer"
        onClick={()=>{
          props.setvehiclePanel(false);
        }}>
          <i className="ri-arrow-down-wide-line text-black"></i>
        </h5>

        <h3 className="text-2xl font-semibold mb-3">Choose a Vehicle</h3>
        <div onClick={() => {
          props.setconfirmedRidePanel(true);}
        }
          className="w-full flex items-center active:border-black border-3 border-transparent bg-gray-100 justify-between  p-5 rounded-lg 
         shadow-lg mb-2"
        >
          <img
            src={carPhoto}
            alt="car image"
            className="h-[90px] w-[130
            px]"
          />
          <div className="w-3/4 h-20 ">
            <h4 className="font-medium text-lg">
              ScootripGo{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h2 className="font-medium text-lg">2 mins away</h2>
            <p className="font-medium text-lg text-gray-600">
              Affordabele, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹193.28</h2>
        </div>

        <div onClick={() => {
          props.setconfirmedRidePanel(true);}
        }
          className="w-full flex items-center active:border-black border-3 border-transparent bg-gray-100 justify-between  p-5 rounded-lg 
         shadow-lg mb-2"
        >
          <img
            src={bikePhoto}
            alt="car image"
            className="h-[90px] w-[130
            px]"
          />
          <div className="w-3/4 h-20 ">
            <h4 className="font-medium text-lg">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h2 className="font-medium text-lg">3 mins away</h2>
            <p className="font-medium text-lg text-gray-600">
              Affordabele motorcycle rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹65.28</h2>
        </div>

        <div onClick={() => {
          props.setconfirmedRidePanel(true);}
        }
          className="w-full flex items-center active:border-black border-3 border-transparent bg-gray-100 justify-between  p-5 rounded-lg 
         shadow-lg mb-2"
        >
          <img
            src={autoPhoto}
            alt="car image"
            className="h-[90px] w-[130
            px]"
          />
          <div className="w-3/4 h-20 ">
            <h4 className="font-medium text-lg">
              ScootripAuto{" "}
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>
            </h4>
            <h2 className="font-medium text-lg">3 mins away</h2>
            <p className="font-medium text-lg text-gray-600">
              Affordabele auto rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹118.28</h2>
        </div>
    </div>
  )
}

export default vehiclePanel