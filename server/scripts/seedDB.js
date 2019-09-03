const mongoose = require("mongoose");
const db = require("../database/models");

// This file empties the Boxs collection and inserts the Boxs below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/boxlocationlist"
);

const boxSeed = [
  {
    name: "Starbucks - NJ - Jersey City",
    address: "Starbucks - NJ - Jersey City ,Target Jersey City T-1886_100 14th St_Jersey City, New Jersey 07310",
    imageUrl:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1555431816%2FStarbucks-RewardsProgram-FT-Blog0419.jpg%3Fitok%3DhWtHJcQv&w=400&c=sc&poi=face&q=85",
    lat: -74.03719472,
    lng: 40.73134817,
    numbatavail: 10
  },
  {
    name: "Starbucks - NJ - Jersey City [W]",
    address: "Jersey City_111 Town Square Place_Jersey City, New Jersey 07310_(201) 610-976",
    imageUrl:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1555431816%2FStarbucks-RewardsProgram-FT-Blog0419.jpg%3Fitok%3DhWtHJcQv&w=400&c=sc&poi=face&q=85",
    lat: -74.033361,
    lng: 40.726553,
    numbatavail: 10
  },
  {
    name: "Starbucks - NJ - North Bergen",
    address: "Target North Bergen Commons T-1865_7101 Tonnelle Ave_North Bergen, New Jersey 07087",
    imageUrl:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1555431816%2FStarbucks-RewardsProgram-FT-Blog0419.jpg%3Fitok%3DhWtHJcQv&w=400&c=sc&poi=face&q=85",
    lat: -74.02118475,
    lng: 40.8014908,
    numbatavail: 10
  },
  {
    name: "Starbucks - NJ - Paramus [W]",
    address: "Garden State Plaza_28 Garden State Plaza_Paramus, New Jersey 07652_201-556-1991",
    imageUrl:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1555431816%2FStarbucks-RewardsProgram-FT-Blog0419.jpg%3Fitok%3DhWtHJcQv&w=400&c=sc&poi=face&q=85",
    lat: -74.07887936,
    lng: 40.91488902,
    numbatavail: 10
  },
  {
    name: "Starbucks - NJ - Paramus [W]",
    address: "Rt. 4 - Paramus_East 65 Route 4 West_Paramus, New Jersey 07652_201-843-4582",
    imageUrl:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1555431816%2FStarbucks-RewardsProgram-FT-Blog0419.jpg%3Fitok%3DhWtHJcQv&w=400&c=sc&poi=face&q=85",
    lat: -74.0656,
    lng: 53.481759,
    numbatavail: 10
  },
  {
    name: "Starbucks - NJ - Paramus [W]",
    address: "Paramus_177 Route 17 South_Paramus, New Jersey 07652_201 599 0740",
    imageUrl:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1555431816%2FStarbucks-RewardsProgram-FT-Blog0419.jpg%3Fitok%3DhWtHJcQv&w=400&c=sc&poi=face&q=85",
    lat: -74.0747,
    lng: 40.9581,
    numbatavail: 10
  }
];

db.Box
  .remove({})
  .then(() => db.Box.collection.insertMany(boxSeed))
  .then(data => {
    // console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
