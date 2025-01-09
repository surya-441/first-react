import './ChefClaudeMain.css';
import { useState } from 'react';

function ChefClaudeMain() {
    const [ingredients , setIngredients] = useState([]);
    const ingredientsLi = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>);
    function addIngredient(formData) {
        setIngredients(prevIngredients => [...prevIngredients, formData.get("ingredient")])
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
            {   ingredients.length > 0 &&
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list">{ingredientsLi}</ul>
                    {   ingredients.length > 3 && 
                        <div className='get-recipe-container'>
                            <div>
                                <h3>Ready for a recipe?</h3>    
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button>Get a Recipe</button>
                        </div> 
                    }
                </section>
            }
        </main>
    );
}

export default ChefClaudeMain;