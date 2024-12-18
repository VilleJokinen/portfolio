import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio/cv">CV</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio/cardgame">Card Game</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;