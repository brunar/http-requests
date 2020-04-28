import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';

import './Blog.css';

//To simulate an error example change the url axios.get
class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    //Working with Promises here .then()
    //axios uses promises and GET returns a promise.
    //Promises is a method which takes a function as the input and this function will get executed once the promise resolves
    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                //Transforming Data - Adding Author Example
                //slice() is to get only 0 to 4 items in the data from json
                const posts = response.data.slice(0, 4);
                const updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Bruna'
                    }
                })
                this.setState({ posts: updatePosts });
                //console.log(response)
            })
            .catch(error => {
                //console.log(error);
                this.setState({ error: true });
            });
    }
    postSelectedHandler = (idArg) => {
        this.setState({ selectedPostId: idArg })
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />
            });
        }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;