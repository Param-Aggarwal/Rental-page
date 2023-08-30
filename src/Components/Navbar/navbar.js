import './navbar.css';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h3 className="company-logo">Company Name</h3>
            <ul className="menus">
                <li>Rent</li>
                <li>Buy</li>
                <li>Sell</li>
                <li className="manage-property">Manage Property</li>
                <li className="resources">Resources</li>
            </ul>

            <div className="right">
                <p className="login">Login</p>
                <p className="signup">Signup</p>
            </div>
        </div>
    );
}
export default Navbar;
