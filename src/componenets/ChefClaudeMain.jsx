import './ChefClaudeMain.css';
import { useState } from 'react';

function ChefClaudeMain() {
    const [ingredients , setIngredients] = useState([]);
    const ingredientsLi = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>);
    function handleAddIngredient(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        setIngredients(prevIngredients => [...prevIngredients, formData.get("ingredient")])
    }
    return (
        <main className="chef-claude-main">
            <form onSubmit={handleAddIngredient} className="add-ingredient-form">
                <input 
                    aria-label="Add ingredient" 
                    placeholder="e.g. oregano"
                    type="text"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsLi}
            </ul>
        </main>
    );
}

export default ChefClaudeMain;