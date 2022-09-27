import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function ConfirmationDialogRaw(props) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {    
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            TransitionProps={{ onEntering: handleEntering }}
            open={open}
            {...other}
        >
            <DialogTitle>Confirm Your Age</DialogTitle>
            <DialogContent dividers>
                <h3 style={{ color: "#ea6f1f" }}>You must be 21 years of age or older to view this site.</h3>
            </DialogContent>
            <DialogActions >
                <Button variant="contained" autoFocus onClick={handleOk}>I AM 21 OR OLDER</Button>
                <Button variant="outlined" onClick={handleCancel}>
                    Exit
                </Button>
            </DialogActions>
        </Dialog>
    );
}

ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};


export default function Home() {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Dione');

    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);

    
    function signup() { 
        window.open(`mailto:wendiacanovaldez@gmail.com?subject=%20&body=${inputs.message}%20Email:%20${inputs.email}`)
      }

    const handleClose = (newValue) => {
        setOpen(false);

        console.log("New Value:", newValue)
        if (newValue) {
            setValue(newValue);
        } else {
            location.href = "https://masscannabiscontrol.com/parents/"
        }
    };

        
    const [scrolling, setScrolling] = React.useState(false);
    const [scrollTop, setScrollTop] = React.useState(0);

    /*
    // Modal Image Gallery
    function onClick(element) {
      document.getElementById("img01").src = element.src;
      document.getElementById("modal01").style.display = "block";
      var captionText = document.getElementById("caption");
      captionText.innerHTML = element.alt;
    }
  
    // Change style of navbar on scroll
    window.onscroll = function() {myFunction()};
    function myFunction() {

    }
  
  */
    var navbar = document.getElementById("myNavbar");
    if (navbar) {
        if (scrollTop > 100) {
            navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " bg-white";
        } else {
            navbar.className = navbar.className.replace(" w3-card w3-animate-top bg-white", "");
        }
    }

    React.useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);
    // Used to toggle the menu on small screens when clicking on the menu button
  
    function toggleFunction() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }    

    return (
        <React.Fragment>
            <Head>
                <title>TheDutchmen LLC. - Premium Cannabis Cultivator</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/** Navbar (sit on top) */}
            <header className="w3-top">
                <nav className="w3-bar" id="myNavbar">
                    <a className="w3-bar-item link-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="#" onClick={toggleFunction} title="Toggle Navigation Menu">
                        <i className="fa fa-bars"></i>
                    </a>
                    <a href="#home" className="w3-bar-item link-button">HOME</a>
                    <a href="#about" className="w3-bar-item link-button w3-hide-small"><i className="fa fa-user"></i> ABOUT</a>
                    <a href="#products" className="w3-bar-item link-button w3-hide-small"><i className="fa fa-shopping-cart"></i> PRODUCTS</a>
                    <a href="#" className="w3-bar-item link-button w3-hide-small w3-right w3-hover-red"></a>
                    <a href="#mission-statement" className="w3-bar-item link-button w3-hide-small"><i className="fa fa-globe"></i> MISSION STATEMENT</a>
                </nav>

                {/* Navbar on small screens */}
                <nav id="navDemo" className="w3-bar-block bg-white w3-hide w3-hide-large w3-hide-medium">
                    <a href="#about" className="w3-bar-item link-button" onClick={toggleFunction}>ABOUT</a>
                    <a href="#products" className="w3-bar-item link-button" onClick={toggleFunction}>PRODUCTS</a>
                    <a href="#mission-statement" className="w3-bar-item link-button" onClick={toggleFunction}>MISSION STATEMENT</a>
                </nav>
            </header>

            <main className={styles.container}>

                {/* First Parallax Image with Logo Text */}
                <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
                    <div className="w3-display-middle" style={{ whiteSpace: "nowrap", lineHeight: 3 }}>
                        <span className="w3-center w3-padding-large w3-xlarge w3-wide w3-animate-opacity">
                            <img src="logo-gray.png" width="100%"></img>
                        </span>
                    </div>
                </div>

                {/* Container (About Section) */}
                <section className="w3-content w3-container w3-padding-64" id="about">
                    <h3 className="w3-center">ABOUT US</h3>
                    <h2 className="w3-center"> <em>Welcome to <a style={{ color: "#ea6f1f" }} href="https://thedutchmen.us">The Dutchmen Website!</a></em></h2>
                    <div className="w3-row">
                        <div className="w3-col m4 w3-center w3-padding-large">
                            <img src="images/about-us.jpg" 
                                className="w3-round w3-image w3-hover-opacity-off" alt="Production" width="400" />
                        </div>

                        {/* Hide this text on small devices */}
                        <div className="w3-col m8 w3-padding-large">
                            <p>
                                We are The Dutchmen, a recreational cannabis cultivation company, offering a premium quality product and a
                                pleasant customer experience. With roots in the Netherlands, a pioneering country for legal cannabis use, we are well-versed in this industry.
                                We use our knowledge, expertise and plant science to grow and carefully curate a high-level product. Based in Massachusetts, USA,
                                we are fully licensed by the state and are excited to connect with you to educate and support you on your cannabis journey.
                            </p>
                        </div>
                    </div>                    

                    <p className="w3-row hr-divider"><hr /></p>
                    
                    <h2 className="w3-center">Our values</h2>
                    <div className="w3-row">
                        As the legalization of the cannabis industry accelerates, we see more and more corporations jumping on the bandwagon.
                        We are everyday people and believe that the everyday person with a love for the cannabis community should have access
                        to premium quality cannabis and the best knowledge. Plus, the opportunity to join and profit from the industry.
                    </div>

                    <p className="w3-row hr-divider"><hr /></p>

                    <h2 className="w3-center">Who are we?</h2>
                    <div className="w3-row">
                        <div className="w3-third m4 w3-margin-bottom">
                            <div className="w3-card-4">
                                <img src="/images/Wendi.jpg" alt="Wendi Cano" style={{width: "100%"}} />
                            </div>
                        </div>       
                        {/* Hide this text on small devices */}
                        <div className="w3-col m8 w3-padding-large">                    
                            <h3>Jose A. Cano Valdez</h3>
                            <p className="w3-opacity">CEO &amp; Founder</p>
                            <p>
                                Jose Valdez, the founder of The Dutchmen, was born in the Dominican Republic and raised
                                in the Netherlands, where he lived the majority of his life before migrating to the
                                United States in 2015. While living in the Netherlands, Jose gained a practical nursing
                                degree and managed and operated a cannabis dispensary for over seven years. His extensive
                                experience in the industry brings unparalleled vision to this field from a world-renowned market.
                                Jose is a father of three beautiful children, and in his spare time, he loves to play and watch
                                soccer and travel.
                            </p>
                            <p>
                                <a className="w3-light-grey w3-block contact-btn"
                                        href="https://www.linkedin.com/in/wendi-cano-valdez-b2b6b1240/">
                                    Contact
                                </a>
                            </p>
                        </div>
                    </div>           

                    <p></p>

                    <div className="w3-row">
                        <div className="w3-col m8 w3-padding-large">                    
                            <h3>Daniela Stringa</h3>
                            <p className="w3-opacity">CFO &amp; CoFounder</p>
                            <p>
                                Daniela Stringa, the Co-Founder and Chief Financial Officer of The Dutchmen, has extensive experience in the banking industry.
                                Her knowledge accumulated over 15 years in various roles and opportunities exposed her to many complex projects.
                                In her current role as a Wealth Management Specialist, Daniela works with clients in multiple areas of finance,
                                retirement and estate planning. As a mother to a wonderful daughter, Daniela loves spending her free time with
                                her family, reading, traveling, and cooking.
                            </p>
                            <p>
                                <a className="w3-light-grey w3-block contact-btn"
                                        href="https://www.linkedin.com/in/daniela-stringa-22033368/">
                                    Contact
                                </a>
                            </p>
                        </div>
                        <div className="w3-third w3-margin-bottom">
                            <div className="w3-card-4">
                                <img src="/images/Daniela.jpg" alt="Wendi Cano" style={{width: "100%"}} />
                            </div>
                        </div>
                    </div> 
                </section>

                {/* Second Parallax Image with Portfolio Text */}
                <div className="bgimg-2 w3-display-container w3-opacity-min">
                    <div className="w3-display-middle">
                        <span className="w3-xxlarge w3-text-white w3-wide">OUR PRODUCTS</span>
                    </div>
                </div>

                <section className="w3-content w3-container w3-padding-64" id="products">

                    <h2 className="w3-center">Our Products</h2>
                    <div className="w3-row">
                        Our products are currently in development.
                        We have access to the well known strains.
                    </div>


                    <p className="w3-row hr-divider"><hr /></p>
            
                    <div className="w3-row">
                        <div className="w3-col m3 w3-center w3-padding-large">
                            <img src="images/products.jpg" 
                                className="w3-round w3-image w3-hover-opacity-off" alt="Production" width="320" />
                        </div>       
                        
                        <div className="w3-col m9 w3-padding-large">                    
                            
                            <h2>Exclusive strains</h2>                                            
                            <p>
                                Sign up for our newsletter to keep updated on the launch 
                                and availability of our products.
                            </p>
                        </div>
                    </div>           


                    <p className="w3-row hr-divider"><hr /></p>
            
                    <div className="w3-row">
                        <div className="w3-col m7 w3-padding-large">
                            <h2>Become an investor</h2>                                            
                            <p>
                                Looking for an affordable investment opportunity in the cannabis industry?
                                We offer a package that lets you invest in our company. We gather the capital
                                required to grow the business so it can reach its potential, and you get in on
                                an exciting industry with a trusted team.
                            </p>
                            <ul>
                                <li>How does it work?</li>
                                <li>What do you get in return? </li>
                            </ul>
                        </div>   

                        <div className="w3-col m5 w3-center w3-padding-large">
                            <img src="images/investors.jpg" 
                                className="w3-round w3-image w3-hover-opacity-off" alt="Production" width="450" />
                        </div>  
                    </div>                  
                </section>
                   
                
                {/* Third Parallax Image with Portfolio Text */}
                <div className="bgimg-3 w3-display-container w3-opacity-min">
                    <div className="w3-display-middle">
                    <span className="w3-xxlarge w3-text-black w3-wide">MISSION STATEMENT</span>
                    </div>
                </div>

                <section className="w3-content w3-container w3-padding-64" id="mission-statement">
                    <h1 className="w3-center">Our Mission Statement</h1>
                    <p className="w3-row">
                        The Dutchmen LLC. will work tirelessly to deliver a premium quality product and an exceptional customer experience. Raising cannabis industry
                        standards our uncompromising work ethic, morals and principles are the foundation in which we commit to better serve our community.
                    </p>
                </section>


                <section className="w3-content w3-container w3-padding-64" id="contact">
                    
                    <h1 className="w3-center">Interested?</h1>

                    <div className="w3-row w3-padding-32 w3-section">
                        <div className="w3-col m4 w3-container">
                            <img src="./images/amsterdam-downtown.jpg" className="w3-image w3-round" style={{width: "100%"}} />
                            <p>
                                Curious about what we are doing behind the scenes?
                                Fill out the contact form for more information, or to sign up for our newsletter.
                            </p>
                        </div>
                        <div className="w3-col m8 w3-panel">
                            <form onSubmit={handleSubmit}>
                                <div className="w3-row-padding" style={{margin: "0 -16px 8px -16px"}}   >
                                <div className="w3-half">   
                                    <input className="w3-input w3-border" type="text" placeholder="Name" 
                                        name="name"
                                        onChange={handleInputChange} value={inputs.name} required />
                                </div>
                                <div className="w3-half">
                                    <input className="w3-input w3-border" type="text" placeholder="Email" 
                                        name="email"
                                        onChange={handleInputChange} value={inputs.email} required />
                                </div>
                                </div>
                                <textarea rows="4" className="w3-input w3-border" type="text" placeholder="Message"
                                    name="message"
                                    onChange={handleInputChange} value={inputs.message} />
                                <button className="w3-button w3-black w3-right w3-section" type="submit">
                                    <i className="fa fa-paper-plane"></i> SEND MESSAGE
                                </button>
                        </form>
                        </div>
                    </div>

                    <p className="w3-row hr-divider"><hr /></p>
                </section>

                {/* Footer */}
                <footer className="w3-center w3-black w3-padding-64 w3-hover-opacity-off">
                    
                    <a href="#home" className="link-button w3-light-grey">
                        <i className="fa fa-arrow-up w3-margin-right"></i>
                        Back to the top
                    </a>
                    
                    <div className="w3-xlarge footer-links-section font-awesome-link">
                        <a className="font-awesome-link" href="https://www.facebook.com/daniela.stringa.1">
                            <i className="fa fa-facebook-official w3-hover-opacity"></i>
                        </a>
                        <a className="font-awesome-link" href="https://www.instagram.com/thedutchmen.us/">
                            <i className="fa fa-instagram w3-hover-opacity"></i>
                        </a>
                        <i className="fa fa-snapchat w3-hover-opacity"></i>
                        <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                        <i className="fa fa-twitter w3-hover-opacity"></i>
                        <i className="fa fa-linkedin w3-hover-opacity"></i>
                    </div>

                    <p>Copyright (c) 2021-2022 by <a href="https://thedutchment.us" title="TheDutchmen LLC." className="w3-hover-text-green">TheDutchmen LLC.</a></p>
                </footer>
            </main>

            <ConfirmationDialogRaw
                id="ringtone-menu"
                keepMounted
                open={open}
                onClose={handleClose}
                value={value}
            />
        </React.Fragment>
    )
}


const useSignUpForm = (callback) => {
    const [inputs, setInputs] = React.useState({});

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        console.log(event.target);
        callback();
    }
    const handleInputChange = (event) => {
        event.persist();

        setInputs(inputs => ({
            ...inputs, [event.target.name]: event.target.value }));
        console.log("Inputs", inputs);
    }
    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}