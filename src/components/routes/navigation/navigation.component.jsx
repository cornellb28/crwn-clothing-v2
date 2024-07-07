import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';


const Navigation = () => {
    return (
        <>
            <div className="nav-bar">
                <div>
                <Link className="logo-container" to="/">Logo</Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">Shop</Link>
                    <Link className="nav-link" to="/auth">Sign In</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;