import { useState } from "react";
import "./App.css";

import faker from "faker";

faker.seed(123);

const data = [...Array(50)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale",
  ]),
  idealFor: faker.random.arrayElement([
    "Men",
    "Women",
    "Girl",
    "Boy",
    "Senior",
  ]),
  level: faker.random.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional",
  ]),
  color: faker.commerce.color(),
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
          placeholder="please search here🔍"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={filterSearchData}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
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
            <div
              key={id}
              style={{
                border: "1px solid #4B5563",
                borderRadius: "0 0 0.5rem 0.5rem",
                margin: "1rem",
                maxWidth: "40%",
                padding: "0 0 1rem",
              }}
            >
              <img src={image} width="100%" height="auto" alt={productName} />
              <h3> {name} </h3>
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
          )
        )}
      </div>
    </>
  );
}

export default App;
