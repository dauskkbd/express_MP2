const accessories = [
  {
    id: 0,
    image: "ROG_delta_s_core.png",

    product: {
      name: "ROG Delta S Core",
      type: "3.5mm headset",
    },

    anc: {
      mic: "No",
      headphone: "No",
    },

    usageScenario: "Gaming",
    connector: "3.5mm",

    supportPlatform: [
      "PC",
      "MAC",
      "Nintendo Switch",
      "XBOX One",
      "XBOX Series X",
      "XBOX Series S",
    ],

    driver: {
      material: "Neodymium magnet",
      size: "50mm",
    },

    pickupPattern: "Unidirectional",

    sensitivity: "-40dB",

    headphoneImpedance: "32 Ohms",

    frequencyResponse: {
      headphone: "20 - 40,000 Hz",
      microphone: "100 ~ 10000 Hz",
    },

    price: {
      usd: "",
      php: "₱19,300.00",
    },

    description:
      "Lightweight 3.5 mm gaming headset with 50 mm ASUS Essence drivers, virtual 7.1 surround sound, compatible with PCs, PlayStation® 5, Nintendo Switch™ and Xbox",

    warranty: {
      message: [
        "2 Years software protection and recovery",
        "Hardware replacement",
      ],
    },
  },
  {
    id: 1,
    image: "rog_delta.png",

    product: {
      name: "ROG Delta S EVA Edition",
      type: "Wired",
    },

    anc: {
      mic: "Yes",
      headphone: "No",
    },

    usageScenario: "Gaming",
    connector: "USB-A",

    supportPlatform: [
      "PC",
      "MAC",
      "Nintendo Switch",
      "XBOX One",
      "XBOX Series X",
      "XBOX Series S",
    ],

    driver: {
      material: "Neodymium magnet",
      size: "50mm",
    },

    pickupPattern: "Unidirectional",

    sensitivity: "-40dB",

    headphoneImpedance: "32 Ohms",

    frequencyResponse: {
      headphone: "None",
      microphone: "100 ~ 10000 Hz",
    },

    price: {
      usd: "",
      php: "₱22,500.00",
    },

    description:
      "Lightweight 3.5 mm to 2.5mm gaming headset with 50 mm drivers, virtual 7.1 surround sound, compatible with PCs, PlayStation® 5, Nintendo Switch™ and Xbox",

    warranty: {
      message: [
        "1 Years software protection and recovery",
        "Hardware replacement",
      ],
    },
  },
];

module.exports = { accessories };
