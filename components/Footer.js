

export default function Footer() {

    return (
        <footer className="w3-center w3-black w3-padding-64 w3-hover-opacity-off">
                        
            <a href="#home" className="link-button w3-light-grey">
                <i className="fa fa-arrow-up w3-margin-right"></i>
                Back to the top
            </a>
            
            <div className="w3-xlarge footer-links-section font-awesome-link">
                {/*
                <a className="font-awesome-link" href="https://www.facebook.com/daniela.stringa.1">
                    <i className="fa fa-facebook-official w3-hover-opacity"></i>
                </a>
                */}
                <a className="font-awesome-link" href="https://www.instagram.com/thedutchmen.us/">
                    <i className="fa fa-instagram w3-hover-opacity"></i> </a>
                <a className="font-awesome-link" href="#">
                    <i className="fa fa-snapchat w3-hover-opacity"> </i> </a>
                <a className="font-awesome-link" href="#">
                    <i className="fa fa-pinterest-p w3-hover-opacity"></i> </a>
                <a className="font-awesome-link" href="#">
                    <i className="fa fa-twitter w3-hover-opacity"></i> </a>
                <a className="font-awesome-link" href="https://www.linkedin.com/in/wendi-cano-valdez-b2b6b1240/">
                    <i className="fa fa-linkedin w3-hover-opacity"></i> </a>
            </div>

            <p>Copyright (c) 2021-2022 by <a href="https://thedutchment.us" title="TheDutchmen LLC." className="w3-hover-text-green">TheDutchmen LLC.</a></p>
        </footer>
    )
}