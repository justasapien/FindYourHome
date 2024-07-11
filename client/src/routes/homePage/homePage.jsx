import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Your Journey to the Perfect Home Starts Here..</h1>
          <p>
          Welcome to FindYourHome.in , your ultimate destination for finding your dream home. Whether you're buying, selling, or renting, we offer a wide range of properties to suit all needs and budgets.
        Explore homes, apartments, condos, and commercial properties with ease. Our user-friendly platform  help you make informed decisions and find the perfect place to call home .
         Start your search today and discover your ideal property!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>4+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>10</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>100+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;