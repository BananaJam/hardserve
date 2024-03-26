import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MultiSelect from "../components/multiselect";
import Pagination from "../components/pagination";

import "./ingredients.css";

function IngredientCard({ingredient}){
    return (
        <div className="relative flex flex-col items-center px-2 py-4 bg-transparent bg-gray-200 cursor-pointer w-60 rounded-xl" onClick={() => window.location.href += "/" + ingredient.id}>
            <img className="mt-2 mb-4 rounded" src="https://via.placeholder.com/150" alt="Ingredient" />
            <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">{ingredient.name}</h3>
                <p className="bg-transparent macro-badge-purple">{ingredient.category}</p>
            </div>
            <div className="p-2 macros">
                <div className="flex justify-center gap-2">
                    <p className="bg-transparent macro-badge-green">P: {ingredient.proteins}g</p>
                    <p className="bg-transparent macro-badge-d-green">F: {ingredient.fats}g</p>
                    <p className="bg-transparent macro-badge-brown">C: {ingredient.carbs}g</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                    <p className="bg-transparent macro-badge-purple">Glycemic index: {ingredient.glycemic_index}</p>
                    <p className="bg-transparent macro-badge-green">Calories: {ingredient.calories}kcal</p>
                </div>
            </div>
            {/* <div className="w-full p-2 bg-transparent border-2 border-b-indigo-500 border-t-transparent border-r-transparent border-l-transparent">
                <p>Vitamins: {ingredient.vitamins?.join(", ")}</p>
                <p>Allergens: {ingredient.allergens?.join(", ")}</p>
            </div> */}
        </div>
    );
}

async function getIngredients(){
    const response = await fetch("http://localhost:8000/products/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    return data.products;
}

export default function Ingredients() {
    const [loadedIngredients, setLoadedIngredients] = useState();

    const [selectedVitamins, setSelectedVitamins] = useState([]);
    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const [filteredIngredients, setFilteredIngredients] = useState([]);
    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");
    const [proteins, setProteins] = useState(0);
    const [fats, setFats] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [glycemic, setGlycemic] = useState(0);
    const [calories, setCalories] = useState(0);

    useEffect(() => {
        getIngredients().then(data => {
            data = data.map((ingredient, index) => {
                ingredient.id = index+1;
                return ingredient;
            });
            setLoadedIngredients(data);
            console.log(data);
        });
    }, []);

    useEffect(() => {
        if (loadedIngredients === undefined){
            return;
        }
        setFilteredIngredients(
            loadedIngredients.filter(ingredient => {
            if(category === "all"){
                return true;
            }
            return ingredient.category.toLowerCase() === category.toLowerCase();
            })
            .filter(ingredient => {
                return ingredient.name.toLowerCase().includes(search.toLowerCase());
            })
            .filter(ingredient => {
                return ingredient.proteins >= proteins;
            })
            .filter(ingredient => {
                return ingredient.fats >= fats;
            })
            .filter(ingredient => {
                return ingredient.carbs >= carbs;
            })
            .filter(ingredient => {
                return ingredient.glycemic_index >= glycemic;
            })
            .filter(ingredient => {
                return ingredient.calories >= calories;
            })
            // .filter(ingredient => {
            //     return selectedVitamins.every(vitamin => ingredient.vitamins.includes(vitamin));
            // })
            // .filter(ingredient => {
            //     return selectedAllergies.every(allergy => !ingredient.allergens.includes(allergy));
            // })
        )
    }, [category, search, proteins, fats, carbs, glycemic, calories, selectedVitamins, selectedAllergies, loadedIngredients]);

    return (
        <div className="flex flex-col">
        <Navbar />
        <main className="flex flex-col items-center">
            <div className="search-bar">
                <input onChange={(e) => {setSearch(e.target.value)}} type="text" />
                <button><FontAwesomeIcon icon={ faMagnifyingGlass } /></button>
            </div>
            <div className="container h-fit">
                <div className="filters">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <div className="filter">
                        <p>Category</p>
                        <select onChange={(e) => {setCategory(e.target.value)}} defaultValue="all">
                            <option value="all">All</option>
                            <option value="vegetable">Vegetables</option>
                            <option value="fruit">Fruits</option>
                            <option value="meat">Meat</option>
                            <option value="seafood">Seafood</option>
                            <option value="grains">Grains</option>
                            <option value="legumes">Legumes</option>
                            <option value="dairy">Dairy</option>
                            <option value="spices">Spices</option>
                        </select>
                    </div>
                    <h4 className="text-lg">Nutrients</h4>
                    <div className="filter">
                        <p>Proteins</p>
                        <input onChange={(e) => {setProteins(e.target.value)}} type="number" min="0" defaultValue={0} />
                        g/kg
                    </div>
                    <div className="filter">
                        <p>Fats</p>
                        <input onChange={(e) => {setFats(e.target.value)}} type="number" min="0" defaultValue={0} />
                        g/kg
                    </div>
                    <div className="filter">
                        <p>Carbs</p>
                        <input onChange={(e) => {setCarbs(e.target.value)}} type="number" min="0" defaultValue={0} />
                        g/kg
                    </div>
                    <div className="filter">
                        <p>Glycemic index</p>
                        <input onChange={(e) => {setGlycemic(e.target.value)}} type="number" min="0" defaultValue={0} />
                        g/kg
                    </div>
                    <div className="filter">
                        <p>Calories</p>
                        <input onChange={(e) => {setCalories(e.target.value)}} type="number" min="0" defaultValue={0} />
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
                    <Pagination itemsPerPage={10}>{
                        filteredIngredients.map((ingredient, index) => (
                                <IngredientCard key={index} ingredient={ingredient} />
                            )
                        )
                    }
                    </Pagination>
            </div>
            <Footer />
        </main>
        </div>
    );
}