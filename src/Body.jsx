import { useState } from "react";
import data from "./utils/constant";


function Body() {
  const [searchText, setSearchText] = useState();
  const [filteredData, setFilteredData] = useState(data);

  const filterSearchData = () => {
    console.log("data from filter", searchText);
    const filteredResult = data.filter((data) =>
      data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
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
            ratings,
          }) => (
            <div key={id} className="card-img">
              <>
              <img src={image} width="100%" height="auto" alt={productName} />
              <h3> {name} </h3>
              </>
            <div className="body">
                <div>Rs. {price}</div>
                    {inStock && <div> In Stock </div>}
                    {!inStock && <div> Out of Stock </div>}
                    <div>{level}</div>
                    <div className="fa fa-star" style={{marginTop:"4px"}}>{ratings}</div>
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

export default Body;
