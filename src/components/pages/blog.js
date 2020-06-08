import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import BlogItem from '../blog/blog-item';

class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogItems: []
        }

        this.getBlogItems = this.getBlogItems.bind(this);
    }

    getBlogItems() {
        axios.get("https://lylerogers.devcamp.space/portfolio/portfolio_blogs", { withCredentials: true }
        ).then(response => {
            this.setState({
                blogItems: response.data.portfolio_blogs
            })
        }).catch(error => {
            console.log("Error in getBlogItems", error);
        });
    }

    componentWillMount() {
        this.getBlogItems();
    }

    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem} />;
        });
        return <h1>{blogRecords}</h1>

    }  
}
    
export default Blog;