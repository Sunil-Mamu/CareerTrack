// App.js or index.js
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import ListComponent from './ListComponent';
let names = ['Frontend', 'Backend', 'Fullstack', 'DevOps', 'QA'];
const Home = () => {  
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Skills page</p>
      <Link to="/skills">Skills</Link>
    </div>
  );
}
const FullSkillView = () => {

  return       (<div className="grid grid-cols-4 gap-4">
  {names.map((name, index) => (
    <Link to={`/${name}`} key={index}>
      <Card key={index} name={name} />
    </Link>
  ))}
</div>);
};

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
