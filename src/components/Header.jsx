import { NavLink } from "react-router-dom";
const Header = () =>{
    return(
        <header className="bg-dark text-light">
            <div className="container py-3">
                <h1 className="display-2">Shopie</h1>
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/"> 
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;