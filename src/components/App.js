import React from "react";
import image from '../images/demo.png';

const user ={
  name: "Anne Liza",
  location: "New york",
  bio: "a Web Developer",
  github: "https://github.com/Anne-Liza",
  linkedin: "https://www.linkedin.com/in/annelizawangui/"

};

function NavBar() {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>{user.name} is {user.bio} from {user.location}.</h1>
    </div>
  );
}

function About(){

  if(!user.bio){
    return null;
  }else {
    return(
      <div id="about">
        <h2>About</h2>
        <p>I made this!</p>
        <img src={image} alt="Imade this"/>
        <p><a href={user.github}>{user.github}</a></p>
        <p><a href={user.linkedin}>{user.linkedin}</a></p>
       
      </div>
    );
  }
 
}


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    
    </div>
  );
}

export default App;
