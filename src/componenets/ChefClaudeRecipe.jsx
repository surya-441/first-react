function ChefClaudeRecipe(props) {
    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <p>{props.recipe}</p>
            </article>
        </section> 
    );
}

export default ChefClaudeRecipe;