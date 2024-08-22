import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;

  // Use useState to manage state
  const [pageSize] = useState(6);
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(0);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}>
      <Router>
        <LoadingBar
          color="red"
          progress={progress}
          height={3} 
          shadow={true} 
          onLoaderFinished={() => setProgress(0)}  
        />
        <Navbar title="NewsMonkey" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <hr style={{backgroundColor:"blue",height:"3px",margin:"0"}}/>
        <Routes>
          <Route
            path="/"
            element={<News key="general" apikey={apikey} pageSize={pageSize} category="general" darkMode={darkMode} setProgress={setProgress} />}
          />
          <Route
            path="/business"
            element={<News key="business" apikey={apikey} pageSize={pageSize} category="business" darkMode={darkMode} setProgress={setProgress} />}
          />
          <Route
            path="/entertainment"
            element={<News key="entertainment" apikey={apikey} pageSize={pageSize} category="entertainment" darkMode={darkMode} setProgress={setProgress} />}
          />
          <Route
            path="/health"
            element={<News key="health" apikey={apikey} pageSize={pageSize} category="health" darkMode={darkMode} setProgress={setProgress} />}
          />
          <Route
            path="/science"
            element={<News key="science" apikey={apikey} pageSize={pageSize} category="science" darkMode={darkMode} setProgress={setProgress} />}
          />
          <Route
            path="/sports"
            element={<News key="sports" apikey={apikey} pageSize={pageSize} category="sports" darkMode={darkMode} setProgress={setProgress} />}
          />
          <Route
            path="/technology"
            element={<News key="it" apikey={apikey} pageSize={pageSize} category="it" darkMode={darkMode} setProgress={setProgress} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
