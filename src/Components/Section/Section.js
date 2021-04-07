import React from 'react'

import { render } from 'react-dom';




class Section extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            images: []}
    };

      
    componentDidMount() {
        fetch(`https://api.unsplash.com/search/photos?query=${this.props.name}&client_id=&per_page=100`)
        .then(response => response.json())
        .then((json)=> {
            const imgUrls = json.results.map((result)=> result.urls.full);
            this.setState({images: imgUrls});
            console.log(json);
        });
    }

    render() {
        const imageItems = this.state.images.map((src) => <img class="pic" src={src}></img>    );
        return <div className="section-main">
            <h1>{this.props.name}</h1>
            <br/>
            <p>Sekcja pelny widok</p>
            {imageItems}
        </div>
    }
}

export default Section;
