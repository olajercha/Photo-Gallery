import React from 'react'
import './SectionPreview.css';
import luna from './../Assets/luna.png'; // with import
import { render } from 'react-dom';




class SectionPreview extends React.Component  {
    componentDidMount() {
        fetch(`https://api.unsplash.com/search/photos?query=${this.props.name}&client_id=`)
        .then(response => {
            
            return response.json();
        });
    }

    render() {
        return <div className="section">
            <h2>{this.props.name}</h2>
            <img class="pic" src={luna}></img>
            <img class="pic" src={luna}></img>
            <img class="pic" src={luna}></img>
        </div>
    }
}

export default SectionPreview;
