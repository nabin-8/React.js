import { CDN_URL } from "../utils/constraints"

const ResturentCard=(props)=>{
    // const {resName, cuisine}=props
    const {resData}=props;
    const{
        name,
        avgReating,
        cuisines,
        costForTwo,
        deliveryTime,
    }=resData?.data;

    return(
        <div className="res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src={CDN_URL} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <span className="ratingStar" >{avgReating} stars</span>
            <span className="timeCook" >{deliveryTime} minutes</span>
            <h4>{costForTwo/100} minutes</h4>
        </div>
    )
}

export default ResturentCard 