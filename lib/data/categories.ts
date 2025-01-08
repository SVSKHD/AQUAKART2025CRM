import { Category } from "@/lib/types/category";

export const categories: Category[] = [
  {
    _id: "6528debce9e8a06a49a23b2c",
    title: "Softeners",
    description: "These are devices or systems used to reduce the hardness of water. Hard water contains a high concentration of minerals, primarily calcium and magnesium. Water softeners work by removing or replacing these minerals with sodium ions, making the water \"softer.\" Softened water is often preferred because it can reduce the buildup of scale in pipes and appliances and is gentler on the skin and hair.",
    photos: [
      {
        id: "categories/hnmzlrucnmpxyirsujx0",
        secure_url: "https://res.cloudinary.com/aquakartproducts/image/upload/v1697875761/categories/hnmzlrucnmpxyirsujx0.png",
        _id: "653387318014e752ba89f0e4"
      }
    ],
    keywords: "Hard water\nSoft water\nIon exchange\nResin beads\nSalt-based softener\nSalt-free softener\nRegeneration cycle\nBrine tank\nCalcium\nMagnesium\nScale buildup\nWater hardness grains",
    createdAt: "2023-10-13T06:07:56.503Z",
    updatedAt: "2023-10-21T08:09:21.816Z",
    __v: 1
  },
  {
    _id: "66b37cfd184f8f621a8e5933",
    title: "Filters",
    description: "Sand filters are an essential component in maintaining clean and clear water in pools and various water systems. These filters use a specially graded sand as the filtration medium, which traps debris and particles as water flows through it.",
    photos: [
      {
        id: "categories/qnco1bhlzh61ogxiu4rx",
        secure_url: "https://res.cloudinary.com/aquakartproducts/image/upload/v1723038973/categories/qnco1bhlzh61ogxiu4rx.png",
        _id: "66b37cfd184f8f621a8e5934"
      }
    ],
    keywords: "Sand Filter\nPool Sand Filter\nSand Filter for Pool\niron filters\nkent Sandfilter\nkent Ironfillter",
    createdAt: "2024-08-07T13:56:13.793Z",
    updatedAt: "2024-08-07T13:56:13.793Z",
    __v: 0
  },
  {
    _id: "66b388e5aaee5040f671f5fe",
    title: "Ro Purifiers",
    description: "Wall-mount RO purifiers save counter space, offering a sleek design and easy access. Under-counter RO purifiers, hidden beneath the sink, provide purified water via a separate faucet, preserving kitchen aesthetics.",
    photos: [
      {
        id: "categories/prlk8hg3xgpjmiabfyjc",
        secure_url: "https://res.cloudinary.com/aquakartproducts/image/upload/v1723042021/categories/prlk8hg3xgpjmiabfyjc.png",
        _id: "66b388e5aaee5040f671f5ff"
      }
    ],
    keywords: "RO purifiers\nReverse osmosis water purifiers\nWall-mount RO purifiers\nUnder-counter RO purifiers\nZero water wastage RO purifiers\nKent Ro purifiers",
    createdAt: "2024-08-07T14:47:01.806Z",
    updatedAt: "2024-08-07T14:47:01.806Z",
    __v: 0
  },
  {
    _id: "66b3bbf454f6ecb1687c7de3",
    title: "Pumps",
    description: "Pressure pumps boost water flow in households, ensuring consistent pressure in showers and taps. Piston pumps, ideal for high-pressure applications, use a piston mechanism to move fluids efficiently.",
    photos: [
      {
        id: "categories/i3ucbtbe0rybojvnwuw3",
        secure_url: "https://res.cloudinary.com/aquakartproducts/image/upload/v1723055092/categories/i3ucbtbe0rybojvnwuw3.png",
        _id: "66b3bbf454f6ecb1687c7de4"
      }
    ],
    keywords: "Pressure boosters\npiston pumps\nhigh pressure pumps\nhouselhold pressure boosters\nswimming pools\nwell pumps\nfluid pumps",
    createdAt: "2024-08-07T18:24:52.636Z",
    updatedAt: "2024-08-07T18:24:52.636Z",
    __v: 0
  }
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category._id === id);
};

export const getCategoryByType = (type: string): Category | undefined => {
  return categories.find(category => 
    category.title.toLowerCase() === type.toLowerCase()
  );
};