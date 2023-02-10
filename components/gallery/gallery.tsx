import React from "react";
import Card from "../card/card";
import type { Flat } from "../../pages/index";
import { motion } from "framer-motion";
import { Option } from "react-tailwindcss-select/dist/components/type";
import { useSelector } from "react-redux";
import { RootState } from "@/app";

const Gallery: React.FC<any> = ({ flats }: { flats: Flat[] }) => {
  const objSelector: Option = useSelector((state: RootState) => state.filter);
  let finalFlats;

  if (objSelector.value === "all") {
    finalFlats = flats;
  } else {
    finalFlats =
      objSelector.value === "rent"
        ? flats.filter((flat) => flat.Offer.name === objSelector.value)
        : objSelector.value === "buy"
        ? flats.filter((flat) => flat.Offer.name === objSelector.value)
        : objSelector.value === "apartment"
        ? flats.filter((flat) => flat.PropertyType.name === objSelector.value)
        : objSelector.value === "house"
        ? flats.filter((flat) => flat.PropertyType.name === objSelector.value)
        : [];
  }
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container mx-auto px-4"
    >
      {finalFlats
        .filter((flat) => flat.available)
        .map((flat) => (
          <Card key={flat.id} flat={flat} />
        ))}
    </motion.div>
  );
};

export default Gallery;
