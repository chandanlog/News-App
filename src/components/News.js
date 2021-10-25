import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
    
        {
            "source": {
                "id": null,
                "name": "Gizmodo Australia"
            },
            "author": "junglist",
            "title": "RIP Javascript, Python Is Now The Most Popular Programming Language In The World",
            "description": "For the longest time, the hierarchy was ruled by C, Java, and Javascript. But now there's a new king of programming languages.\nThe post RIP Javascript, Python Is Now The Most Popular Programming Language In The World appeared first on Gizmodo Australia.\n\n  Re…",
            "url": "https://www.gizmodo.com.au/2021/10/python-most-popular-language/",
            "urlToImage": "https://imgix.gizmodo.com.au/content/uploads/sites/2/2021/10/12/python-most-popular.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1200",
            "publishedAt": "2021-10-12T04:44:14Z",
            "content": "According to TIOBE, Python has now overtaken C and Java to become the world’s most popular programming language. The high-level language has been on the rise for years, and the fact that any language… [+2556 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo Australia"
            },
            "author": "Asha Barbaschow",
            "title": "Twitter Now Lets You Kinda Block Followers",
            "description": "Twitter is rolling out a feature that lets you remove followers. It's basically a pre-block, letting you control who can see your tweets.\nThe post Twitter Now Lets You Kinda Block Followers appeared first on Gizmodo Australia.\n\n  Related Stories\r\n<ul><li>From…",
            "url": "https://www.gizmodo.com.au/2021/10/twitter-block-remove-followers/",
            "urlToImage": "https://imgix.gizmodo.com.au/content/uploads/sites/2/2021/10/12/iStock-1088990114.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1200",
            "publishedAt": "2021-10-12T04:10:32Z",
            "content": "Twitter is rolling out a feature it says will allow everyone manage their own followers list. The new feature lets you remove whoever you want basically a way to kind-of block someone without blockin… [+2098 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo Australia"
            },
            "author": "Bradley Brownell",
            "title": "Tesla Model 3 And Y Will Be Able To Charge Everywhere With This Adapter: Report",
            "description": "It has been said that Tesla’s biggest advantage has also been among its biggest drawbacks. The Tesla charging network has...\nThe post Tesla Model 3 And Y Will Be Able To Charge Everywhere With This Adapter: Report appeared first on Gizmodo Australia.\n\n  Relat…",
            "url": "https://www.gizmodo.com.au/2021/10/tesla-model-3-and-y-will-be-able-to-charge-everywhere-with-this-adapter-report/",
            "urlToImage": "https://imgix.gizmodo.com.au/content/uploads/sites/2/2021/10/09/e7194c6e83fb2aed4bff7d0082acda24.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1200",
            "publishedAt": "2021-10-12T04:00:51Z",
            "content": "It has been said that Teslas biggest advantage has also been among its biggest drawbacks. The Tesla charging network has always been Tesla-only, ensuring you wouldnt show up to charge and some lowly … [+2625 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Post Magazine"
            },
            "author": "Agencies, Agencies",
            "title": "Elon Musk trolls Jeff Bezos as he widens lead as world’s richest person",
            "description": "The rift between the two of the richest men on Earth continues to grow after SpaceX and Tesla founder Elon Musk again took to Twitter and remind Jeff Bezos that the gap between the two of them is growing.Musk's wealth increased rapidly over the last few days,…",
            "url": "https://www.scmp.com/news/world/united-states-canada/article/3152018/elon-musk-trolls-jeff-bezos-he-widens-lead-worlds",
            "urlToImage": "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_generic/public/d8/images/methode/2021/10/12/6f22d998-2b0b-11ec-9021-f4cecde6cb15_image_hires_113726.jpeg?itok=VsgiWDCy&v=1634009853",
            "publishedAt": "2021-10-12T03:37:34Z",
            "content": "Published: 11:37am, 12 Oct, 2021\r\nUpdated: 11:37am, 12 Oct, 2021"
        },
    ]
    constructor(){
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    componentDidMount(){
        console.log("cmd")
    }

    render() {
        console.log("render")
        return (
            <div className = "container my-3">
                <h2>NewsMonkey - Top Headlines</h2>
                {this.state.articles.map((element)=>{console.log(element)})}
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title = "myTitle" description = "mydesc" imageUrl="https://imgix.gizmodo.com.au/content/uploads/sites/2/2021/10/12/python-most-popular.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1200" newsUrl="Too"/>  
                    </div>
                    <div className="col-md-4">
                        <NewsItem title = "myTitle" description = "mydesc" imageUrl="https://imgix.gizmodo.com.au/content/uploads/sites/2/2021/10/12/python-most-popular.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1200"/>  
                    </div>
                    <div className="col-md-4">
                        <NewsItem title = "myTitle" description = "mydesc" imageUrl="https://imgix.gizmodo.com.au/content/uploads/sites/2/2021/10/12/python-most-popular.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1200"/>  
                    </div>
                </div>
            </div>
        )
    }
}

export default News
