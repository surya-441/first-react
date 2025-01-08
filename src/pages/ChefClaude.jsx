import ChefClaudeNav from "../componenets/ChefClaudeNav";
import ChefClaudeMain from "../componenets/ChefClaudeMain";
import './ChefClaude.css';

function ChefClaude() {
    return (
        <div className="chef-claude">
            <ChefClaudeNav />
            <ChefClaudeMain />
        </div>
    );
}

export default ChefClaude;