import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MultiSelect from "../components/multiselect";

import "./ingredients.css";

export default function Ingredients() {
    const [selectedVitamins, setSelectedVitamins] = useState([]);
    const [selectedAllergies, setSelectedAllergies] = useState([]);

    return (
        <>
        <Navbar />
        <main>
            <div className="search-bar">
                <input type="text" />
                <button><FontAwesomeIcon icon={ faMagnifyingGlass } /></button>
            </div>
            <div className="container">
                <div className="filters">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <div className="filter">
                        <p>Category</p>
                        <select defaultValue="all">
                            <option value="all">All</option>
                            <option>Vegetables</option>
                            <option>Fruits</option>
                            <option>Meat</option>
                            <option>Seafood</option>
                            <option>Grains</option>
                            <option>Legumes</option>
                            <option>Dairy</option>
                            <option>Spices</option>
                        </select>
                    </div>
                    <h4 className="text-lg">Nutrients</h4>
                    <div className="filter">
                        <p>Proteins</p>
                        <input type="number" min="0" defaultValue={0} />
                        g/kg
                    </div>
                    <div className="filter">
                        <p>Fats</p>
                        <input type="number" min="0" defaultValue={0} />
                        g/kg
                    </div>
                    <div className="filter">
                        <p>Carbs</p>
                        <input type="number" min="0" defaultValue={0} />
                        g/kg
                    </div>
                    <div className="filter">
                        <p>Fiber</p>
                        <input type="number" min="0" defaultValue={0} />
                        g/kg
                    </div>
                    <div className="filter">
                        <p>Calories</p>
                        <input type="number" min="0" defaultValue={0} />
                        kcal/kg
                    </div>
                    <div className="filter">
                        <p>Vitamins</p>
                        <MultiSelect className="rounded-full" placeholder="Select" prefix="Vitamin " options={[
                            "A", 
                            "B", 
                            "C", 
                            "D", 
                            "E", 
                            "K"]} selected={selectedVitamins} setSelected={setSelectedVitamins} />
                    </div>
                    <h4 className="text-lg">Allergies</h4>
                    <div className="filter">
                        <p>Allergens</p>
                        <MultiSelect className="rounded-full" placeholder="Select" options={[
                            "Nuts", 
                            "Milk", 
                            "Fish", 
                            "Meats", 
                            "Soy", 
                            "Citrus"]} selected={selectedAllergies} setSelected={setSelectedAllergies} />
                    </div>
                </div>
                <div className="ingredients">
                    some ingredients
                </div>
            </div>
        </main>
        <Footer />
        </>
    );
}