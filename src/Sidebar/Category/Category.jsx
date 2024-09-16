import "./Category.css";
import { useReducer } from "react";
import { data } from "../../Constant/constant";
import { getSortedData } from './../../Filter/Sort';

const Category = () => {  
  
  const [{ showInventoryAll, showFastDeliveryOnly, sortBy },dispatch] = useReducer(
    function reducer(state, action) {
      switch (action.type) {
        case "TOGGLE_INVENTORY":
          return (state = {
            ...state,
            showInventoryAll: !state.showInventoryAll
          });
  
        case "TOGGLE_DELIVERY":
          return (state = {
            ...state,
            showFastDeliveryOnly: !state.showFastDeliveryOnly
          });
        case "SORT":
          return {
            ...state,
            sortBy: action.payload
          };
        default:
          return state;
      }
    },
    {
      showInventoryAll: true,
      showFastDeliveryOnly: false,
      sortBy: null
    }
  );

  function getFilteredData(
    productList,
    { showFastDeliveryOnly, showInventoryAll }
  ) {
    return productList
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }
  const sortedData = getSortedData(data, sortBy);
  const filteredData = getFilteredData(sortedData, {
    showFastDeliveryOnly,
    showInventoryAll,
  });
    return(     
        <> 
        <h2>Category</h2>
        <fieldset>
        <legend className="sidebar-head">Sort By</legend>
        <label className="sidebar-label" >
          <input
            type="radio"        
            name="sort"
            className="checkmark-input"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          ></input>
          <span className="sidebar-title">Price - Low to High</span>
        </label> 

        <label className="sidebar-label">
          <input
            type="radio"
            name="sort"
            className="checkmark-input"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
          ></input>
         <span className="sidebar-title">Price - High to Low</span>
        </label>
        </fieldset>
        <fieldset>
        <legend className="sidebar-head"> Filters </legend>
        <label className="sidebar-label">
          <input
            type="checkbox"
            className="checkmark-input"
            checked={showInventoryAll}
            onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
          >
          </input>
           <span className="sidebar-title">Include Out of Stock</span>
        </label>
      
        <label className="sidebar-label">
          <input
              type="checkbox"
            className="checkmark-input"
            checked={showFastDeliveryOnly}
            onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
          >
          </input>
          <span className="sidebar-title">Fast Delivery Only</span>
          
        </label>
        </fieldset>
        <label className="sidebar-label">
          Price Range
          <input type="range" />
        </label>

        </>
    )
}

export default Category