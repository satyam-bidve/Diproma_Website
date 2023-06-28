import React from 'react';

 import Nav from "./Componants/Nav";
 import Hero from './Componants/Hero';
 import Services from './Componants/Services';
import Cources from './Componants/Cources';
import Contact from './Componants/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Services/>
      <Cources/>
      <Contact/>


    </div>
  );
}
 
export default App;
