import React, { Component } from 'react';
import axios from '../../axios';
import { Route } from 'react-router-dom';

import Post from '../../components/Post/Post';
import './Posts.css';
import FullPost from '../Blog/FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }
    //Working with Promises here .then()
    //axios uses promises and GET returns a promise.
    //Promises is a method which takes a function as the input and this function will get executed once the promise resolves
    componentDidMount() {
        console.log(this.props);

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
                console.log(error);
                //this.setState({ error: true });
            });
    }

    postSelectedHandler = (idArg) => {
        //this.props.history.push({ pathname: '/posts/' + idArg });
        //OR Shortcut (without pathname: and curly brackets {})
        this.props.history.push('/posts/' + idArg);
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // OR to={'/posts/' + post.id}>
                    //<Link to={'/' + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                    //</Link>
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;