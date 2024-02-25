// App.js or index.js
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import GenericPageComoonent from "./GenericPage";
import FullSkillView from "./FullSkillView";
import { useEffect, useState } from "react";
import axios from "axios";

// App.js or index.js

const NavBar = () => {
  return (
    <nav className="flex items-center h-16 bg-gray-800">
      <div className="flex items-center justify-center text-white h-full flex-1 hover:border-b hover:border-white">
        <Link to="/">Home</Link>
      </div>
      <div className="flex items-center justify-center text-white h-full flex-1 hover:border-b hover:border-white">
        <Link to="/shop">Shop</Link>
      </div>
      <div className="flex items-center justify-center text-white h-full flex-1 hover:border-b hover:border-white">
        <Link to="/skills">Skills</Link>
      </div>
      <div className="flex items-center justify-center text-white h-full flex-1 hover:border-b hover:border-white">
        <Link to="/Profile">Profile</Link>
      </div>
          
    </nav>
  );
};

const PopupMessageBox = ({ firstRender }) => {
  const [showPopup, setShowPopup] = useState(!firstRender);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-arrow"></div>
          <div className="popup-box">
            <div>
              <p>
                Wow! You learnt what HTTP is and how the internet works! Here
                are some helpful videos to further your learning!
                <a href="https://youtu.be/x3c1ih2NJEg?si=RE9Wq3-Rbcmt3eMa">
                  video
                </a>
              </p>
            </div>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const ProgressCard = ({ skill }) => {
  const progress = skill.name === "Frontend" ? localStorage["experience"] : 0;
  return (
    <div class="mt-6 space-y-12">
      <div class="group relative">
        <p class="mt-2 text-base font-semibold text-gray-900">{skill.name}</p>

        <div class="relative h-40 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 px-4 flex">
          <div className="m-2 text-lg font-small dark:text-black w-full flex-1">
            Progress: {progress ?? 0}%
            <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-300">
              <div
                className="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
                style={{ width: (progress ?? 0) + "%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [message, setMessage] = useState("");

  const user = {
    username: "John Doe",
    money: 1000,
    experience: 100,
    level: 1,
  };

  const skills = [
    { name: "Frontend" },
    { name: "Backend" },
    { name: "Fullstack" },
    { name: "DevOps" },
    { name: "QA" },
  ];

  return (
    <div>
      {/* Your existing content */}
      <NavBar />

      {/* New content */}
      <div className="flex justify-center ">
        {/* Three large divs */}
        <div className="w-1/3 p-4 bg-gray-300 text-black h-screen ">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold">Your Avatar:</h1>
            <StickmanAnimation />
          </div>
        </div>

        {/* Your new content goes here */}
        {/* Your new content */}
        <div className="w-1/3 p-4 bg-gray-300 flex h-screen">
          <div
            className="mx-1 max-w-2xl py-16 sm:py-4 lg:max-w-none lg:py-4 flex-1 scrollableContainer"
            style={{ overflowY: "auto", height: "80vh" }}
          >
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>
                  {" "}
                  <Link to={"/" + skill.name}>
                    <ProgressCard skill={skill} />{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-1/3 p-4 bg-gray-300 text-gray h-screen">
          <UserCard username={"Bk"} money={1000} experience={100} level={1} />
          <div class="bb-8">
            <PopupMessageBox firstRender={localStorage["experience"] !== "3"} />
            <div class="bb-8__head">
              <div class="bb-8_head_antenna"></div>
              <div class="bb-8_head_antenna--longer"></div>
              <div class="bb-8_head_top">
                <div class="bb-8_headtop_bar--gray"></div>
                <div class="bb-8_headtop_bar--red"></div>
                <div class="bb-8_headtop_lens">
                  <div class="bb-8_headtoplens_inner"></div>
                </div>
                <div class="bb-8_headtop_lens--secondary">
                  <div class="bb-8_headtoplens--secondary_inner"></div>
                </div>
                <div class="bb-8_headtop_bar--red--lower--left"></div>
                <div class="bb-8_headtop_bar--red--lower--right"></div>
                <div class="bb-8_headtop_bar--gray--lower"></div>
              </div>
              <div class="bb-8_head_joint"></div>
            </div>
            <div class="bb-8__head-shadow"></div>
            <div className="bb-8__body">
              <div className="bb-8_bodycircle bb-8body_circle--one">
                <div class="bb-8_bodycirclebar bb-8bodycircle--one_bar--one"></div>
                <div class="bb-8_bodycirclebar bb-8bodycircle--one_bar--two"></div>
                <div class="bb-8_bodycircle--one_inner-circle"></div>
                <div class="bb-8_bodycircle--one_inner-border"></div>
              </div>
              <div class="bb-8_bodycircle bb-8body_circle--two">
                <div class="bb-8_bodycirclebar bb-8bodycircle--two_bar--one"></div>
                <div class="bb-8_bodycircle--two_inner-border"></div>
              </div>
              <div class="bb-8_bodycircle bb-8body_circle--three">
                <div class="bb-8_bodycirclebar bb-8bodycircle--three_bar--one"></div>
                <div class="bb-8_bodycirclebar bb-8bodycircle--three_bar--two"></div>
                <div class="bb-8_bodycircle--three_inner-circle"></div>
                <div class="bb-8_bodycircle--three_inner-border"></div>
              </div>
              <div class="bb-8_bodyline bb-8body_line--one"></div>
              <div class="bb-8_bodyline bb-8body_line--two"></div>
              <div class="bb-8_bodyline bb-8body_line--three"></div>
              <div class="bb-8_bodyscrew bb-8body_screw--one"></div>
              <div class="bb-8_bodyscrew bb-8body_screw--two"></div>
              <div class="bb-8_bodyscrew bb-8body_screw--three"></div>
              <div class="bb-8_bodyscrew bb-8body_screw--four"></div>
              <div class="bb-8_bodyscrew bb-8body_screw--five"></div>
              <div class="bb-8_bodyscrew bb-8body_screw--six"></div>
            </div>
            <div class="bb-8__body-shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserCard = ({ username, money, experience, level }) => {
  return (
    <div className="user-card">
      <div className="user-details">
        <h2 className="username">{username}</h2>
        <p className="info">
          Money: <span className="money">{money}</span>
        </p>
        <p className="info">
          Experience:{" "}
          <span className="experience">{localStorage["experience"] ?? 0}</span>
        </p>
        <p className="info">
          Level: <span className="level">{level}</span>
        </p>
      </div>
    </div>
  );
};

// ProductCard.js

const ProductCard = ({ imageUrl, productName, averageRating, price }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src={imageUrl}
          alt={`${productName}`}
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {productName}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Star rating icons */}
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {/* ... (Star rating SVGs) */}
          </div>
          {/* Average rating */}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {averageRating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {price}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

const Shop = () => {
  return (
    <div>
      {/* Your existing content */}
      <NavBar />
      {/* New content */}
      <main className="container mx-auto mt-8">
        {/* Display 2 columns and 3 rows of product cards */}
        <div className="grid grid-cols-2 gap-8">
          {/* Product Card 1 */}
          <ProductCard imageUrl={"images/Screenshot 2024-02-25 103647.png"} />
          {/* Product Card 2 */}
          <ProductCard imageUrl={"images/Screenshot 2024-02-25 103813.png"} />
          {/* Product Card 3 */}
          <ProductCard imageUrl={"images/Screenshot 2024-02-25 103905.png"} />
          {/* Product Card 4 */}
          <ProductCard imageUrl={"/images/Screenshot 2024-02-25 105708.png"} />
        </div>
      </main>
      {/* Your existing content */}
      <footer aria-labelledby="footer-heading" className="afm afu alm">
        {/* ... (Your footer content) */}
      </footer>
        
    </div>
  );
};
//////////////
//stickman

const StickmanAnimation = () => {
  return (
    <div id="animation" className="stickman">
      <div className="row">
        <div className="col-xs-12" style={{ width: "100%" }}></div>

        <div id="animation" className="col-xs-12 col-sm-6">
          <div className="stickman col-xs-12">
            <div className="head">
              <div className="eye"></div>
              <div className="mouth"></div>
              <div className="hair">
                <div className="fringe"></div>
              </div>
              <div className="beard"></div>
            </div>
            <div className="torso">
              <div className="shirt"></div>
              <div className="left-arm">
                <div className="sleeve"></div>
                <div className="hand"></div>
              </div>
              <div className="right-arm">
                <div className="sleeve"></div>
                <div className="hand"></div>
              </div>
              <div className="left-leg">
                <div className="pants"></div>
                <div className="foot"></div>
                <div className="shoe"></div>
              </div>
              <div className="right-leg">
                <div className="pants"></div>
                <div className="foot"></div>
                <div className="shoe"></div>
              </div>
            </div>
            <div className="shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

///////////

//////////////////////////////

////////////////////

// ...

// ...

function App() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      const response = await axios.get("http://localhost:3000/skills");
      const data = await response.data;
      const skills = data.filter((skill) => skill.steps.length !== 0);
      setSkills(skills);
    };
    getSkills();
  }, []);

  console.log(skills);

  return (
    <Router>
      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<FullSkillView skills={skills} />} />
        <Route path="/shop" element={<Shop skills={skills} />}></Route>
        {skills?.map((skill, index) => (
          <Route
            path={`/${skill.name}`}
            element={
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "33.33%", maxWidth: "500px" }}>
                  <GenericPageComoonent name={skill.name} skills={skill} />
                </div>
              </div>
            }
            key={index}
          />
        ))}
      </Routes>
      {/* Add routes for other names as needed */}
    </Router>
  );
}

export default App;
