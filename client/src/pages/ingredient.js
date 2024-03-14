import { useParams } from "react-router-dom";
import "./ingredient.css";

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

export default function Ingredient() {
    const { id: ingredientId } = useParams();
    const ingredient = demoIngredients[ingredientId];
    return (
        <div className="relative flex flex-row items-center p-4 mx-48 my-16 bg-white border-2 shadow-xl min-w-fit rounded-xl">
            <img className="m-2 rounded h-96" src="https://via.placeholder.com/150" alt="Ingredient" />
            <div className="flex flex-col items-center justify-around w-full h-96">
                <div className="flex gap-2">
                    <h3 className="text-5xl font-bold">{ingredient.name}</h3>
                    <p className="bg-orange-500  macro-badge-big">{ingredient.category}</p>
                </div>
            
                <div className="p-2 macros">
                    <div className="flex gap-2">
                        <p className="bg-green-400 macro-badge-big">P: {ingredient.proteins}g</p>
                        <p className="macro-badge-big bg-sky-400">F: {ingredient.fats}g</p>
                        <p className="macro-badge-big bg-amber-300">C: {ingredient.carbs}g</p>
                    </div>
                    <div className="flex justify-center gap-2 pt-2">
                        <p className="macro-badge-big bg-violet-400">Fiber: {ingredient.fiber}g</p>
                        <p className="macro-badge-big bg-fuchsia-400">Calories: {ingredient.calories}kcal</p>
                    </div>
                </div>
                <div className="w-full p-2 bg-gray-200 rounded-lg shadow-inner max-w-96">
                    <p>Vitamins: {ingredient.vitamins?.join(", ")}</p>
                    <p>Allergens: {ingredient.allergens?.join(", ")}</p>
                </div>
            </div>
        </div>
    )
}