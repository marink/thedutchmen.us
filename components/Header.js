

export default function Header() {

    function toggleFunction() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }    

    return (
        <header className="w3-top">
            <nav className="w3-bar" id="myNavbar">
                <a className="w3-bar-item link-button w3-hover-black w3-hide-medium w3-hide-large w3-right" 
                        href="#" onClick={toggleFunction} title="Toggle Navigation Menu">
                    <i className="fa fa-bars"></i>
                </a>
                <a href="#home" className="w3-bar-item link-button">HOME</a>
                <a href="#about" className="w3-bar-item link-button w3-hide-small"><i className="fa fa-user"></i> ABOUT</a>
                <a href="#products" className="w3-bar-item link-button w3-hide-small"><i className="fa fa-shopping-cart"></i> PRODUCTS</a>
                <a href="#mission-statement" className="w3-bar-item link-button w3-hide-small w3-hide-large"><i className="fa fa-globe"></i> MISSION</a>
                <a href="#mission-statement" className="w3-bar-item link-button w3-hide-small w3-hide-medium"><i className="fa fa-globe"></i> MISSION STATEMENT</a>
                <a href="#contact" className="w3-bar-item link-button w3-hide-small"><i className="fa fa-envelope"></i> CONTACT</a>
                <a href="#" className="w3-bar-item link-button w3-hide-small w3-right w3-hover-red"></a>
            </nav>

            {/* Navbar on small screens */}
            <nav id="navDemo" className="w3-bar-block bg-white w3-hide w3-hide-large w3-hide-medium">
                <a href="#about" className="w3-bar-item link-button" onClick={toggleFunction}>ABOUT</a>
                <a href="#products" className="w3-bar-item link-button" onClick={toggleFunction}>PRODUCTS</a>
                <a href="#mission-statement" className="w3-bar-item link-button" onClick={toggleFunction}>MISSION STATEMENT</a>
                <a href="#contact" className="w3-bar-item link-button" onClick={toggleFunction}>CONTACT</a>
            </nav>
        </header>
    )
}