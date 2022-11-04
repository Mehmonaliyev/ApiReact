import React from 'react'
import AppList from './AppList'
import CommentList from './CommentList'
import PhotosList from './PhotosList'
import TodosList from './TodosList'

class Main extends React.Component {
    state = {
        todos: [],
        images:[],
        posts:[],
        comment:[]
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(data => this.setState({posts:data}))

        fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
        .then(response => response.json())
        .then(data => this.setState({images:data}))

        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5') 
        .then(response => response.json())
        .then(data => this.setState({todos:data}))

        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5') 
        .then(response => response.json())
        .then(data => this.setState({comment:data}))
    }
    render() {
        return (
            <div className='main'>
                <div>
                <AppList posts={this.state.posts} />

                </div>
                <div>
                <PhotosList app={this.state.images}/>

                </div>
                <div>
                    <TodosList dd={this.state.todos}/>
                </div>
                <div>
                    <CommentList  comment={this.state.comment}/>
                </div>
                
            </div>
        )
    }
}

export default Main