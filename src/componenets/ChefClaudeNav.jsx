import NavLinks from "./NavLinks";
import chefLogo from "../assets/chef-claude.png";
import './ChefClaudeNav.css';

function ChefClaudeNav() {
    return (
        <header className="chef-claude-header">
            <img className="chef-logo" src={chefLogo} alt="Chef Claude Logo" />
            <span className="chef-logo-span">Chef Claude</span>
            <NavLinks />
        </header>
    );
}

export default ChefClaudeNav;