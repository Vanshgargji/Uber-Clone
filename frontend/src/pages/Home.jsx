import React, { useRef, useState } from "react";
import logo from "../assets/logo.png";
import map from "../assets/map_temporary.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/vehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");

  const [panel, setPanel] = useState(false);
  const panelOpenRef = useRef(null);
  const panelCloseRef = useRef(null);

  const [vehiclePanel, setvehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);

  const [confirmedRidePanel, setconfirmedRidePanel] = useState(false)
  const confirmedRidePanelRef = useRef(null);

  const [vehicleFound, setvehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null);

  const [waitForDriver, setwaitForDriver] = useState(false)
  const waitForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panel) {
      gsap.to(panelOpenRef.current, {
        height: "70%",
        padding: "24px",
      });

      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelOpenRef.current, {
        height: "0",
        padding: "0",
      });

      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panel]);
  
  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanel ? "translateY(0)" : "translateY(100%)",
    });
  }, [vehiclePanel]);

  useGSAP(() => {
    gsap.to(confirmedRidePanelRef.current, {
      transform: confirmedRidePanel ? "translateY(0)" : "translateY(100%)",
    });
  }, [confirmedRidePanel]);

  useGSAP(() => {
    gsap.to(vehicleFoundRef.current, {
      transform: vehicleFound ? "translateY(0)" : "translateY(100%)",
    });
  }, [vehicleFound]);

  useGSAP(() => {
    gsap.to(waitForDriverRef.current, {
      transform: waitForDriver ? "translateY(0)" : "translateY(100%)",
    });
  }, [WaitingForDriver]);

  


  return (
    <div className=" h-screen relative overflow-hidden">
      <img className="w-30 absolute left-5 top-5" src={logo} alt="" />

      <div className="h-screen w-screen ">
        {/* Temporary image */}
        <img className="h-screen w-screen" src={map} alt="" />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanel(false);
            }}
            className="absolute opacity-0 top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className="text-2xl font-semibold ">Find a trip</h4>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col gap-4 mt-5"
          >
            <div className="line absolute h-16 w-1 ml-4 top-[30%] bg-gray-600 rounded-full"></div>
            <input
              onClick={() => {
                setPanel(true);
              }}
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-1/2"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanel(true);
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-1/2"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelOpenRef} className="bg-white ">
          <LocationSearchPanel
            setPanel={setPanel}
            setvehiclePanel={setvehiclePanel}
          />
        </div>
      </div>

      {/* hidden panel which occur on selecting the location  */}
      <div
        ref={vehiclePanelRef}
        className=" fixed w-full z-10 bottom-0 bg-white p-4 "
      >
        <VehiclePanel setconfirmedRidePanel={setconfirmedRidePanel} setvehiclePanel={setvehiclePanel} />
      </div>

      <div
        ref={confirmedRidePanelRef}
        className=" fixed w-full h-3/4 z-10 bottom-0 bg-white p-4 "
      >
       <ConfirmedRide setconfirmedRidePanel={setconfirmedRidePanel} setvehicleFound={setvehicleFound} />
      </div>

      <div
        ref={vehicleFoundRef}
        className=" fixed w-full h-3/4 z-10 bottom-0 bg-white p-4 "
      >
        <LookingForDriver setvehicleFound={setvehicleFound} setvehiclePanel={setvehiclePanel}/>
      </div>

      <div
        ref={waitForDriverRef}
        className=" fixed w-full h-3/4 z-10 bottom-0 bg-white p-4 "
      >
        <WaitingForDriver setwaitForDriver={setwaitForDriver} />
      </div>

    </div>
  );
};

export default Home;
