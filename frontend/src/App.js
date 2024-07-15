import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
// import LoginHeader from './Components/LoginHeader';






 function App() {
  const [user, setUser] = useState(null);

   return (

   
           
              <div className='App'> 
                
              {!user ? (
                <Login setUser={setUser} />
              ) : (<>
                <Header  user={user} setUser={setUser} />
                <Dashboard user={user} />
              </>
              )}
              </div>
           
           
   );
 }

 export default App;








//  import './App.css';
//  import Navbar from './Components/Navbar';
//  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//  import Services from './Components/Services';
//  import Organizations from './Components/Organizations';
//  import Sidebar from './Components/Sidebar';
//  import VendorList from './Components/VendorList';
//  import React, { useState } from 'react';
//  import Header from './Components/Header';
//  import Login from './Components/Login';
//  import Dashboard from './Components/Dashboard';


//  function App() {

//  return (

//  <Router>
//        <>
//          <Navbar />
//          <div className='sidebar'><Sidebar/></div>
//          <Routes>

//            <Route path="/Home" element={<VendorList />} />
//            <Route path="/Organizations" element={<Organizations />} />
//            <Route path="/Services" element={<Services />} />
         
      

//          </Routes>
//        </>
//      </Router>


// );
// }
 


