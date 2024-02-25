// App.js or index.js
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import ListComponent from './ListComponent';
import  { useState } from 'react';
//import bb8 from './Bb8.css';
let names = ['Frontend', 'Backend', 'Fullstack', 'DevOps', 'QA'];

const NavBar = () => {
  return (
    <nav className="flex items-center h-16 bg-gray-800">
    <div className="flex items-center justify-center text-white h-full flex-1 hover:border-b hover:border-white">
      <Link to="/">Home</Link>
    </div>
    <div className='flex items-center justify-center text-white h-full flex-1 hover:border-b hover:border-white'>
      <Link to="/shop">Shop</Link>
    </div>
    <div className='flex items-center justify-center text-white h-full flex-1 hover:border-b hover:border-white'>
      <Link to="/skills">Skills</Link>
    </div>
    <div className="flex items-center justify-center text-white h-full flex-1 hover:border-b hover:border-white">
      <Link to="/Profile">Profile</Link>
    </div>
    </nav>
  );
};

const PopupMessageBox = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };



  return (
    <div >
      <button onClick={openPopup}>Open Popup</button>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-arrow"></div>
          <div className="popup-box">
            <p>Motivation!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const ProgressCard = ({skill}) => (
  <div class="mt-6 space-y-12">
  <div class="group relative">
  <p class="mt-2 text-base font-semibold text-gray-900">{skill.name}</p>

    <div class="relative h-40 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 px-4 flex">
      <div className="m-2 text-lg font-small dark:text-black w-full flex-1">Progress: 10%
        <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-300">
          <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: '10%' }}></div>
        </div>
      </div>
    </div>
  </div>
</div>);

const Home = () => {
  const user = {
    username: 'John Doe',
    money: 1000,
    experience: 100,
    level: 1,
  }




  const skills = [{name: 'Frontend'}, {name: 'Backend'}, {name: 'Fullstack'}, {name: 'DevOps'}, {name: 'QA'}];
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
        <div className="w-1/3 p-4 bg-gray-300 flex h-screen" >
          <div className="mx-1 max-w-2xl py-16 sm:py-4 lg:max-w-none lg:py-4 flex-1 scrollableContainer" style={{overflowY: 'auto', height:'80vh'}}>
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
              <ul>
              {skills.map((skill, index) => (<li key={index}> <ProgressCard skill={skill}  /> </li>))}
              </ul>
             

          </div>
        </div>

     
        <div className="w-1/3 p-4 bg-gray-300 text-gray h-screen">
 
        <div class="bb-8">
        <PopupMessageBox/>
  		<div class="bb-8__head">
       
    		<div class="bb-8__head__antenna"></div>
    		<div class="bb-8__head__antenna--longer"></div>
    		<div class="bb-8__head__top">
      			<div class="bb-8__head__top__bar--gray"></div>
     			<div class="bb-8__head__top__bar--red"></div>
			    <div class="bb-8__head__top__lens">
			    	<div class="bb-8__head__top__lens__inner"></div>
			    </div>
			    <div class="bb-8__head__top__lens--secondary">
			    	<div class="bb-8__head__top__lens--secondary__inner"></div>
			    </div>
			    <div class="bb-8__head__top__bar--red--lower--left"></div>
			    <div class="bb-8__head__top__bar--red--lower--right"></div>
			    <div class="bb-8__head__top__bar--gray--lower"></div>
    		</div>
    		<div class="bb-8__head__joint"></div>
  		</div>
		<div class="bb-8__head-shadow"></div>
		<div class="bb-8__body">
		    <div class="bb-8__body__circle bb-8__body__circle--one">
		    	<div class="bb-8__body__circle__bar bb-8__body__circle--one__bar--one"></div>
		    	<div class="bb-8__body__circle__bar bb-8__body__circle--one__bar--two"></div>
		    	<div class="bb-8__body__circle--one__inner-circle"></div>
		    	<div class="bb-8__body__circle--one__inner-border"></div>
		    </div>
		    <div class="bb-8__body__circle bb-8__body__circle--two">
		    	<div class="bb-8__body__circle__bar bb-8__body__circle--two__bar--one"></div>
		    	<div class="bb-8__body__circle--two__inner-border"></div>
		    </div>
		    <div class="bb-8__body__circle bb-8__body__circle--three">
		    	<div class="bb-8__body__circle__bar bb-8__body__circle--three__bar--one"></div>
		    	<div class="bb-8__body__circle__bar bb-8__body__circle--three__bar--two"></div>
		    	<div class="bb-8__body__circle--three__inner-circle"></div>
		    	<div class="bb-8__body__circle--three__inner-border"></div>
		    </div>
		    <div class="bb-8__body__line bb-8__body__line--one"></div>
		    <div class="bb-8__body__line bb-8__body__line--two"></div>
		    <div class="bb-8__body__line bb-8__body__line--three"></div>
		    <div class="bb-8__body__screw bb-8__body__screw--one"></div>
		    <div class="bb-8__body__screw bb-8__body__screw--two"></div>
		    <div class="bb-8__body__screw bb-8__body__screw--three"></div>
		    <div class="bb-8__body__screw bb-8__body__screw--four"></div>
		    <div class="bb-8__body__screw bb-8__body__screw--five"></div>
		    <div class="bb-8__body__screw bb-8__body__screw--six"></div>
    	</div>
  		<div class="bb-8__body-shadow"></div>
	</div>
  </div>
      </div>
    </div>
   
  );
};





///////////////////////////////////////////////////////////
const FullSkillView = () => {

  return       (<div className="grid grid-cols-4 gap-4">
  {names.map((name, index) => (
    <Link to={`/${name}`} key={index}>
      <Card key={index} name={name} />
    </Link>
  ))}
</div>);
};

// ProductCard.js

const ProductCard = ({ imageUrl, productName, averageRating, price }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-8 rounded-t-lg" src={imageUrl} alt={`product image of ${productName}`} />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Star rating icons */}
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {/* ... (Star rating SVGs) */}
          </div>
          {/* Average rating */}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{averageRating}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
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
          <ProductCard imageUrl={'images/Screenshot 2024-02-25 103647.png'}/>
          {/* Product Card 2 */}
          <ProductCard imageUrl={'images/Screenshot 2024-02-25 103813.png'}/>
          {/* Product Card 3 */}
          <ProductCard imageUrl={'images/Screenshot 2024-02-25 103905.png'}/>
          {/* Product Card 4 */}
          <ProductCard imageUrl={'/images/Screenshot 2024-02-25 105708.png'}/>
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
        <div className="col-xs-12" style={{ width: '100%' }}>
          <h1>Stickman Animation</h1>
        </div>

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
const Details = () => {

  return (
    <div>
      <h2>FrontEnd path</h2>
      {/* Display additional details for the selected item */}
    </div>
  );
};


const Card = ({name}) => {
  return (<div className="max-w-sm rounded overflow-hidden shadow-lg my-10">
  <div className="px-6 py-4 ">
    <div className="font-bold text-xl mb-2">{name}</div>

  </div>
  <div className="px-6 pt-4 pb-2">
   
    </div>
</div>)
}

// ...


const GenericPageComoonent = ({name}) => {
  return (
    <div>
      <h2>{name} Page Component</h2>
      <p>This is the content of the {name} Page component.</p>
    </div>
  );
}
function App() {
  return (
    <Router>


      {/* Define routes */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<FullSkillView />} />
      <Route path="/shop" element={<Shop />} />
      {
        names.map((name, index) => (
          <Route path={`/${name}`} element={<GenericPageComoonent name={name} />} key={index} />
        ))
      }

      </Routes>
      {/* Add routes for other names as needed */}
    </Router>
  );
}


export default App;
