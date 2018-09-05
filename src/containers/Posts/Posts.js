import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import { PostContext } from '../../App';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
        PostCount: 0,
    }

    render(){
        return (
            <div>
            <section className="Posts">
            <PostContext.Consumer>
                {posts => posts.length >0 ? posts.map(post => {
                    return (
                        <Post
                            key={post.id} 
                            title={post.title} 
                            author={post.author}
                        />
                    )
                    }) : <h1>Something went Wrong!!</h1> 
                }
            </PostContext.Consumer>
            </section>
                </div>
        );
    }
}
export default Posts;