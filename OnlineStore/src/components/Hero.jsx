import './Hero.css';


function Hero ({title, subtitle, call}) {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>{title}!</h1>
                <p>{subtitle}</p>
                <button>{call}</button>
            </div>
        </div>
    );
}

export default Hero;