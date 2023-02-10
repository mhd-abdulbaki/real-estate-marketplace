type Image = {
  id: string;
  flat_id: string;
  url: string;
  thumbnail: string;
};
type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  agency: boolean;
};
type Location = {
  id: string;
  country: string;
  city: string;
  area: string;
};
type Offer = {
  id: string;
  name: string;
};
type Ownership = {
  id: string;
  name: string;
};
type Interior = {
  id: string;
  name: string;
};
type Floor = {
  id: string;
  name: string;
};
type PropertyType = {
  id: string;
  name: string;
};
export type Flat = {
  id: string;
  address: string;
  code: string;
  price: number;
  sqm: number;
  number_of_rooms: number;
  number_of_livingrooms: number;
  number_of_bathrooms: number;
  number_of_balconies: number;
  direction_east: boolean;
  direction_west: boolean;
  direction_north: boolean;
  direction_south: boolean;
  with_elevator: boolean;
  with_basement: boolean;
  with_central_heating: boolean;
  with_solar_power: boolean;
  with_electric_generator: boolean;
  with_parking: boolean;
  with_ac: boolean;
  available: boolean;
  location_id: string;
  user_id: string;
  offer_id: string;
  ownership_id: string;
  interior_id: string;
  floor_id: string;
  property_type_id: string;
  images: Image[];
  created_at: string;
  User: User;
  Location: Location;
  Offer: Offer;
  Ownership: Ownership;
  Interior: Interior;
  Floor: Floor;
  PropertyType: PropertyType;
};

import React from "react";
import Gallery from "../components/gallery/gallery";
import Dialog  from "../components/dialog/dialog";
import Search from "../components/search/search";
import Footer from "../components/footer/footer";

import { useSelector } from "react-redux";
import type { RootState } from "../app";
import { AppDispatch } from "../app/index";

const Home = () => {
  const { code, details, error } = useSelector((state: RootState) => state.db);
  
  const flats: Flat[] = details.flats;
  return (
    <div className="w-full h-screen">
      <div className="my-10 mx-auto md:w-[30%] w-[70%]">
        <Search />
      </div>
      <Gallery flats={flats} />
      <Dialog />
      <Footer />
    </div>
  );
};

export default Home;
