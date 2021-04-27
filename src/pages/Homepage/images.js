const images = [
  {
    src:
      "https://res.cloudinary.com/codevanki/image/upload/v1609042569/images/STATUS_about-flat-products_1400x_m3s24v.jpg",

    text: "Brand that Defines the Vision of Sound",

    position: "center",
  },
  {
    src:
      "https://res.cloudinary.com/codevanki/image/upload/c_crop,f_webp/v1609047517/images/STATUS_sound-hero_1400x_wv9qlu",
    text: "We built simple, high quality tools for everyday listening.",
    srcset: [
      {
        srcset:
          "https://res.cloudinary.com/codevanki/image/upload/c_scale,w_1200/v1618576383/images/STATUS_sound-hero_1400x_wv9qlu.webp",
        media: "(max-width:668px)",
      },
    ],
  },
  {
    srcset: [
      {
        srcset:
          "https://res.cloudinary.com/codevanki/image/upload/v1618581108/images/slideshow_1_gvw4tm.webp",
        media: "(max-width:500px)",
      },

      {
        srcset:
          "https://res.cloudinary.com/codevanki/image/upload/v1618570815/images/slideshow_1_gvw4tm.webp",
        media: "(max-width:992px)",
      },
    ],
    src:
      "https://res.cloudinary.com/codevanki/image/upload/co_rgb:ffffff,f_auto,o_100,q_100,z_0.6/v1618567825/images/slideshow_1_gvw4tm",
    position: "right",

    text: "Passive Noise Reduction safely Designed for your Kids",
  },

  {
    src:
      "https://res.cloudinary.com/codevanki/image/upload/f_auto,q_auto/v1618635897/images/Story_Cat_juw5ti.webp",

    srcset: [
      {
        srcset:
          "https://res.cloudinary.com/codevanki/image/upload/v1606303119/images/Story_Cat_juw5ti.webp",
        media: "(max-width:500px)",
      },
    ],
    text:
      "We are committed to offering premium sound and good design to a wider audience.",
  },

  // "https://res.cloudinary.com/codevanki/image/upload/v1606303602/images/status_bt-one_black_turn-table_1200x.progressive_e8gjkt.webp",
];
export default images;
