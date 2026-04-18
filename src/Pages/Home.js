import HomeList from "../Components/HomeList.js";
import Header from "../Components/Header.js";
import Navigation from "../Components/Navigation.js";
import Footer from "../Components/Footer.js";


function Home() {
    return(
        <div class="body-container">

                <Header />



            <Navigation />

            <div class="product-container">
                <HomeList />
            </div>



            <div class="footer">
            <Footer />
            </div>
        </div>
    )
}

export default Home;