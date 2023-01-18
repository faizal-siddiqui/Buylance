import React from 'react';
import './App.css';
import LargeWithAppLinksAndSocial from './components/Home/Footer/footer';
import Home from './pages/Home';
import AdminPanel from './pages/Admin';
function App() {
  return (
    <div className="App">
      {/* <Home/>
      <LargeWithAppLinksAndSocial/> */}
<AdminPanel/>
    </div>
  );
}

export default App;
