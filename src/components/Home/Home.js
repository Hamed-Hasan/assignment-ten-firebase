import Features from "./Services";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";
import Services from "./Services";



const Home = () => {
    return (
        <div>
            <Header />
            <Services/>
            <Footer />
        </div>
    );
};

export default Home;