import React from 'react'
import './App.css';
import SectionPreview from './Components/SectionPreview/SectionPreview';
import Section from './Components/Section/Section';
import Card from './Components/Card/Card';

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
    <Link to="/penguins"><SectionPreview name="Penguins"></SectionPreview></Link>
    <Link to="/ponies"><SectionPreview name="Ponies"></SectionPreview></Link>
    <Link to="/owls"><SectionPreview name="Owls"></SectionPreview></Link>
    </div>
return <Router>
<div>
<Link to="/"><header>PHOTO GALLERY</header></Link> 
  <Switch>
    <Route path="/puppies">
      <Section name="Puppies"/>
    </Route>
    <Route path="/kittens">
      <Section name="Kittens" />
    </Route>
    <Route path="/penguins">
      <Section name="Penguins" />
    </Route>
    <Route path="/ponies">
      <Section name="Ponies" />
    </Route>
    <Route path="/owls">
      <Section name="Owls" />
    </Route>
    <Route path="/card/:imageId" component={Card}>
    </Route>
    <Route path="/">
        {home}
    </Route>
  </Switch>
</div>
</Router>


} export default App;


