import Logo from "./assets/img/Logo.png";
import Logout from "./assets/img/Logout.png";
import Categories from "./Categories";
import Home from "./assets/img/Home.png";
import General from "./assets/img/General.png";
import Food from "./assets/img/Food.png";
import Drink from "./assets/img/Drink.png";
import Tool from "./assets/img/Tool.png";
import Health from "./assets/img/Health.png";
import "./assets/SideBar.css";
import { useState } from "react";

export default function SideBar() {
  const [activeCategory, setActiveCategory] = useState("Home");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img className="logo" src={Logo} alt="" />
        <div className="sidebar__storeName">STORE</div>
      </div>
      <div className="sidebar__menu">
        <Categories
          clicked={activeCategory}
          imgName={Home}
          text="Home"
          onClick={() => handleCategoryClick("Home")}
        />
        <Categories
          clicked={activeCategory}
          imgName={General}
          text="General"
          onClick={() => handleCategoryClick("General")}
        />
        <Categories
          clicked={activeCategory}
          imgName={Food}
          text="Food"
          onClick={() => handleCategoryClick("Food")}
        />
        <Categories
          clicked={activeCategory}
          imgName={Drink}
          text="Drink"
          onClick={() => handleCategoryClick("Drink")}
        />
        <Categories
          clicked={activeCategory}
          imgName={Tool}
          text="Tool"
          onClick={() => handleCategoryClick("Tool")}
        />
        <Categories
          clicked={activeCategory}
          imgName={Health}
          text="Health"
          onClick={() => handleCategoryClick("Health")}
        />
      </div>
      <div className="sidebar__footer">
        <img src={Logout} alt="" />
        <div className="sidebar__footerLogout">Exit</div>
      </div>
    </div>
  );
}
