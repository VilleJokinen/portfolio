
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-sm bg-light navbar-light"> 
        <div class="container-fluid">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link class="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/portfolio/cv">CV</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/portfolio/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Layout;
