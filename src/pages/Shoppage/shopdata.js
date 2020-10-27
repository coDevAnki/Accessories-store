const SHOP_DATA = [
  {
    id: 1,
    title: "Headphones",
    routeName: "headphones",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603774263/images/Status-Audio_HD1-BT_Umber_Main-06_900x_zlpxem.jpg",
        price: 25,
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1601534108/images/h9-anthracite_CMS_CT1_xeqxqy.webp",
        price: 18,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1601534108/images/h4_black1000x1000l_imap4l.webp",
        price: 35,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603774184/images/Status-Audio_CB-1_Black_Main-05_900x_f87bxf.jpg",
        price: 25,
      },
    ],
  },
  {
    id: 2,
    title: "Speakers",
    routeName: "speakers",
    items: [
      {
        id: 10,
        name: "Waterproof Bluetooth Speaker",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1601534107/images/Beosound_A1_Natural__hero_1_brqyvd.webp",
        price: 220,
      },
      {
        id: 11,
        name: "Multiroom Speaker",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603775676/images/beosound-2-bronze-transparrent-image-1_me4sur.webp",
        price: 280,
      },

      {
        id: 12,
        name: "One-point music A9",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603774839/images/beoplay-a9-4-gen_Anthracite_CMS_1_mduamw.webp",
        price: 160,
      },
      {
        id: 13,
        name: "Compact M3",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603774549/images/m3_black_1000x1000_new_mryyr7.webp",
        price: 110,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: "Earphones",
    routeName: "earphones",
    items: [
      {
        id: 18,
        name: "IEM 2X",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603774414/images/Status-Audio_IEM-2X_Jetblack_Main-01_900x_vba2nr.jpg",
        price: 125,
      },

      {
        id: 19,
        name: "BT Transfer F1",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603774345/images/BTT-2X_Midnight_View-4_On-Gray_900x_n7badd.jpg",
        price: 90,
      },
      {
        id: 20,
        name: "Wireless Earbuds e6",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603776820/images/Status-Audio_IEM-2X_Gunmetal_Main-02_900x_nailnc.jpg",
        price: 90,
      },
      {
        id: 21,
        name: "BT Structure A5",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603774374/images/BTS-2X_Storm_Right-Ear-1_On-Gray_900x_jlanun.jpg",
        price: 165,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: "Kids",
    routeName: "kids",
    items: [
      {
        id: 23,
        name: "kid1",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603777790/images/pink_ff8845f6-938b-46d8-9178-86e406d19f9a_1024x1024_sr3rsq.png",
        price: 25,
      },
      {
        id: 24,
        name: "kid2",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603777210/images/Digital-Camo-1_1024x1024_vhcibf.png",
        price: 20,
      },
      {
        id: 25,
        name: "kid3",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603777746/images/black_931e949b-2c0f-4b57-bd70-5bf1b0aac443_1024x1024_sfprbr.png",
        price: 80,
      },
      {
        id: 26,
        name: "kid4",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603777075/images/blue1_xxtftp.png",
        price: 80,
      },
    ],
  },
  {
    id: 5,
    title: "Others",
    routeName: "others",
    items: [
      {
        id: 30,
        name: "others1",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603778112/images/USB-Black_52a0632f-595b-4a3d-ac22-66df88f4c589_1024x1024_u73qxd.png",
        price: 325,
      },
      {
        id: 31,
        name: "others2",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603778064/images/AC-Gray_463e4b7b-ba2f-4ef4-8efc-1887c1205219_1024x1024_yu3inn.png",
        price: 20,
      },
      {
        id: 32,
        name: "others3",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603778509/images/h5_charger_lorgyo.webp",
        price: 25,
      },
      {
        id: 33,
        name: "others4",
        imageUrl:
          "https://res.cloudinary.com/codevanki/image/upload/v1603778512/images/charging-pad-natural-1_ggwwnb.webp",
        price: 25,
      },
      {
        id: 34,
        name: "kid4",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
    ],
  },
];

export default SHOP_DATA;
