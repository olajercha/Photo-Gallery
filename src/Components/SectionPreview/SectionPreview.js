import React from 'react'
import './SectionPreview.css';
import luna from './../Assets/luna.png'; // with import




function SectionPreview(props) {
return <div class="section">
 <h2>{props.name}</h2>
 <img class="pic" src={luna}></img>
 <img class="pic" src={luna}></img>  
 <img class="pic" src={luna}></img>  
</div>
}
export default SectionPreview;


