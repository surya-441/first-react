import './Tenzies.css';
import TenziesMain from '../componenets/TenziesMain.jsx';
import NavLinks from '../componenets/NavLinks.jsx';
function Tenzies() {
    return (
        <div className='tenzies'>
            <NavLinks />
            <TenziesMain />
        </div>
    );
}

export default Tenzies;