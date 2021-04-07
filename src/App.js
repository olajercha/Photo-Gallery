import React from 'react'
import './App.css';
import SectionPreview from './Components/SectionPreview/SectionPreview';



function App() {
return <div>
 <header>PHOTO GALLERY</header>   
 <SectionPreview name="Puppies"></SectionPreview>
 <SectionPreview name="Kittens"></SectionPreview>
 <SectionPreview name="Penguins"></SectionPreview>
 <SectionPreview name="Ponies"></SectionPreview>
 <SectionPreview name="Owls"></SectionPreview>
</div>
}export default App;


