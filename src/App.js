import React, { useState } from 'react';
import NavList from './components/NavList';
import Gadgets from './components/GadgetList';
import Appliances from './components/ApplianceList';
import Accessories from './components/AccessoriesList';
import Cart from './components/Cart';
import { ShopContextProvider } from './components/ShopContext';
import './Styles.css';

//images
import refrigerator from './assets/refrigerator.jpg';
import microwave from './assets/microwave.jpg';
import lamp from './assets/lamp.jpg';
import electricFan from './assets/electric fan.jpg';
import iPhone from './assets/iphone.jpg';
import macBook from './assets/macbook pro.jpg';
import razer from './assets/razer balisk mouse.jpg';
import goPro from './assets/gopro.jpg';
import sunglasses from './assets/sunglasses.jpg';
import cap from './assets/cap.jpg';
import bucketHat from './assets/bucket_hat.jpg';
import cyclingShorts from './assets/cycling shorts.jpg';

//defined structures to be used
const menus = [
  { name: "Appliances", url: "#", id: 1},
  { name: "Gadgets", url: "#", id: 2},
  { name: "Accessories", url: "#", id: 3},
];
 
const Appliancesitems = [
  { id: 1, name: "Refrigerator", img: refrigerator, price: "₱119,995"},
  { id: 2, name: "Microwave", img: microwave, price: "₱3,300"},
  { id: 3, name: "Lamp", img: lamp, price: "₱4,500"},
  { id: 4, name: "Electric Fan", img: electricFan, price: "₱2,129"}
];

const Gadgetitems = [
  { id: 5, name: "iPhone 15 Pro Max", img: iPhone, price: "₱70,990"},
  { id: 6, name: "MacBook Pro", img: macBook, price: "₱104,990"},
  { id: 7, name: "Razer Balisk Mouse", img: razer, price: "₱2,349"},
  { id: 8, name: "GoPro Hero 12 Camera", img: goPro, price: "₱24,990"},
];

const Accessoriesitems = [
  { id: 9, name: "Men's Sunglasses", img: sunglasses, price: "₱399"},
  { id: 10, name: "UV Protection Cap", img: cap, price: "₱990"},
  { id: 11, name: "UV Protection Bucket Hat", img: bucketHat, price: "₱990"},
  { id: 12, name: "Cycling Shorts", img: cyclingShorts, price: "₱499"},
];

//Lazado app
function App() {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const renderCategory = () => {
    switch (selectedCategory) {
      case 1:
        return <Appliances items={Appliancesitems} />;
      case 2:
        return <Gadgets items={Gadgetitems} />;
      case 3:
        return <Accessories items={Accessoriesitems} />;
      default:
        return null;
    }
  };

  return (
    <ShopContextProvider>
      <div className="App">
        <div className="header-container">
          <header>
            <h1>Lazado</h1>
          </header>
          <NavList menus={menus} setSelectedCategory={setSelectedCategory} />
        </div>
        <div className="main-container">
          <main>
            {renderCategory()}
          </main>
          <div className="cart">
            <h2>Shopping Cart</h2>
            <Cart
              Appliancesitems={Appliancesitems}
              Gadgetitems={Gadgetitems}
              Accessoriesitems={Accessoriesitems}
            />
          </div>
        </div>
      </div>
    </ShopContextProvider>
  );
}

export default App