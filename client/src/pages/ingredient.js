import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faScaleUnbalanced } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import "./ingredient.css";

import Nav from "../components/navbar";

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



function RecipeCard({recipe}) {
    return (
        <div className="flex flex-col items-center gap-2 p-2 bg-gray-200 rounded-lg shadow-lg">
            <img className="rounded-lg" src={recipe.imgSrc} alt="Recipe" />
            <div>
                <h4 className="text-lg font-bold">{recipe.name}</h4>
                <p>{recipe.description}</p>
            </div>
        </div>
    )
}

function IngredientCard({product}) {
    return (
        <div className="flex flex-col items-center gap-2 p-2 bg-gray-200 rounded-lg shadow-lg">
            <img className="rounded-lg" src={product.imgSrc} alt="Product" />
            <div>
                <h4 className="text-lg font-bold">{product.name}</h4>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default function Ingredient() {
    const { id: ingredientId } = useParams();
    const ingredient = demoIngredients[ingredientId];
    return (
        <>
        <Nav />
        <div className="flex justify-center ">
            <div className="relative flex flex-col items-center my-16 bg-white border-2 shadow-xl w-[80vw] min-w-fit rounded-xl">
                <div className="flex flex-col items-center w-full md:items-start md:flex-row h-fit">
                    <img className="object-contain m-2 rounded h-96" src="https://via.placeholder.com/150" alt="Ingredient" />
                    <div className="flex flex-col items-center justify-around w-full h-96">
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-5xl font-bold">{ingredient.name}</h3>
                                <p className="bg-orange-500 macro-badge-big">{ingredient.category}</p>
                            </div>
                        
                            <div className="p-2 macros">
                            <div className="flex justify-center gap-2 pt-2">
                                    <p className="macro-badge-big bg-violet-400">Fiber: {ingredient.fiber}g</p>
                                    <p className="macro-badge-big bg-fuchsia-400">Calories: {ingredient.calories}kcal</p>
                                </div>
                                <div className="flex justify-center gap-2 pt-2">
                                    <p className="bg-green-400 macro-badge-big">P: {ingredient.proteins}g</p>
                                    <p className="macro-badge-big bg-sky-400">F: {ingredient.fats}g</p>
                                    <p className="macro-badge-big bg-amber-300">C: {ingredient.carbs}g</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-2 bg-gray-200 rounded-lg shadow-inner max-w-96">
                            <h3 className="text-2xl font-bold text-center">Nutritional Information</h3>
                            <p>Product description</p>
                            <p>Vitamins: {ingredient.vitamins?.join(", ")}</p>
                            <p>Allergens: {ingredient.allergens?.join(", ")}</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-4 p-4 w-min md:flex-col">
                        <FontAwesomeIcon className="h-6 hover:text-rose-500 hover:cursor-pointer" icon={faBookmark} />
                        <FontAwesomeIcon className="h-6 hover:text-green-500 hover:cursor-pointer" icon={faScaleUnbalanced} />
                    </div>
                </div>

                <div className="p-4 w-max">
                    <h3 className="mb-4 text-2xl font-bold text-center">Recipes with this ingredient</h3>
                    <div className="flex flex-row flex-wrap gap-2">
                    {RecipeCard({recipe: {name: "Recipe 1", description: "Description 1", imgSrc: "https://via.placeholder.com/150"}})}
                    {RecipeCard({recipe: {name: "Recipe 2", description: "Description 2", imgSrc: "https://via.placeholder.com/150"}})}
                    {RecipeCard({recipe: {name: "Recipe 3", description: "Description 3", imgSrc: "https://via.placeholder.com/150"}})}
                    </div>
                </div>

                <div className="p-4 w-max">
                    <h3 className="mb-4 text-2xl font-bold text-center">Similar ingredients</h3>
                    <div className="flex flex-row flex-wrap gap-2">
                    {IngredientCard({product: {name: "Product 1", description: "Description 1", imgSrc: "https://via.placeholder.com/150"}})}
                    {IngredientCard({product: {name: "Product 2", description: "Description 2", imgSrc: "https://via.placeholder.com/150"}})}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}