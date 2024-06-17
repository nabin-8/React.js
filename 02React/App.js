import React from "react";
import ReactDOM from "react-dom/client";

/**
- Header
  - Logo
  - Nav Items

- Body
  - Search
  - ResturentContainer
    - ResturentCard
        - Imd
        - Name of Res, Star rating, cuisine, delivery time
- Footer
  - Copyright
  - Links
  - Address
  - Contact
 */

const Header=()=>{
    return(
        <div className="header">
            <div className="Logo-container">
                <img 
                className="logo"
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All" 
                />
            </div>
            <div className="nav-items" >
                <ul >
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const ResturentCard=(props)=>{
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mocil3npmwpcdcfaxql1" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <span className="ratingStar" >4.4 stars</span>
            <span className="timeCook" >38 minutes</span>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                <ResturentCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian" />
                <ResturentCard resName="KFC" cuisine="Chilly Chiken, North Indian, Asian"/>
                <ResturentCard resName="KKFC"cuisine="Hot Soss, North Indian, Asian" />
                <ResturentCard resName="Swigy" cuisine="Sukking, North Indian, Asian"/>
                <ResturentCard resName="Zomatto" cuisine="Jolaradyan, North Indian, Asian" />
                {/* restro container */}
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)