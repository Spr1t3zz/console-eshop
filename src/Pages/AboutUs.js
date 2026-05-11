import Header from "../Components/Header.js";
import Navigation from "../Components/Navigation.js";
import Footer from "../Components/Footer.js";

function News() {
    return (
        <div className="body-container">
            <Header />
            <Navigation />
            <div className="product-container">
               <div className="error-container">

                   <img src="https://file.garden/agGlWxEnpRn5fc3C/image_2026-05-11_131354498.png" alt="Xbox 360" />

                   <h1 className="error-message">Něco se pokazilo...</h1>

               </div>
            </div>
            <Footer />
        </div>
    );
}

export default News;