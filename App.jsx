// Correct import for React 18
import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object =>HTMLElement(Render)

// const heading=React.createElement("h1",
//     {id:"heading"},
//     "Namaste React 🥊");

// console.log(heading);

//Easy Way
//JSX - HTML-like or XML-like syntax


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *   - RestroCard
 *    - Img
 *    - Name of restro, Star Rating, cuisine, delivery time
 */
const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3x3BazQ5A8Pl23HsWGaSdWX0iOGwNDqeGw&s" alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) =>{
    return(
        <div className="restro-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img 
            className="restro-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h7oibtpm7kqks8cqz3gh" 
            alt="restro-logo" />
            <h3>{props.restroName}</h3>
            <h5>{props.cuisine}</h5>
            <h5>{props.rating}</h5>
            <h5>{props.delTime}</h5>
        </div>
    );
};

const Body = () => {
    return(
        <div className="body">
            <div className="Search">
                Search
            </div>
            <div className="restro-container">
                 <RestaurantCard 
                 restroName="Meghana Foods"
                 cuisine="Biryani, North Indian, Asian"
                 rating="4.3"
                 delTime="36 mins"
                 />
                 <RestaurantCard 
                 restroName="KFC"
                 cuisine="Burger, Fast Food"
                 rating="4.4"
                 delTime="25 mins"
                 />
            </div>
        </div>
    );
};

const AppLayout = () =>{
    return <div className="app">
        <Header/>
        <Body/>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<AppLayout/>);