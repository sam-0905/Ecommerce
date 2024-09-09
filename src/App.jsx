import { useState } from "react";
import "./App.css";
// import { useState } from 'react'
import './App.css'
import "font-awesome/css/font-awesome.min.css";

// import faker from "faker";
// import * as faker from '@faker-js/faker';
import { faker } from '@faker-js/faker';


faker.seed(123);

// eslint-disable-next-line no-unused-vars
const data = [...Array(50)].map((item) => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  image: faker.image.url({width:128,height:128}),
  price: faker.commerce.price(),
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.helpers.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale",
  ]),
  idealFor: faker.helpers.arrayElement([
    "Men",
    "Women",
    "Girl",
    "Boy",
    "Senior",
  ]),
  level: faker.helpers.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional",
  ]),
  color: faker.color.human(),
}));

function App() {
  const [searchText, setSearchText] = useState();
  const [filteredData, setFilteredData] = useState(data);

  const filterSearchData = () => {
    console.log("data from filter", searchText);
    const filteredResult = data.filter((data) =>
      data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log({ filteredResult }); 
    setFilteredData(filteredResult);
  };

  console.log("data from filter", data);

  return (
    <>
      <h1>Ecommerce App</h1>

      <div className="Search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for Products, Brands and More"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={filterSearchData}>
        <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="card" >
        {filteredData.map(
          ({
            id,
            name,
            image,
            price,
            productName,
            inStock,
            level,
            fastDelivery,
          }) => (
            <div key={id} className="card-img">
              <>
              <img src={image} width="100%" height="auto" alt={productName} />
              <h3> {name} </h3>
              </>
            <div className="card-body">
                <div>Rs. {price}</div>
                    {inStock && <div> In Stock </div>}
                    {!inStock && <div> Out of Stock </div>}
                    <div>{level}</div>
                     {fastDelivery ? (
                     <div> Fast Delivery </div>
                     ) : (
                     <div> 3 days minimum </div>
                     )}
             </div>
          </div>
          )
        )}
      </div>
    </>
  );
}

export default App;
