import Head from 'next/head'
import styles from '../styles/Home.module.css'


import { styled, alpha } from '@mui/material/styles';

import * as React from 'react';
import ConfirmationDialog from "@components/ConfirmationDialog";
import Footer from "@components/Footer";
import SectionDivider from "@components/SectionDivider";
import Header from "@components/Header";


export default function Home() {

    const [open, setOpen] = React.useState(true);
    const [value, setValue] = React.useState("Yes! I'm 21 or older");

    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);

    
    function signup() {
        var recipient = `wendiacanovaldez@gmail.com`
        var subject = encodeURIComponent(
            `TheDutchmen.us message from ${inputs.name}
        `)
        var msgBody = encodeURIComponent(
            `Sender's name: ${inputs.name}\n` +
            `Sender's email: ${inputs.email}\n` +
            `\n` +
            `Message: \n${inputs.message}`
        )
        window.open(`mailto:${recipient}?subject=${subject}&body=${msgBody}`)
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

    if (open == false) {
        var navbar = document.getElementById("myNavbar");
        if (navbar) {
            if (scrollTop > 100) {
                navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " bg-white";
            } else {
                navbar.className = navbar.className.replace(" w3-card w3-animate-top bg-white", "");
            }
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
  
    return (
        <React.Fragment>
            <Head>
                <title>TheDutchmen LLC. - Premium Cannabis Cultivator</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header></Header>

            <main className={styles.container}>

                {/* First Parallax Image with Logo Text */}
                <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
                    <MainLogo>
                        <span className="centered w3-xlarge w3-animate-opacity">
                            <img src="logo-gray.png" width="100%"></img>
                        </span>
                    </MainLogo>
                </div>

                {/* Container (About Section) */}
                <section className="w3-content w3-container w3-padding-64" id="about">
                    <h2 className="w3-center" style={{whiteSpace: "nowrap"}}>
                        <em>Welcome to <br className="w3-hide-medium w3-hide-large"/>
                        <a style={{ color: "#ea6f1f" }} href="https://thedutchmen.us">The Dutchmen Website!</a></em>
                    </h2>
                    <div className="w3-row">
                        <div className="w3-col m5 centered w3-padding-large">
                            <img src="images/about-us.jpg" 
                                className="w3-round w3-image w3-hover-opacity-off" alt="Production" />
                        </div>

                        {/* Hide this text on small devices */}
                        <div className="w3-col m7 w3-padding-large">
                            <p>
                                We are The Dutchmen, a recreational cannabis cultivation company, offering a premium quality product and a
                                pleasant customer experience. With roots in the Netherlands, a pioneering country for legal cannabis use, we are well-versed in this industry.
                                We use our knowledge, expertise and plant science to grow and carefully curate a high-level product. Based in Massachusetts, USA,
                                we are fully licensed by the state and are excited to connect with you to educate and support you on your cannabis journey.
                            </p>
                        </div>
                    </div>                    

                    <SectionDivider></SectionDivider>
                    
                    <h2 className="centered">Our values</h2>
                    <div className="w3-row">
                        As the legalization of the cannabis industry accelerates, we see more and more corporations jumping on the bandwagon.
                        We are everyday people and believe that the everyday person with a love for the cannabis community should have access
                        to premium quality cannabis and the best knowledge. Plus, the opportunity to join and profit from the industry.
                    </div>

                    <SectionDivider></SectionDivider>
                    
                    <h2 className="centered">Who are we?</h2>
                    <div className="w3-row">
                        <div className="w3-third m5 w3-margin-bottom">
                            <div className="w3-card-4">
                                <img src="/images/Wendi.jpg" alt="Wendi Cano" style={{width: "100%"}} />
                            </div>
                        </div>       
                        {/* Hide this text on small devices */}
                        <div className="w3-col m7 w3-padding-large">                    
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

                    {/*
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
                    */}
                </section>

                {/* Second Parallax Image with Portfolio Text */}
                <div className="bgimg-2 w3-display-container w3-opacity-min" id="products">
                    <div className="w3-display-middle">
                        <span className="banner-text w3-text-white">OUR PRODUCTS</span>
                    </div>
                </div>

                <section className="w3-content w3-container w3-padding-64">
                    <div className="w3-row">
                    </div>

                    <SectionDivider></SectionDivider>
            
                    <div className="w3-row">
                        <div className="w3-col m6 centered w3-padding-large">
                            <img src="images/products.jpg" 
                                className="w3-round w3-image w3-hover-opacity-off" alt="Production" />
                        </div>       
                        
                        <div className="w3-col m6 w3-padding-large">                    
                            
                            <h2>Exclusive strains</h2>
                            <p>
                                Our products are currently in development.
                                We have access to well known strains.
                            </p>                                            
                            <p>
                                Sign up for our newsletter to keep updated on the launch 
                                and availability of our products.
                            </p>
                        </div>
                    </div>           

                    <SectionDivider></SectionDivider>
            
                    <div className="w3-row">
                        <div className="w3-col m6 w3-padding-large">
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

                        <div className="w3-col m6 centered w3-padding-large">
                            <img src="images/investors.jpg" 
                                className="w3-round w3-image w3-hover-opacity-off" alt="Production" />
                        </div>  
                    </div>                  
                </section>
                   
                
                {/* Third Parallax Image with Portfolio Text */}
                <div className="bgimg-3 w3-display-container w3-opacity-min" id="mission-statement">
                    <div className="w3-display-middle">
                    <span className="banner-text w3-text-black">MISSION STATEMENT</span>
                    </div>
                </div>

                <section className="w3-content w3-container w3-padding-64">
                    <p className="w3-row">
                        The Dutchmen LLC. will work tirelessly to deliver a premium quality product and an exceptional customer experience. Raising cannabis industry
                        standards our uncompromising work ethic, morals and principles are the foundation in which we commit to better serve our community.
                    </p>
                </section>

                <section className="w3-content w3-container w3-padding-64" id="contact">
                    
                    <h2 className="centered">Interested?</h2>

                    <div className="w3-row w3-padding-32 w3-section">
                        <div className="w3-col m4 w3-container">
                            <img src="./images/amsterdam-downtown.jpg" className="w3-image w3-round" style={{width: "100%"}} />
                            <p>
                                Curious about what we are doing behind the scenes?
                                Fill out the <a href="#contact"><em>contact form</em></a> for more information, or to sign up for our newsletter.
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

                </section>
                
                <Footer> </Footer>
               
            </main>

            <ConfirmationDialog keepMounted open={open} onClose={handleClose} value={value} />
        </React.Fragment>
    )
}

const MainLogo = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down("sm")]: {
        left: "10%",
        transform: "translate(-5%, -50%)"
    },
    whiteSpace: "nowrap", 
    lineHeight: 3
}));

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