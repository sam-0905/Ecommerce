import "./sidebar.css"
import Category from "./Category/Category";
import Price from "./price/price";
const SideBar = () => {
return (
    <>
    <section className="sidebar-main">
    <Category/> 
    <Price/>
    </section>
    
    </>
)
}

export default SideBar;