import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faScaleUnbalanced } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ingredient.css";

import Nav from "../components/navbar";

async function getIngredient(ingredientId){
    const response = await fetch("http://localhost:8000/products/" + ingredientId + "/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    console.log(data)
    let result = data.product_nutriens[0].product;
    result.id = ingredientId;
    result.nutrients = data.product_nutriens.map(record => {
        return {name: record.nutrient.name, units: record.nutrient.unit, amount: record.amount};
    })
    return result;
}



function RecipeCard({recipe}) {
    return (
        <div className="flex flex-col gap-2 p-2 ">
            <img className="rounded-lg" src={recipe.imgSrc} alt="Recipe" />
            <div>
                <h4 className="text-lg font-medium text-gray-600">{recipe.name}</h4>
                <p>{recipe.description}</p>
                <button type="button" className="px-4 py-2 text-xs font-medium text-green-900 bg-green-300 rounded-full hover:bg-green-200">VIEW ALL</button>
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
                <button type="button" className="px-4 py-2 text-xs font-medium text-green-900 bg-green-300 rounded-full hover:bg-green-200">VIEW ALL</button>
            </div>
        </div>
    )
}

export default function Ingredient() {
    const { id: ingredientId } = useParams();
    const [ingredient, setIngredient] = useState()

    useEffect(() => {
        if (ingredientId === undefined) return;
        getIngredient(ingredientId).then(data => {
            setIngredient(data);
            console.log(data);
        }
        );
    }, [ingredientId])

    if (ingredient === undefined) return <div>Loading...</div>
    else return (
        <>
        <Nav />
        <div className="flex justify-center bg-[#fefdfd]">
            <div className="relative flex flex-col items-center ">
                <div className="flex flex-col items-center md:items-start md:flex-row h-fit bg-white border-2 my-16 shadow-sm w-[80vw] min-w-fit rounded-xl p-10 gap-10">
                    <img className="object-contain m-2 rounded-xl h-96" src="https://via.placeholder.com/150" alt="Ingredient" />
                    <div className="flex flex-col items-center justify-around w-full h-96">
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-5xl font-medium text-gray-600">{ingredient.name}</h3>
                                <p className="inline-flex items-center px-4 py-2 text-xs font-medium text-green-700 bg-green-100 rounded-md ring-1 ring-inset ring-green-50">{ingredient.category}</p>
                            </div>
                            
                            <div className="p-2 macros">
                            <div className="flex justify-center gap-2 pt-2">
                                    <p className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-600 bg-gray-100 rounded-md ring-1 ring-inset ring-gray-100">Fiber: {ingredient.fiber}g</p>
                                    <p className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-600 bg-gray-100 rounded-md ring-1 ring-inset ring-gray-100">Calories: {ingredient.calories}kcal</p>
                                </div>
                                <div className="flex justify-center gap-2 pt-2">
                                    <p className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-600 bg-gray-100 rounded-md ring-1 ring-inset ring-gray-100">P: {ingredient.proteins}g</p>
                                    <p className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-600 bg-gray-100 rounded-md ring-1 ring-inset ring-gray-100">F: {ingredient.fats}g</p>
                                    <p className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-600 bg-gray-100 rounded-md ring-1 ring-inset ring-gray-100">C: {ingredient.carbs}g</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-56 p-4 overflow-y-scroll max-w-96">
                            <h3 className="text-2xl font-medium text-gray-600">Nutritional Information</h3>
                            <h4>Product description</h4>
                            <br />
                            {ingredient.nutrients.map(nutrient => {
                                return (
                                    <div className="flex flex-row justify-between">
                                        <p>{nutrient.name}</p>
                                        <p>{nutrient.amount} {nutrient.units}</p>
                                    </div>
                                )

                                })
                            }
                        </div>
                    </div>

                    <div className="flex flex-row gap-4 p-4 items-right w-max md:flex-col">
                        <FontAwesomeIcon className="h-8 hover:text-rose-500 hover:cursor-pointer" icon={faBookmark} />
                        <FontAwesomeIcon className="h-8 hover:text-green-500 hover:cursor-pointer" icon={faScaleUnbalanced} />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-10 p-10">
                    <div className="flex flex-col gap-2 p-5 bg-white rounded-lg shadow-sm w-max">
                        <h3 className="mb-4 text-2xl font-medium text-gray-600">Recipes with this ingredient</h3>
                        <div className="flex flex-row flex-wrap gap-2">
                        {RecipeCard({recipe: {name: "Recipe 1", description: "Description 1", imgSrc: "https://via.placeholder.com/150"}})}
                        {RecipeCard({recipe: {name: "Recipe 2", description: "Description 2", imgSrc: "https://via.placeholder.com/150"}})}
                        {RecipeCard({recipe: {name: "Recipe 3", description: "Description 3", imgSrc: "https://via.placeholder.com/150"}})}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 p-5 bg-white rounded-lg shadow-sm w-max">
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