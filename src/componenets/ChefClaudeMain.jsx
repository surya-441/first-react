import './ChefClaudeMain.css';
import { useState } from 'react';
import ChefClaudeRecipe from './ChefClaudeRecipe';
import ChefClaudeIngredientsList from './ChefClaudeIngredientsList';
import { getRecipeFromMistral } from '../ai';

function ChefClaudeMain() {
    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);
    const [recipe, setRecipe] = useState("")
    function addIngredient(formData) {
        setIngredients(prevIngredients => [...prevIngredients, formData.get("ingredient")])
    }
    function getRecipe() {
        setRecipe(getRecipeFromMistral(ingredients));
        setRecipeShown(prev => !prev);
    }
    return (
        <main className="chef-claude-main">
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    aria-label="Add ingredient" 
                    placeholder="e.g. oregano"
                    type="text"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <ChefClaudeIngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}
            {recipeShown && <ChefClaudeRecipe recipe={recipe}/>}
        </main>
    );
}

export default ChefClaudeMain;