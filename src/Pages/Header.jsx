
//Nav link
import { NavLink } from 'react-router-dom';
import AppIcon from "../assets/images/AppIcon.svg"

export const Title = () => (
    <div>
      <a href="/">
        <img className="logo" src={AppIcon} alt="logo" />
      </a>
    </div>
  );

const Header = () => {
    const getActiveLink = ({ isActive, isPending }) => ({
        margin: '1rem 0',
        color: isActive ? 'yellow' : isPending ? 'pending' : 'cornsilk',
      });

   return (
    <>   
    <div className="header">
         <Title/>
    <nav className="Nav link ">
        <NavLink style={getActiveLink} to="/c">
        <i className="fa fa-home container"> Home  </i>
        </NavLink>
        <NavLink style={getActiveLink} to="/login">
          <i className="fa fa-sign-in container" >Login</i>
        </NavLink>
        <NavLink style={getActiveLink} to="/wish">
        <i className="fa fa-heart container">Wishlist</i>
        </NavLink>
        <NavLink style={getActiveLink} to="/cart">
        <i className="fa fa-cart-arrow-down container">Cart</i>
        </NavLink>
      </nav>
    </div>
   
    </>
   )
}

export default Header;