import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface db {}

const initialState = {
  code: 200,
  details: {
    flats: [
      {
        id: "1",
        address: "shahbandar",
        code: "RMZMMN5",
        price: 200000000,
        sqm: 200,
        number_of_rooms: 12,
        number_of_livingrooms: 2,
        number_of_bathrooms: 2,
        number_of_balconies: 2,
        direction_east: false,
        direction_west: true,
        direction_north: false,
        direction_south: false,
        with_elevator: false,
        with_basement: false,
        with_central_heating: false,
        with_solar_power: false,
        with_electric_generator: false,
        with_parking: false,
        with_ac: false,
        available: true,
        location_id: "89036d26-f0f6-484a-bc6a-8609a8835b69",
        user_id: "06cbe2df-2d96-49b9-ac33-7c3136508ef6",
        offer_id: "faee12fb-fede-4669-be04-c367876008e2",
        ownership_id: "21e01e27-f963-4568-9a9d-d5f1b1f1eee9",
        interior_id: "177d7641-8273-41d7-9999-a9c9c81936a9",
        floor_id: "d2cfda9f-338c-4d4c-9293-d2c7388cac21",
        property_type_id: "a760ebae-3812-4b0a-9a7f-768b66b2750f",
        images: [
          {
            id: "c56aa9fe-9903-4190-a95d-95a1f9a1d18d",
            flat_id: "0082aafc-3e35-4c64-ae3c-863bd5e2bbaa",
            url: "/images/home1-1.webp",
            thumbnail:
              "./thumbs/0082aafc-3e35-4c64-ae3c-863bd5e2bbaa/fa4f4401-8868-4a58-a5e2-c9f0aaa81b37.jpg",
          },
          {
            id: "66a4c4c7-c477-4ae1-95fe-5ef16258430c",
            flat_id: "0082aafc-3e35-4c64-ae3c-863bd5e2bbaa",
            url: "/images/home1-2.webp",
            thumbnail:
              "./thumbs/0082aafc-3e35-4c64-ae3c-863bd5e2bbaa/b58ca28f-5470-4bca-a1ba-0cb24c297f93.jpg",
          },
          {
            id: "ce6e18b2-1eea-42a0-8139-2900cb26a177",
            flat_id: "0082aafc-3e35-4c64-ae3c-863bd5e2bbaa",
            url: "/images/home1-3.webp",
            thumbnail:
              "./thumbs/0082aafc-3e35-4c64-ae3c-863bd5e2bbaa/878c5fb3-927b-44de-b678-4f4e6a051e2a.jpg",
          },
          {
            id: "5d5cd78c-8751-4fe7-a481-32f82340ae8f",
            flat_id: "0082aafc-3e35-4c64-ae3c-863bd5e2bbaa",
            url: "/images/home1-4.webp",
            thumbnail:
              "./thumbs/0082aafc-3e35-4c64-ae3c-863bd5e2bbaa/0d3d3373-9b58-4d9a-82db-ac49e89f8ca6.jpg",
          },
          {
            id: "355463bb-1857-4543-8bc7-2dffe03de4c0",
            flat_id: "0082aafc-3e35-4c64-ae3c-863bd5e2bbaa",
            url: "/images/home1-5.webp",
            thumbnail:
              "./thumbs/0082aafc-3e35-4c64-ae3c-863bd5e2bbaa/7cf081ce-447c-4a57-92bf-a8b546ddb3de.jpg",
          },
          {
            id: "73bf6329-6b82-4318-8534-4d49954526b6",
            flat_id: "0082aafc-3e35-4c64-ae3c-863bd5e2bbaa",
            url: "/images/home1-2.webp",
            thumbnail:
              "./thumbs/0082aafc-3e35-4c64-ae3c-863bd5e2bbaa/aab75824-27e4-491f-8433-977a5c3f2297.jpg",
          },
        ],
        created_at: "2022-12-25T10:30:43.498043Z",
        User: {
          id: "06cbe2df-2d96-49b9-ac33-7c3136508ef6",
          first_name: "alaa",
          last_name: "qutaish",
          email:  "alaa.qutaish@gmail.com",
          phone: "2315798",
          agency: true,
        },
        Location: {
          id: "89036d26-f0f6-484a-bc6a-8609a8835b69",
          country: "syria",
          city: "damascus",
          area: "babtoma",
        },
        Offer: {
          id: "faee12fb-fede-4669-be04-c367876008e2",
          name: "buy",
        },
        Ownership: {
          id: "21e01e27-f963-4568-9a9d-d5f1b1f1eee9",
          name: "green",
        },
        Interior: {
          id: "177d7641-8273-41d7-9999-a9c9c81936a9",
          name: "delux",
        },
        Floor: {
          id: "d2cfda9f-338c-4d4c-9293-d2c7388cac21",
          name: "first",
        },
        PropertyType: {
          id: "a760ebae-3812-4b0a-9a7f-768b66b2750f",
          name: "apartment",
        },
      },
      {
        id: "2",
        address: "29th may street",
        code: "JBF06BN",
        price: 200000000,
        sqm: 250,
        number_of_rooms: 10,
        number_of_livingrooms: 3,
        number_of_bathrooms: 3,
        number_of_balconies: 2,
        direction_east: true,
        direction_west: true,
        direction_north: true,
        direction_south: false,
        with_elevator: false,
        with_basement: false,
        with_central_heating: false,
        with_solar_power: false,
        with_electric_generator: false,
        with_parking: true,
        with_ac: false,
        available: true,
        location_id: "89036d26-f0f6-484a-bc6a-8609a8835b69",
        user_id: "06cbe2df-2d96-49b9-ac33-7c3136508ef6",
        offer_id: "faee12fb-fede-4669-be04-c367876008e2",
        ownership_id: "21e01e27-f963-4568-9a9d-d5f1b1f1eee9",
        interior_id: "177d7641-8273-41d7-9999-a9c9c81936a9",
        floor_id: "d2cfda9f-338c-4d4c-9293-d2c7388cac21",
        property_type_id: "a760ebae-3812-4b0a-9a7f-768b66b2750f",
        images: [
          {
            id: "ed5806a5-c300-4a37-8a6a-f8de92ff3401",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home2-1.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/6cc2c011-e0e6-4b65-a250-b80d2199e00f.jpg",
          },
          {
            id: "8fc099ba-60e9-405c-bcab-ff457399d1e6",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home2-2.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/c75c9adc-8c37-47d2-9dad-fd12fe060bf0.jpg",
          },
          {
            id: "da0bd308-1438-46bc-b72c-9d9bdbf65782",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home2-3.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/b6c33645-6abe-4f52-a983-edd3d9be093f.jpg",
          },
          {
            id: "93e363e4-fff1-43aa-a425-dd41540d8bda",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home2-4.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/39b6167e-f836-4bc5-b209-abd288b64acf.jpg",
          },
          {
            id: "495b3d89-991e-4f4a-ad73-3168a285e12d",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home2-5.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/9d08a3c3-516e-4e4a-89b9-2939387e05ff.jpg",
          },
        ],
        created_at: "2022-09-19T00:14:12.986583Z",
        User: {
          id: "06cbe2df-2d96-49b9-ac33-7c3136508ef6",
          first_name: "mhd",
          last_name: "abdulbaki",
          email: "abdulbaki@gmail.com",
          phone: "2315798",
          agency: true,
        },
        Location: {
          id: "89036d26-f0f6-484a-bc6a-8609a8835b69",
          country: "syria",
          city: "damascus",
          area: "al midan ",
        },
        Offer: {
          id: "faee12fb-fede-4669-be04-c367876008e2",
          name: "rent",
        },
        Ownership: {
          id: "21e01e27-f963-4568-9a9d-d5f1b1f1eee9",
          name: "green",
        },
        Interior: {
          id: "177d7641-8273-41d7-9999-a9c9c81936a9",
          name: "delux",
        },
        Floor: {
          id: "d2cfda9f-338c-4d4c-9293-d2c7388cac21",
          name: "first",
        },
        PropertyType: {
          id: "a760ebae-3812-4b0a-9a7f-768b66b2750f",
          name: "apartment",
        },
      },
      {
        id: "3",
        address: "29th may street",
        code: "RMZMMN5",
        price: 200000000,
        sqm: 200,
        number_of_rooms: 8,
        number_of_livingrooms: 2,
        number_of_bathrooms: 1,
        number_of_balconies: 2,
        direction_east: true,
        direction_west: false,
        direction_north: false,
        direction_south: false,
        with_elevator: false,
        with_basement: false,
        with_central_heating: false,
        with_solar_power: false,
        with_electric_generator: false,
        with_parking: false,
        with_ac: false,
        available: true,
        location_id: "89036d26-f0f6-484a-bc6a-8609a8835b69",
        user_id: "06cbe2df-2d96-49b9-ac33-7c3136508ef6",
        offer_id: "faee12fb-fede-4669-be04-c367876008e2",
        ownership_id: "21e01e27-f963-4568-9a9d-d5f1b1f1eee9",
        interior_id: "177d7641-8273-41d7-9999-a9c9c81936a9",
        floor_id: "d2cfda9f-338c-4d4c-9293-d2c7388cac21",
        property_type_id: "a760ebae-3812-4b0a-9a7f-768b66b2750f",
        images: [
          {
            id: "c56aa9fe-9903-4190-a95d-95a1f9a1d18d",
            flat_id: "0082aafc-3e35-4c64-ae3c-863bd5e2bbaa",
            url: "/images/home3-1.webp",
            thumbnail:
              "./thumbs/0082aafc-3e35-4c64-ae3c-863bd5e2bbaa/fa4f4401-8868-4a58-a5e2-c9f0aaa81b37.jpg",
          },
          {
            id: "66a4c4c7-c477-4ae1-95fe-5ef16258430c",
            flat_id: "0082aafc-3e35-4c64-ae3c-863bd5e2bbaa",
            url: "/images/home3-2.webp",
            thumbnail:
              "./thumbs/0082aafc-3e35-4c64-ae3c-863bd5e2bbaa/b58ca28f-5470-4bca-a1ba-0cb24c297f93.jpg",
          },
          {
            id: "ce6e18b2-1eea-42a0-8139-2900cb26a177",
            flat_id: "0082aafc-3e35-4c64-ae3c-863bd5e2bbaa",
            url: "/images/home3-3.webp",
            thumbnail:
              "./thumbs/0082aafc-3e35-4c64-ae3c-863bd5e2bbaa/878c5fb3-927b-44de-b678-4f4e6a051e2a.jpg",
          },
          {
            id: "5d5cd78c-8751-4fe7-a481-32f82340ae8f",
            flat_id: "0082aafc-3e35-4c64-ae3c-863bd5e2bbaa",
            url: "/images/home3-4.webp",
            thumbnail:
              "./thumbs/0082aafc-3e35-4c64-ae3c-863bd5e2bbaa/0d3d3373-9b58-4d9a-82db-ac49e89f8ca6.jpg",
          },
          {
            id: "355463bb-1857-4543-8bc7-2dffe03de4c0",
            flat_id: "0082aafc-3e35-4c64-ae3c-863bd5e2bbaa",
            url: "/images/home3-5.webp",
            thumbnail:
              "./thumbs/0082aafc-3e35-4c64-ae3c-863bd5e2bbaa/7cf081ce-447c-4a57-92bf-a8b546ddb3de.jpg",
          },
          {
            id: "73bf6329-6b82-4318-8534-4d49954526b6",
            flat_id: "0082aafc-3e35-4c64-ae3c-863bd5e2bbaa",
            url: "/images/home3-6.webp",
            thumbnail:
              "./thumbs/0082aafc-3e35-4c64-ae3c-863bd5e2bbaa/aab75824-27e4-491f-8433-977a5c3f2297.jpg",
          },
        ],
        created_at: "2022-11-12T10:30:43.498043Z",
        User: {
          id: "06cbe2df-2d96-49b9-ac33-7c3136508ef6",
          first_name: "humam",
          last_name: "abd",
          email: "humam.abd@gmail.com",
          phone: "2315798",
          agency: false,
        },
        Location: {
          id: "89036d26-f0f6-484a-bc6a-8609a8835b69",
          country: "syria",
          city: "damascus",
          area: "al mazzeh",
        },
        Offer: {
          id: "faee12fb-fede-4669-be04-c367876008e2",
          name: "rent",
        },
        Ownership: {
          id: "21e01e27-f963-4568-9a9d-d5f1b1f1eee9",
          name: "green",
        },
        Interior: {
          id: "177d7641-8273-41d7-9999-a9c9c81936a9",
          name: "delux",
        },
        Floor: {
          id: "d2cfda9f-338c-4d4c-9293-d2c7388cac21",
          name: "first",
        },
        PropertyType: {
          id: "a760ebae-3812-4b0a-9a7f-768b66b2750f",
          name: "house",
        },
      },
      {
        id: "4",
        address: "29th may street",
        code: "JBF06BN",
        price: 210000000,
        sqm: 180,
        number_of_rooms: 16,
        number_of_livingrooms: 4,
        number_of_bathrooms: 4,
        number_of_balconies: 2,
        direction_east: true,
        direction_west: true,
        direction_north: true,
        direction_south: true,
        with_elevator: false,
        with_basement: false,
        with_central_heating: false,
        with_solar_power: false,
        with_electric_generator: false,
        with_parking: false,
        with_ac: false,
        available: true,
        location_id: "89036d26-f0f6-484a-bc6a-8609a8835b69",
        user_id: "06cbe2df-2d96-49b9-ac33-7c3136508ef6",
        offer_id: "faee12fb-fede-4669-be04-c367876008e2",
        ownership_id: "21e01e27-f963-4568-9a9d-d5f1b1f1eee9",
        interior_id: "177d7641-8273-41d7-9999-a9c9c81936a9",
        floor_id: "d2cfda9f-338c-4d4c-9293-d2c7388cac21",
        property_type_id: "a760ebae-3812-4b0a-9a7f-768b66b2750f",
        images: [
          {
            id: "ed5806a5-c300-4a37-8a6a-f8de92ff3401",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home4-1.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/6cc2c011-e0e6-4b65-a250-b80d2199e00f.jpg",
          },
          {
            id: "8fc099ba-60e9-405c-bcab-ff457399d1e6",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home4-2.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/c75c9adc-8c37-47d2-9dad-fd12fe060bf0.jpg",
          },
          {
            id: "da0bd308-1438-46bc-b72c-9d9bdbf65782",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home4-3.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/b6c33645-6abe-4f52-a983-edd3d9be093f.jpg",
          },
          {
            id: "93e363e4-fff1-43aa-a425-dd41540d8bda",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home4-4.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/39b6167e-f836-4bc5-b209-abd288b64acf.jpg",
          },
          {
            id: "495b3d89-991e-4f4a-ad73-3168a285e12d",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home4-5.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/9d08a3c3-516e-4e4a-89b9-2939387e05ff.jpg",
          },
        ],
        created_at: "2022-11-11T00:14:12.986583Z",
        User: {
          id: "06cbe2df-2d96-49b9-ac33-7c3136508ef6",
          first_name: "Ibrahim",
          last_name: "abd",
          email: "ibrahim.and@gmail.com",
          phone: "2315798",
          agency: false,
        },
        Location: {
          id: "89036d26-f0f6-484a-bc6a-8609a8835b69",
          country: "syria",
          city: "damascus",
          area: "al mazzeh",
        },
        Offer: {
          id: "faee12fb-fede-4669-be04-c367876008e2",
          name: "buy",
        },
        Ownership: {
          id: "21e01e27-f963-4568-9a9d-d5f1b1f1eee9",
          name: "green",
        },
        Interior: {
          id: "177d7641-8273-41d7-9999-a9c9c81936a9",
          name: "delux",
        },
        Floor: {
          id: "d2cfda9f-338c-4d4c-9293-d2c7388cac21",
          name: "first",
        },
        PropertyType: {
          id: "a760ebae-3812-4b0a-9a7f-768b66b2750f",
          name: "house",
        },
      },
      {
        id: "5",
        address: "29th may street",
        code: "JBF06BN",
        price: 1900000000,
        sqm: 220,
        number_of_rooms: 8,
        number_of_livingrooms: 2,
        number_of_bathrooms: 1,
        number_of_balconies: 2,
        direction_east: true,
        direction_west: true,
        direction_north: true,
        direction_south: false,
        with_elevator: true,
        with_basement: false,
        with_central_heating: true,
        with_solar_power: true,
        with_electric_generator: true,
        with_parking: true,
        with_ac: false,
        available: true,
        location_id: "89036d26-f0f6-484a-bc6a-8609a8835b69",
        user_id: "06cbe2df-2d96-49b9-ac33-7c3136508ef6",
        offer_id: "faee12fb-fede-4669-be04-c367876008e2",
        ownership_id: "21e01e27-f963-4568-9a9d-d5f1b1f1eee9",
        interior_id: "177d7641-8273-41d7-9999-a9c9c81936a9",
        floor_id: "d2cfda9f-338c-4d4c-9293-d2c7388cac21",
        property_type_id: "a760ebae-3812-4b0a-9a7f-768b66b2750f",
        images: [
          {
            id: "ed5806a5-c300-4a37-8a6a-f8de92ff3401",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home5-1.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/6cc2c011-e0e6-4b65-a250-b80d2199e00f.jpg",
          },
          {
            id: "8fc099ba-60e9-405c-bcab-ff457399d1e6",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home5-2.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/c75c9adc-8c37-47d2-9dad-fd12fe060bf0.jpg",
          },
          {
            id: "da0bd308-1438-46bc-b72c-9d9bdbf65782",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home5-3.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/b6c33645-6abe-4f52-a983-edd3d9be093f.jpg",
          },
          {
            id: "93e363e4-fff1-43aa-a425-dd41540d8bda",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home5-4.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/39b6167e-f836-4bc5-b209-abd288b64acf.jpg",
          },
          {
            id: "495b3d89-991e-4f4a-ad73-3168a285e12d",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home5-5.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/9d08a3c3-516e-4e4a-89b9-2939387e05ff.jpg",
          },
        ],
        created_at: "2022-10-27T00:14:12.986583Z",
        User: {
          id: "06cbe2df-2d96-49b9-ac33-7c3136508ef6",
          first_name: "john",
          last_name: "smith",
          email: "john.smith@gmail.com",
          phone: "2315798",
          agency: false,
        },
        Location: {
          id: "89036d26-f0f6-484a-bc6a-8609a8835b69",
          country: "syria",
          city: "damascus",
          area: "al mazzeh",
        },
        Offer: {
          id: "faee12fb-fede-4669-be04-c367876008e2",
          name: "rent",
        },
        Ownership: {
          id: "21e01e27-f963-4568-9a9d-d5f1b1f1eee9",
          name: "green",
        },
        Interior: {
          id: "177d7641-8273-41d7-9999-a9c9c81936a9",
          name: "delux",
        },
        Floor: {
          id: "d2cfda9f-338c-4d4c-9293-d2c7388cac21",
          name: "first",
        },
        PropertyType: {
          id: "a760ebae-3812-4b0a-9a7f-768b66b2750f",
          name: "apartment",
        },
      },
      {
        id: "6",
        address: "29th may street",
        code: "JBF06BN",
        price: 230000000,
        sqm: 230,
        number_of_rooms: 10,
        number_of_livingrooms: 4,
        number_of_bathrooms: 3,
        number_of_balconies: 2,
        direction_east: false,
        direction_west: true,
        direction_north: true,
        direction_south: false,
        with_elevator: true,
        with_basement: false,
        with_central_heating: true,
        with_solar_power: true,
        with_electric_generator: false,
        with_parking: true,
        with_ac: false,
        available: true,
        location_id: "89036d26-f0f6-484a-bc6a-8609a8835b69",
        user_id: "06cbe2df-2d96-49b9-ac33-7c3136508ef6",
        offer_id: "faee12fb-fede-4669-be04-c367876008e2",
        ownership_id: "21e01e27-f963-4568-9a9d-d5f1b1f1eee9",
        interior_id: "177d7641-8273-41d7-9999-a9c9c81936a9",
        floor_id: "d2cfda9f-338c-4d4c-9293-d2c7388cac21",
        property_type_id: "a760ebae-3812-4b0a-9a7f-768b66b2750f",
        images: [
          {
            id: "ed5806a5-c300-4a37-8a6a-f8de92ff3401",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home6-1.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/6cc2c011-e0e6-4b65-a250-b80d2199e00f.jpg",
          },
          {
            id: "8fc099ba-60e9-405c-bcab-ff457399d1e6",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home6-2.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/c75c9adc-8c37-47d2-9dad-fd12fe060bf0.jpg",
          },
          {
            id: "da0bd308-1438-46bc-b72c-9d9bdbf65782",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home6-3.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/b6c33645-6abe-4f52-a983-edd3d9be093f.jpg",
          },
          {
            id: "93e363e4-fff1-43aa-a425-dd41540d8bda",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home6-4.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/39b6167e-f836-4bc5-b209-abd288b64acf.jpg",
          },
          {
            id: "495b3d89-991e-4f4a-ad73-3168a285e12d",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home6-5.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/9d08a3c3-516e-4e4a-89b9-2939387e05ff.jpg",
          },
        ],
        created_at: "2023-02-02T00:14:12.986583Z",
        User: {
          id: "06cbe2df-2d96-49b9-ac33-7c3136508ef6",
          first_name: "alaa",
          last_name: "qutaish",
          email: "alaa.qutaish@gmail.com",
          phone: "2315798",
          agency: true,
        },
        Location: {
          id: "89036d26-f0f6-484a-bc6a-8609a8835b69",
          country: "syria",
          city: "damascus",
          area: "Kafarsouseh",
        },
        Offer: {
          id: "faee12fb-fede-4669-be04-c367876008e2",
          name: "rent",
        },
        Ownership: {
          id: "21e01e27-f963-4568-9a9d-d5f1b1f1eee9",
          name: "green",
        },
        Interior: {
          id: "177d7641-8273-41d7-9999-a9c9c81936a9",
          name: "delux",
        },
        Floor: {
          id: "d2cfda9f-338c-4d4c-9293-d2c7388cac21",
          name: "first",
        },
        PropertyType: {
          id: "a760ebae-3812-4b0a-9a7f-768b66b2750f",
          name: "apartment",
        },
      },
      {
        id: "7",
        address: "29th may street",
        code: "JBF06BN",
        price: 180000000,
        sqm: 180,
        number_of_rooms: 12,
        number_of_livingrooms: 4,
        number_of_bathrooms: 2,
        number_of_balconies: 2,
        direction_east: false,
        direction_west: true,
        direction_north: true,
        direction_south: true,
        with_elevator: true,
        with_basement: false,
        with_central_heating: true,
        with_solar_power: false,
        with_electric_generator: false,
        with_parking: false,
        with_ac: false,
        available: true,
        location_id: "89036d26-f0f6-484a-bc6a-8609a8835b69",
        user_id: "06cbe2df-2d96-49b9-ac33-7c3136508ef6",
        offer_id: "faee12fb-fede-4669-be04-c367876008e2",
        ownership_id: "21e01e27-f963-4568-9a9d-d5f1b1f1eee9",
        interior_id: "177d7641-8273-41d7-9999-a9c9c81936a9",
        floor_id: "d2cfda9f-338c-4d4c-9293-d2c7388cac21",
        property_type_id: "a760ebae-3812-4b0a-9a7f-768b66b2750f",
        images: [
          {
            id: "ed5806a5-c300-4a37-8a6a-f8de92ff3401",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home7-1.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/6cc2c011-e0e6-4b65-a250-b80d2199e00f.jpg",
          },
          {
            id: "8fc099ba-60e9-405c-bcab-ff457399d1e6",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home7-2.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/c75c9adc-8c37-47d2-9dad-fd12fe060bf0.jpg",
          },
          {
            id: "da0bd308-1438-46bc-b72c-9d9bdbf65782",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home7-3.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/b6c33645-6abe-4f52-a983-edd3d9be093f.jpg",
          },
          {
            id: "93e363e4-fff1-43aa-a425-dd41540d8bda",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home7-4.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/39b6167e-f836-4bc5-b209-abd288b64acf.jpg",
          },
          {
            id: "495b3d89-991e-4f4a-ad73-3168a285e12d",
            flat_id: "7c431848-00eb-4f14-a49b-0ea3167fb6af",
            url: "/images/home7-5.webp",
            thumbnail:
              "./thumbs/7c431848-00eb-4f14-a49b-0ea3167fb6af/9d08a3c3-516e-4e4a-89b9-2939387e05ff.jpg",
          },
        ],
        created_at: "2023-01-25T00:14:12.986583Z",
        User: {
          id: "06cbe2df-2d96-49b9-ac33-7c3136508ef6",
          first_name: "john",
          last_name: "smith",
          email: "john.smith@gmail.com",
          phone: "2315798",
          agency: false,
        },
        Location: {
          id: "89036d26-f0f6-484a-bc6a-8609a8835b69",
          country: "syria",
          city: "damascus",
          area: "Kafarsouseh",
        },
        Offer: {
          id: "faee12fb-fede-4669-be04-c367876008e2",
          name: "buy",
        },
        Ownership: {
          id: "21e01e27-f963-4568-9a9d-d5f1b1f1eee9",
          name: "green",
        },
        Interior: {
          id: "177d7641-8273-41d7-9999-a9c9c81936a9",
          name: "delux",
        },
        Floor: {
          id: "d2cfda9f-338c-4d4c-9293-d2c7388cac21",
          name: "first",
        },
        PropertyType: {
          id: "a760ebae-3812-4b0a-9a7f-768b66b2750f",
          name: "apartment",
        },
      },
      
    ],
  },
  error: "",
};

export const dbSlice = createSlice({
  name: "db",
  initialState,
  reducers: {},
});

export default dbSlice.reducer;
