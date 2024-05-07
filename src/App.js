import NavList from './components/NavList';
import ApplianceList from './components/ApplianceList'
import GroceriesList from './components/GroceriesList';
import GadgetList from './components/GadgetList';
import ClothingList from './components/ClothingList';
import './Styles.css';

//defined structures to be used
const menus = [
  { name: "Appliances", url: "#", id: 1},
  { name: "Groceries", url: "#", id: 2},
  { name: "Gadgets", url: "#", id: 3},
  { name: "Clothing", url: "#", id: 4},
];
 
const Appliancesitems = [
  { appliancename: "Asahy Power Juicer"},
  { appliancename: "Samsong Washing Machine"},
  { appliancename: "Hanabesh Electric Fan"},
  { appliancename: "DIY Lamp"},
];

const Groceriesitems = [
  { groceriesname: "Banana"},
  { groceriesname: "Apple"},
  { groceriesname: "Fish"},
  { groceriesname: "Pork"},
];

const Gadgetitems = [
  { gadgetname: "Apple MacBook"},
  { gadgetname: "Samsung Galaxy S20"},
  { gadgetname: "Apple iPhone 15"},
  { gadgetname: "PS5"},
];

const Clothingitems = [
  { clothingname: "T-Shirt"},
  { clothingname: "Hoodie"},
  { clothingname: "Hat"},
  { clothingname: "Cargo Pants"},
];

//Lazado app
function App() {
  return (
    //defined div classes for parts of website
    <div className = 'flex-container'>
      <div className = 'flex-nav'>
        <NavList data = {menus}/>
      </div>
      <div className = 'flex-categories'>
          <div id = 'appliances'>
            <ApplianceList data = {Appliancesitems}/>
          </div>
          <div id = 'groceries'>
            <GroceriesList data = {Groceriesitems}/>
          </div>
          <div id = 'gadgets'>
            <GadgetList data = {Gadgetitems}/> 
          </div>
          <div id = 'clothing'>
            <ClothingList data = {Clothingitems}/>
          </div>
      </div>
    </div>
  );
}

export default App