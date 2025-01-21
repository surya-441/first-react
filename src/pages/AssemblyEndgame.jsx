import AssemblyEndgameHeader from '../componenets/AssemblyEndgameHeader';
import AssemblyEndgameMain from '../componenets/AssemblyEndgameMain';
import './AssemblyEndgame.css';

function AssemblyEndgame() {
    return (
        <div className="assembly-endgame">
            <AssemblyEndgameHeader />
            <AssemblyEndgameMain />
        </div>
    );
}

export default AssemblyEndgame;