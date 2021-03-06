import React, {useState} from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import Footer from "./Footer";

function HomePage(){

    const [clicked, setClicked] = useState(false);

        function handleTheme(){
            setClicked(!clicked);
        }


    const theme = { backgroundImage: "url(https://raw.githubusercontent.com/SandeepKrSuman/weather_assets/master/weather_backgrounds/homepage-day.jpg)" }

    clicked ? theme.backgroundImage = "url(https://raw.githubusercontent.com/SandeepKrSuman/weather_assets/master/weather_backgrounds/homepage-night.jpg)" : 
    theme.backgroundImage = "url(https://raw.githubusercontent.com/SandeepKrSuman/weather_assets/master/weather_backgrounds/homepage-day.jpg)";
    
        

    return ( 
        <div>
        <section>
            <div className = "row homepage-styl" style = {{margin: "5%"}}>
                <div className = "col-sm-6 home-title">
                    <Navbar />
                    <Title />
                </div>
                <div className = "col-sm-6 home-img" style = {theme}>
                    <span className="theme-change-btns">
                    <button onClick = {handleTheme} className="theme-change-btn"><i className={clicked ? "fas fa-sun": "fas fa-moon"}></i></button>
                    </span>
                </div>
            </div>
        </section>
        <Footer />
        </div>
     );

}

export default HomePage;