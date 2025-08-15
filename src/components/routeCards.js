import { useNavigate } from 'react-router-dom';
import './component-css/routeCards.css';

const labels = ['Education', 'Projects', 'Courses']
const desc = ['My Education Pathway', 'Projects that I have built for school and extra-curricular development.', 'Courses and Qualifications that I have attained.']
const routes = ['/education', '/projects', '/courses']

const RouteCards = () => {

    const navigate = useNavigate();
    return (
        <>
            {labels.map((label, index) => (
                <div className="notification" key={label} onClick={() => navigate(routes[index])}>
                    <div className="notiglow"></div>
                    <div className="notiborderglow"></div>
                    <div className="notititle">{labels[index]}</div>
                    <div className="notibody">{desc[index]}</div>
                </div>
            ))}
        </>
    )


}

export default RouteCards;