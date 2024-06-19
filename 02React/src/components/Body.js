import { useState, useEffect } from "react";
import ResturentCard from "./ResturentCard"

const Body=()=>{
// Local state variable 
const listofData=[
        {
        data:{
            id:"334475",
            name:"KFC",
            cuisines:["Burger", "Biryani", "Amearican", "Snacks", "Fast Food"],
            costForTwo:40000,
            deliveryTime:36,
            avgReating:"3.8"
        }
        },
        {
            data:{
                id:"334476",
                name:"Dominos",
                cuisines:["Burger", "Biryani", "Amearican", "Snacks", "Fast Food"],
                costForTwo:40000,
                deliveryTime:36,
                avgReating:"4.5"
            }
        },
        {
            data:{
                id:"334477",
                name:"Swiggy",
                cuisines:["Burger", "Biryani", "Amearican", "Snacks", "Fast Food"],
                costForTwo:40000,
                deliveryTime:36,
                avgReating:"4.2"
            }
        },
        {
            data:{
                id:"334478",
                name:"Patho Food",
                cuisines:["Burger", "Biryani", "Amearican", "Snacks", "Fast Food"],
                costForTwo:40000,
                deliveryTime:36,
                avgReating:"3.4"
            }
        },
        {
            data:{
                id:"334479",
                name:"MCD",
                cuisines:["Burger", "Biryani", "Amearican", "Snacks", "Fast Food"],
                costForTwo:40000,
                deliveryTime:36,
                avgReating:"4.1"
            }
        },
        {
            data:{
                id:"334480",
                name:"FoodMandu",
                cuisines:["Burger", "Biryani", "Amearican", "Snacks", "Fast Food"],
                costForTwo:40000,
                deliveryTime:36,
                avgReating:"3.1"
            }
        },
    ];
const [listOfResturents, setistOfResturents]=useState(listofData);

useEffect(()=>{
    fetchData()
},[])
const fetchData=async()=>{
    const data=await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const json=await data.json();
    console.log(json);
    console.log("hello");
    // setistOfResturents();
}
    return(
        <div className="body">
            <div className="Search">
                <button onClick={()=>{
                    // Filter lgic here
                    const filteredList=listOfResturents.filter(
                        (res)=> res.data.avgReating>4);
                        console.log(listOfResturents);
                        setistOfResturents(filteredList);
                }} className="filter-but">Top Retted Button</button>
            </div>
            <div className="res-container">
                {
                    listOfResturents.map((resturent)=>(
                        <ResturentCard key={resturent.data.id} resData={resturent} />
                    ))
                }
                {/* restro container */}
            </div>
        </div>
    )
}

export default Body

// When a state variable upgrades react re-render the component