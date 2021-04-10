import React from 'react'
import { UNSPLASH_BASE_URL, UNSPLASH_COMMON_HEADERS } from '../../constants';




class Section extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            pages: 3,
            orderBy: "relevant",

        }
    };

    getPhotosPage(pageNumber, orderBy) {
        fetch(`${UNSPLASH_BASE_URL}/search/photos?query=${this.props.name}&per_page=30&page=${pageNumber}&order_by=${orderBy}`, {
            headers: UNSPLASH_COMMON_HEADERS})
        .then(response => response.json())
        .then((json)=> {
            const imgUrls = json.results.map((result) => {
                return {
                url: result.urls.thumb,
                totalLikes: result.likes,
            }
        });
            this.setState((state, props) => ({
                images: state.images.concat(imgUrls)
              }));
            console.log(json);
        });
    }

    orderByChange = event => {
        this.setState({orderBy: event.target.value, images:[]});
        this.componentDidMount();
    }

      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }
      
      listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
      
        const scrollPosition = winScroll / height;
      
        console.log(scrollPosition);

        if (scrollPosition >= 0.7) {
            this.setState(  (state, props) => ({
                pages: state.pages + 1,
            }));
            
            this.getPhotosPage(this.state.pages);
        };
      }
      
    componentDidMount() {
        for (let i = 1; i <= this.state.pages; i++) {
            this.getPhotosPage(i, this.state.orderBy);
        }
        window.addEventListener('scroll', this.listenToScroll);
    }

    render() {
        const imageItems = this.state.images.map((img) => <img class="pic" src={img.url} alt={img.totalLikes}></img>    );
        return <div className="section-main">
            <h1>{this.props.name}</h1>
            <div> <label for="sort by">Sort by: </label>
            <select name="sort" id="sort" value={this.state.orderBy} onChange={this.orderByChange}>
                <option value="relevant">Relevant</option>
                <option value="latest">Latest</option>
                </select>
              </div>
            
            <br/>
            <p>Sekcja pelny widok</p>
            {imageItems}
        </div>
    }
}

export default Section;
