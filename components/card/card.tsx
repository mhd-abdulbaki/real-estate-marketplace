import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { dialogHandler } from "../../features/dialog/dialogSlice";
import type { Flat } from "@/pages";

import Chip from "@mui/material/Chip";
import { IconButton } from "@mui/material";

import {motion} from "framer-motion"

// Icons
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


const Card:React.FC<any> = ({ flat }: { flat: Flat }) => {

  const router = useRouter();
  
  const directionContent: string = flat.direction_east
    ? "East"
    : flat.direction_west
    ? "West"
    : flat.direction_north
    ? "North"
    : flat.direction_south
    ? "South"
    : "Unknown";
  const locationContent = `${flat.Location.country}, ${flat.Location.city}, ${flat.Location.area}`;
  const dispatch = useDispatch();

  useEffect(() => {
    if(!!router.query.flatId) dispatch( dialogHandler(!!router.query.flatId)) 
  },[router.query.flatId])

  return (
    <motion.div
      layout
      animate={{opacity:1, scale:1}}
      initial={{opacity:0,scale:0}}
      exit={{opacity:0, scale:0}}
      transition={{duration:0.5}}
      className="relative mx-auto w-full capitalize">
      <Link
        href={`/?flatId=${flat.id}`}
        as={`/flat/${flat.id}`}
        className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
      >
        <div className="shadow p-4 rounded-lg bg-white"
          >
          <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
            <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
              <div className="absolute inset-0">
                <img
                  className="rounded-t-lg"
                  src={flat.images[0].url}
                  alt="product image"
                />
              </div>
            </div>

            <div className="absolute flex justify-center bottom-0 mb-3">
              <div className="flex backdrop-blur-md px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                <p className="flex items-center font-medium text-gray-800">
                  <CottageOutlinedIcon className="text-[21px] mr-1" />
                  <span>{flat.number_of_rooms}</span>
                </p>

                <p className="flex items-center font-medium text-gray-800">
                  <BedOutlinedIcon className="text-[21px] mr-1" />
                  <span>{flat.number_of_livingrooms}</span>
                </p>

                <p className="flex items-center font-medium text-gray-800">
                  <BathtubOutlinedIcon className="text-[21px] mr-1" />
                  <span>{flat.number_of_bathrooms}</span>
                </p>
                <p className="flex items-center font-medium text-gray-800">
                  {
                    directionContent == "East"
                    ? <WbSunnyOutlinedIcon className="text-[21px] mr-1" />
                    :<DarkModeOutlinedIcon/>
                  }
                  <span>{directionContent}</span>
                </p>
              </div>
            </div>

            {/* <IconButton 
          aria-label="delete" 
          className="absolute top-1 right-1 bg-red-500 text-sm hover:bg-red-300 font-medium text-white">
          <FavoriteBorderIcon />
        </IconButton> */}

            <Chip
              icon={<AccessTimeOutlinedIcon color="action" />}
              label={new Date(flat.created_at).toLocaleDateString()}
              className="absolute top-1 left-1 text-gray-800 backdrop-blur-sm"
            />

            {flat.User.agency ?
              <Chip
                icon={<VerifiedIcon color="info" />}
                label={"Agency"}
                className="absolute top-1 right-1 text-black-800 backdrop-blur-sm"
              />
              : null
            }
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

          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
              <CottageOutlinedIcon className="text-[18px] mr-2" />
              <span className="mt-2 xl:mt-0">{flat.Interior.name}</span>
            </p>
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
              <FormatListNumberedOutlinedIcon className="text-[18px] mr-2" />
              <span className="mt-2 xl:mt-0">{flat.Floor.name}</span>
            </p>
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
              <StraightenOutlinedIcon className="text-[18px] mr-2" />
              <span className="mt-2 xl:mt-0">{flat.sqm} sqm</span>
            </p>
            <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
              <DescriptionOutlinedIcon className="text-[18px] mr-2" />
              <span className="mt-2 xl:mt-0">{flat.Ownership.name}</span>
            </p>
          </div>

          <div className="grid grid-cols-2 mt-8">
            <div className="flex items-center">
              <div className="relative">
                <div className="rounded-full w-6 h-6 md:w-8 md:h-8 ">
                  <AccountCircleOutlinedIcon 
                    className="rounded-full w-full h-full text-gray-800" 
                  />
                </div>
              </div>
              <p className="ml-2 text-gray-800 line-clamp-1 ">
                {flat.User.first_name} {flat.User.last_name}{" "}
              </p>
            </div>

            <div className="flex justify-end">
              <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                
                <h5 className="text-lg">{flat.price} 
                  <span className="text-[10px] uppercase ml-1">SYP</span>
                </h5>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
