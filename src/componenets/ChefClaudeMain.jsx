import './ChefClaudeMain.css';
import { useState, useRef, useEffect } from 'react';
import ChefClaudeRecipe from './ChefClaudeRecipe';
import ChefClaudeIngredientsList from './ChefClaudeIngredientsList';
import { getRecipeFromMistral } from '../ai';

function ChefClaudeMain() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)

    function addIngredient(formData) {
        setIngredients(prevIngredients => [...prevIngredients, formData.get("ingredient")])
    }
    async function getRecipe() {
        const recipeMD = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMD);
    }
    useEffect(() => {
        if(recipe !== "" && recipeSection.current != null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe]);

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
            {ingredients.length > 0 && <ChefClaudeIngredientsList ingredients={ingredients} getRecipe={getRecipe} ref={recipeSection} />}
            {recipe.length > 0 && <ChefClaudeRecipe recipe={recipe}/>}
        </main>
    );
}

export default ChefClaudeMain;