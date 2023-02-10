import React, { useState, useEffect } from "react";

import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ElevatorOutlinedIcon from "@mui/icons-material/ElevatorOutlined";
import HvacOutlinedIcon from "@mui/icons-material/HvacOutlined";
import SolarPowerOutlinedIcon from "@mui/icons-material/SolarPowerOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app";
import { useRouter } from "next/router";
import { setCommentRange } from "typescript";
import { dialogHandler } from "@/features/dialog/dialogSlice";

const Carousel:React.FC<any> = ({...props}) => {
  const { code, details, error } = useSelector((state: RootState) => state.db);
  const [id, setId] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  let flat,
    locationContent,
    directionContent,
    slides:any,
    prevSlide,
    nextSlide,
    goToSlide;
  useEffect(() => {
    const flatId = router.query.flatId as string;
    setId(flatId);
  }, [router]);
  if (id) {
      [flat] = details.flats.filter((flat) => flat.id === id);
      locationContent = `${flat.Location.country}, ${flat.Location.city}, ${flat.Location.area}`;
      directionContent = flat.direction_east
        ? "East"
        : flat.direction_west
        ? "West"
        : flat.direction_north
        ? "North"
        : flat.direction_south
        ? "South"
        : "Unknown";
      slides = flat.images.map((img) => ({ url: img.url }));
      prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };

      nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

      goToSlide = (slideIndex: any) => {
        setCurrentIndex(slideIndex);
    }
  }
  return (
    <>
      {flat && (
          <div
            className="
              relative
              container 
              mx-auto 
              mt-20
              md:grid md:grid-cols-12 
              bg-white 
              md:h-[800px]  lg:w-[70%] md:w-[80%] w-[90%] h-[40vh] sm:w-[768px]
              sm:flex sm:flex-col capitalize"
          >
          {
            props.closeBtn ? 
            <div className="absolute -top-3 -right-3 bg-red-500 text-sm hover:bg-red-400 rounded-full border-4 border-white z-40">
            <IconButton
              onClick={() => {
                router.replace("/", undefined, { shallow: true });
                dispatch(dialogHandler(false));
              }}
              aria-label="close"
              className="  font-medium text-white border-2 border-white "
            >
              <CloseIcon color="inherit" className="  font-medium text-white  z-40" />
            </IconButton>
            </div>
            :null
          }
            <div className="h-full w-full relative group md:col-span-8">
              <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="h-full bg-center bg-cover duration-500"
              ></div>

              {/* Left Arrow */}
              <div
                className="absolute top-[50%] -translate-x-[35px] translate-y-[-50%] left-5 text-2xl rounded-full text-red-600 bg-white  cursor-pointer"
                onClick={prevSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Right Arrow */}
              <div
                className="absolute top-[50%] -translate-x-[-35px] translate-y-[-50%] right-5 text-2xl rounded-full  text-red-600 bg-white cursor-pointer"
                onClick={nextSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Right section */}
            <div className=" flex md:grid-cols-4 overflow-y-scroll md:col-span-4  bg-white">
              <div className="py-4 px-2">
                <div>
                  <div className="flex items-center">
                    <div className="relative">
                      {/* avatar */}
                      <div className="rounded-full w-10 h-10">
                        <AccountCircleOutlinedIcon className="rounded-full w-full h-full text-gray-500" />
                      </div>
                      <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                    </div>
                    <div className="ml-2">
                    <p className=" text-gray-800 line-clamp-1 font-bold text-lg">
                      {flat.User.first_name} {flat.User.last_name}
                    </p>
                    <p className="text-[12px] normal-case">Email : {flat.User.email}</p>
                  </div>
                  </div>
                  <hr className="w-full h-[2px] my-4 bg-gray-200 border-0 rounded dark:bg-gray-900" />
                  <div className="flex flex-col items-start justify-start">
                    <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-3xl tracking-tight">
                      price : {flat.price} <span className="text-sm">SYP</span>
                    </h1>
                  </div>
                </div>

                <div className="mt-4">
                  <h2
                    className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                    title="New York"
                  >
                    {locationContent}
                  </h2>
                  <p
                    className="mt-2 text-sm text-gray-800 line-clamp-1"
                    title="New York, NY 10004, United States"
                  >
                    {`${flat.Offer.name} - ${flat.PropertyType.name}`}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 my-4">
                    <Chip
                      label={`rooms : ${flat.number_of_rooms}`}
                      color="info"
                      variant="outlined"
                    />
                    <Chip
                      label={`living rooms : ${flat.number_of_livingrooms}`}
                      color="info"
                      variant="outlined"
                    />
                    <Chip
                      label={`bathrooms : ${flat.number_of_bathrooms}`}
                      color="info"
                      variant="outlined"
                    />
                    <Chip
                      label={`balconies : ${flat.number_of_balconies}`}
                      color="info"
                      variant="outlined"
                    />
                    <Chip
                      label={`Interior : ${flat.Interior.name}`}
                      color="info"
                      variant="outlined"
                    />
                    <Chip
                      label={`Ownership : ${flat.Ownership.name}`}
                      color="info"
                      variant="outlined"
                    />
                    <Chip
                      label={`Floor : ${flat.Floor.name}`}
                      color="info"
                      variant="outlined"
                    />
                    <Chip
                      label={`PropertyType : ${flat.PropertyType.name}`}
                      color="info"
                      variant="outlined"
                    />
                  </div>
                </div>

                <hr className="w-full h-[2px] my-4 bg-gray-200 border-0 rounded dark:bg-gray-900" />

                <div className="flex flex-col  px-4 py-1 overflow-hidden">
                  <h4 className="text-xl font-bold">direction</h4>

                  {flat.direction_east ? (
                    <p className="flex items-center font-medium text-gray-800">
                      <WbSunnyOutlinedIcon />
                      <span className="ml-4">east</span>
                    </p>
                  ) : null}
                  {flat.direction_west ? (
                    <p className="flex items-center font-medium text-gray-800">
                      <DarkModeOutlinedIcon />
                      <span className="ml-4">west</span>
                    </p>
                  ) : null}
                  {flat.direction_north ? (
                    <p className="flex items-center font-medium text-gray-800">
                      <NorthOutlinedIcon />
                      <span className="ml-4">North</span>
                    </p>
                  ) : null}
                  {flat.direction_south ? (
                    <p className="flex items-center font-medium text-gray-800">
                      <SouthOutlinedIcon />
                      <span className="ml-4">South</span>
                    </p>
                  ) : null}
                </div>

                <hr className="w-full h-[2px] my-4 bg-gray-200 border-0 rounded dark:bg-gray-900" />

                <div className="flex flex-col  px-4 py-1 overflow-hidden">
                  <h4 className="text-xl font-bold">services</h4>

                  <p className="flex items-center font-medium text-gray-800">
                    <ElevatorOutlinedIcon />
                    <span className="ml-4">elevator</span>
                  </p>

                  <p className="flex items-center font-medium text-gray-800">
                    <HvacOutlinedIcon />
                    <span className="ml-4">central heating</span>
                  </p>

                  <p className="flex items-center font-medium text-gray-800">
                    <SolarPowerOutlinedIcon />
                    <span className="ml-4">solar power</span>
                  </p>

                  <p className="flex items-center font-medium text-gray-800">
                    <BoltOutlinedIcon />
                    <span className="ml-4">electric generator</span>
                  </p>

                  <p className="flex items-center font-medium text-gray-800">
                    <LocalParkingOutlinedIcon />
                    <span className="ml-4">parking</span>
                  </p>

                  <p className="flex items-center font-medium text-gray-800">
                    <StraightenOutlinedIcon sx={{ color: "rgb(31 41 55)" }} />
                    <span className="ml-4">{flat.sqm} sqm</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
      )}
    </>
  );
};

export default Carousel;