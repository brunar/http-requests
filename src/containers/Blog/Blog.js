import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from './NewPost/NewPost';

//To simulate an error example change the url axios.get
class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* For NavLink has to use exact for path to="/" */}
                            <li><NavLink
                                exact
                                to="/posts/"
                                activeClassName="my-active"
                                activeStyle={{
                                    color: 'orange',
                                    textDecoration: 'underline'
                                }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                {/* Without exact does means any path that starts with /  */}
                {/* <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                {/* Switch means running the first Route thats match the path, 
                and won't render any other Route and the order is important 
                for the new-post not to be treat as id and can put some Route outside of switch
                 */}
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;