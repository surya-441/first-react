import './ChefClaudeMain.css';

function ChefClaudeMain() {
    return (
        <main className="chef-claude-main">
            <form className="add-ingredient-form">
                <input 
                    aria-label="Add ingredient" 
                    placeholder="e.g. oregano"
                    type="text"
                />
                <button>Add ingredient</button>
            </form>
        </main>
    );
}

export default ChefClaudeMain;