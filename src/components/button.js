import './component-css/button.css';
import { useNavigate } from 'react-router-dom';


const Button = () => {
    const navigate = useNavigate();
    return (
        <button className="pushable" onClick={()=> navigate('/portfolio')}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">Go Back</span>
        </button>
    )
}

export default Button;

