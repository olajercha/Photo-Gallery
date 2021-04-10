
import React from 'react'
import { UNSPLASH_BASE_URL, UNSPLASH_COMMON_HEADERS } from '../../constants';
import './Card.css';

class Card extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            image: {
                urls: {
                    full: ''
                },
                views: '',
                downloads: '',
                user: {
                    name: ''
                }
            },
        }
    };

    getPhoto(id) {
        fetch(`${UNSPLASH_BASE_URL}/photos/${id}`, {
            headers: UNSPLASH_COMMON_HEADERS
        })
            .then(response => response.json())
            .then((json) => {
                console.log(json);
                this.setState({
                    image: json
                });
            });
    }

    componentDidMount() {
        const imageId = this.props.match.params.imageId;
        this.getPhoto(imageId);
    }

    render() {
        return <div className="card">
                 <img className="full-pic" src={this.state.image.urls.full} alt="full-img"></img>
                 <p>Author: {this.state.image.user.name}</p>
                 <p>Views: {this.state.image.views}</p>
                 <p>Downloads: {this.state.image.downloads}</p>
               </div>
    }
}

export default Card;
