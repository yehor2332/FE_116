import { Link } from 'react-router-dom';
import './_404.scss'
function NotFoundPage () {
    return (
        <div className="page-404">
            <h1>Oops!</h1>
            <h2>404 - The Page can't be found</h2>
            <Link to={'/'}>Back to Home Page</Link>
        </div>
    )
}

export default NotFoundPage;