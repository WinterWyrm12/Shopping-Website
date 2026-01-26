import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-info">Phone: (123) 456-7891</p>
            <p className="footer-info">Email: OnlineStore@gmail.com</p>
            <div className="footer-pages">
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
                <a href="#">Terms of Service</a>
            </div>
            <p className="footer-text">Copyright 2026 OnlineStore - All Rights Reserved</p>
        </footer>
    )
}

export default Footer;