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
        <div className="relative flex flex-col items-center p-4 bg-transparent rounded-xl">
            <img className="mt-2 mb-4 rounded" src="https://via.placeholder.com/150" alt="Ingredient" />
            <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">{ingredient.name}</h3>
                <p className="bg-transparent macro-badge-purple">{ingredient.category}</p>
            </div>
            <div className="p-2 macros">
                <div className="flex gap-2">
                    <p className="bg-transparent macro-badge-green">P: {ingredient.proteins}g</p>
                    <p className="macro-badge-d-green bg-transparent">F: {ingredient.fats}g</p>
                    <p className="macro-badge-brown bg-transparent">C: {ingredient.carbs}g</p>
                </div>
                <div className="flex justify-center gap-2 pt-2">
                    <p className="macro-badge-purple bg-transparent">Fiber: {ingredient.fiber}g</p>
                    <p className="macro-badge-green bg-transparent">Calories: {ingredient.calories}kcal</p>
                </div>
            </div>
            <div className="w-full p-2 bg-transparent border-2 border-b-indigo-500 border-t-transparent border-r-transparent border-l-transparent">
                <p>Vitamins: {ingredient.vitamins?.join(", ")}</p>
                <p>Allergens: {ingredient.allergens?.join(", ")}</p>
            </div>
        </div>
    );
}

const demoIngredients = [
    {name: "Ingredient 1", category: "Vegetable", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 2", category: "Fruit", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 3", category: "Meat", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 4", category: "Seafood", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 5", category: "Grains", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 6", category: "Legumes", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 7", category: "Dairy", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 8", category: "Spices", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 1", category: "Vegetable", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 2", category: "Fruit", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 3", category: "Meat", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 4", category: "Seafood", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 5", category: "Grains", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 6", category: "Legumes", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 7", category: "Dairy", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
    {name: "Ingredient 8", category: "Spices", proteins: 50, fats: 20, carbs: 30, fiber: 10, calories: 100, vitamins: ["A", "B", "C"], allergens: ["Nuts", "Milk"]},
];

export default function Ingredients() {
    const [selectedVitamins, setSelectedVitamins] = useState([]);
    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const [filteredIngredients, setFilteredIngredients] = useState(demoIngredients);
    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");
    const [proteins, setProteins] = useState(0);
    const [fats, setFats] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fiber, setFiber] = useState(0);
    const [calories, setCalories] = useState(0);

    useEffect(() => {
        setFilteredIngredients(demoIngredients.filter(ingredient => {
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
            return ingredient.fiber >= fiber;
        })
        .filter(ingredient => {
            return ingredient.calories >= calories;
        })
        .filter(ingredient => {
            return selectedVitamins.every(vitamin => ingredient.vitamins.includes(vitamin));
        })
        .filter(ingredient => {
            return selectedAllergies.every(allergy => !ingredient.allergens.includes(allergy));
        })
        )
    }, [category, search, proteins, fats, carbs, fiber, calories, selectedVitamins, selectedAllergies]);

    return (
        <div className="flex flex-col">
        <Navbar />
        <main>
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
                        <p>Fiber</p>
                        <input onChange={(e) => {setFiber(e.target.value)}} type="number" min="0" defaultValue={0} />
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
                <Pagination itemsPerPage={100}>{
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