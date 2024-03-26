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
        <div className="flex flex-col gap-2 p-2 ">
            <img className="rounded-lg" src={recipe.imgSrc} alt="Recipe" />
            <div>
                <h4 className="text-lg font-medium text-gray-600">{recipe.name}</h4>
                <p>{recipe.description}</p>
                <button type="button" class="bg-green-300 hover:bg-green-200 text-green-900 font-medium py-2 px-4 rounded-full text-xs">VIEW ALL</button>
            </div>
        </div>
    )
}

function IngredientCard({product}) {
    return (
        <div className="flex flex-col gap-2 p-2">
            <img className="rounded-lg" src={product.imgSrc} alt="Product" />
            <div>
                <h4 className="text-lg font-medium text-gray-600">{product.name}</h4>
                <p>{product.description}</p>
                <button type="button" class="bg-green-300 hover:bg-green-200 text-green-900 font-medium py-2 px-4 rounded-full text-xs">VIEW ALL</button>
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
        <div className="flex justify-center bg-[#fefdfd]">
            <div className="relative flex flex-col items-center ">
                <div className="flex flex-col items-center w-full md:items-start md:flex-row h-fit bg-white border-2 my-16 shadow-sm w-[80vw] min-w-fit rounded-xl p-10 gap-10">
                    <img className="object-contain m-2 rounded-xl h-96" src="https://via.placeholder.com/150" alt="Ingredient" />
                    <div className="flex flex-col items-center justify-around w-full h-96">
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-5xl text-gray-600 font-medium">{ingredient.name}</h3>
                                <p className="inline-flex items-center rounded-md bg-green-100 px-4 py-2 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-50">{ingredient.category}</p>
                            </div>
                            
                            <div className="p-2 macros">
                            <div className="flex justify-center gap-2 pt-2">
                                    <p className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-100">Fiber: {ingredient.fiber}g</p>
                                    <p className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-100">Calories: {ingredient.calories}kcal</p>
                                </div>
                                <div className="flex justify-center gap-2 pt-2">
                                    <p className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-100">P: {ingredient.proteins}g</p>
                                    <p className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-100">F: {ingredient.fats}g</p>
                                    <p className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-100">C: {ingredient.carbs}g</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-4 max-w-96">
                            <h3 className="text-2xl text-gray-600 font-medium">Nutritional Information</h3>
                            <p>Product description</p>
                            <p>Vitamins: {ingredient.vitamins?.join(", ")}</p>
                            <p>Allergens: {ingredient.allergens?.join(", ")}</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-right gap-4 p-4 w-max md:flex-col">
                        <FontAwesomeIcon className="h-8 hover:text-rose-500 hover:cursor-pointer" icon={faBookmark} />
                        <FontAwesomeIcon className="h-8 hover:text-green-500 hover:cursor-pointer" icon={faScaleUnbalanced} />
                    </div>
                </div>

                <div className="flex flex-col items-center p-10 gap-10">
                    <div className="p-4 w-max flex flex-col gap-2 p-5 bg-white rounded-lg shadow-sm">
                        <h3 className="mb-4 text-2xl text-gray-600 font-medium">Recipes with this ingredient</h3>
                        <div className="flex flex-row flex-wrap gap-2">
                        {RecipeCard({recipe: {name: "Recipe 1", description: "Description 1", imgSrc: "https://via.placeholder.com/150"}})}
                        {RecipeCard({recipe: {name: "Recipe 2", description: "Description 2", imgSrc: "https://via.placeholder.com/150"}})}
                        {RecipeCard({recipe: {name: "Recipe 3", description: "Description 3", imgSrc: "https://via.placeholder.com/150"}})}
                        </div>
                    </div>

                    <div className="p-4 w-max flex flex-col gap-2 p-5 bg-white  rounded-lg shadow-sm">
                        <h3 className="mb-4 text-2xl font-medium text-gray-600">Similar ingredients</h3>
                        <div className="flex flex-row flex-wrap gap-2">
                        {IngredientCard({product: {name: "Product 1", description: "Description 1", imgSrc: "https://via.placeholder.com/150"}})}
                        {IngredientCard({product: {name: "Product 2", description: "Description 2", imgSrc: "https://via.placeholder.com/150"}})}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
    )
}