import React from 'react'
import './App.css';
import SectionPreview from './Components/SectionPreview/SectionPreview';
import Section from './Components/Section/Section';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function App() {
    const home = <div>
      
    <Link to="/puppies"><SectionPreview name="Puppies"></SectionPreview></Link>
    <Link to="/kittens"><SectionPreview name="Kittens"></SectionPreview></Link>
    <Link to="/"><SectionPreview name="Penguins"></SectionPreview></Link>
    <Link to="/"><SectionPreview name="Ponies"></SectionPreview></Link>
    <Link to="/"><SectionPreview name="Owls"></SectionPreview></Link>
    </div>
return <Router>
<div>
<Link to="/"><header>PHOTO GALLERY</header></Link> 
  <Switch>
    <Route path="/puppies">
      <Section name="puppies"/>
    </Route>
    <Route path="/kittens">
      <Section name="kittens" />
    </Route>
    <Route path="/">
        {home}
    </Route>
  </Switch>
</div>
</Router>


} export default App;


