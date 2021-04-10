import React from 'react'
import './SectionPreview.css';
import { UNSPLASH_BASE_URL, UNSPLASH_COMMON_HEADERS } from '../../constants';



class SectionPreview extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            images: []}
    };

      
    componentDidMount() {
        fetch(`${UNSPLASH_BASE_URL}/search/photos?query=${this.props.name}`, {
            headers: UNSPLASH_COMMON_HEADERS})
        .then(response => response.json())
        .then((json)=> {
            const imgUrls = json.results.map((result)=> result.urls.thumb);
            this.setState({images: imgUrls});
            console.log(json);
        });
    }

    render() {
        const imageItems = this.state.images.map((src) => <img class="pic" src={src} alt="minature"></img>    );
        return <div className="section">
            <h2>{this.props.name}</h2>
            {imageItems}
        </div>
    }
}

export default SectionPreview;
