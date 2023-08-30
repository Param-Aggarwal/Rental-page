import { useState, useEffect } from "react";
import './search.css'
import Content from "../Content/content";

const Search = ({data}) => {
    const [ location, setLocation ] = useState('');
    const [ when, setWhen ] = useState('');
    const [ price, setPrice ] = useState('');
    const [propertyType, setPropertyType] = useState('');

    const [filteredList, setFilteredList] = useState(null);
    const [buttonClicked, setButtonClicked] = useState(false);


    const handleClick = () => {
        setButtonClicked(true);
        // console.log(`location is ${location} + when is ${when} + price is ${price} + type is ${propertyType}`)
        setFilteredList(data.filter(d => {
            return (
                d.address === (location || d.address) &&
                d.price == (price || d.price) &&
                d.when === (when || d.when) &&
                d.type === (propertyType || d.type))
        }
        ));
    }
    
    useEffect(() => {
        // console.log(buttonClicked);
        !buttonClicked && setFilteredList(data);
    },[data,buttonClicked])
    
    
    return ( 
        <>
            <div className="search">
                    <div className="options">
                        <div  className="option">
                            <label htmlFor="location">Location</label>
                            <select name="location" id="location" value={location}
                                placeholder="Select Location"
                                onChange={(e) => { setLocation(e.target.value) }}>
                                <option value="">-- Select city -- </option>
                                <option value="Delhi"> Delhi</option>
                                <option value="Mumbai"> Mumbai</option>
                                <option value="Bangalore"> Bangalore</option>
                                <option value="Pune"> Pune</option>
                                <option value="Calcutta"> Calcutta</option>
                        </select>
                    </div>
                    <div className="option">
                        <label htmlFor="when">When</label>
                            <select name="when" id="when" value={when}
                                placeholder="Select Move-in Date"
                                onChange={(e) => { setWhen(e.target.value) }}>
                                <option value="">-- Select when to move in -- </option>
                            <option value="immediately"> immediately</option>
                            <option value="1 month"> 1 month</option>
                            <option value="2 months"> 2 months</option>
                            <option value="6 months"> 6 months</option>
                        </select>
                    </div>
                    <div className=" option">
                        <label htmlFor="price">Price</label>
                            <select name="price" id="price" value={price}
                                placeholder="Select Price Range"
                                onChange={(e) => { setPrice(e.target.value) }}>
                            <option value="">-- Select Price Range -- </option>
                            <option value="500"> 500</option>
                            <option value="2200"> 2200</option>
                            <option value="4000">4000</option>
                            <option value="5400"> 5400</option>
                            <option value="7000"> 7000</option>
                        </select>
                    </div>
                    <div className="option ">
                        <label htmlFor="property-type">Property type</label>
                            <select name="property-type" id="property-type" value={propertyType}
                                placeholder="select property type"
                                onChange={(e) => { setPropertyType(e.target.value) }}>
                            <option value="">-- Select property type -- </option>
                            <option value="A"> A</option>
                            <option value="B"> B</option>
                            <option value="C"> C</option>
                            <option value="D"> D</option>
                        </select>
                    </div>
                </div>

                <button onClick={handleClick} className="search-btn">Search</button>
            </div>
            <Content data={filteredList} />
        </>
     );
}
 
export default Search;