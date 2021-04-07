import React from 'react'
import './SectionPreview.css';
import luna from './../Assets/luna.png'; // with import
import { render } from 'react-dom';




class SectionPreview extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            images: []}
    };

      
    componentDidMount() {
        fetch(`https://api.unsplash.com/search/photos?query=${this.props.name}&client_id=`)
        .then(response => response.json())
        .then((json)=> {
            const imgUrls = json.results.map((result)=> result.urls.full);
            this.setState({images: imgUrls});
            console.log(json);
        });
    }

    render() {
        const imageItems = this.state.images.map((src) => <img class="pic" src={src}></img>    );
        return <div className="section">
            <h2>{this.props.name}</h2>
            {imageItems}
        </div>
    }
}

export default SectionPreview;
