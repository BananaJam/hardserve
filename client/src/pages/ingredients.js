import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "./ingredients.css";

export default function Ingredients() {
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
                    <h2>Filters</h2>
                    <div className="filter">
                        <p>Category</p>
                        <select>
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
                    <h4>Nutrients</h4>
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
                        <select>
                            <option>Vitamin A</option>
                            <option>Vitamin B</option>
                            <option>Vitamin C</option>
                            <option>Vitamin D</option>
                            <option>Vitamin E</option>
                            <option>Vitamin K</option>
                        </select>
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