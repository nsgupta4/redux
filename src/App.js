import React, { Component } from 'react';
import Counter from './containers/Counter/Counter';
import CounterOutput from './components/CounterOutput/CounterOutput';
import { reducer as Reducer } from './store/Reducers';
import './App.css';
import Posts from './containers/Posts/Posts';
import axios from 'axios';

export const CounterContext = React.createContext(<h1>Jack</h1>);
export const PostContext = React.createContext(null);

// export const ActionTypes = {
//   INC: "INC",
//   DEC: "DEC",
//   SUB: "SUB",
//   ADD: "ADD"
// };

// const reducer = (state, action) => {
//   debugger;
//   if (action.type === ActionTypes.INC) {
//     return { ...state, counter: state.counter + action.value };
//   }
// };

class App extends Component {
  state = {
    posts: [],
    counter: 0,
    dispatch: (action, value) => {
      this.setState(state => Reducer(state, action, value));
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
        const posts = response.data.slice(0,4);
        const updatedPosts= posts.map(post =>{
            return {
                ...post,
                author:'Max'
            }
        });
        const count = updatedPosts.length; 
        this.setState({ posts: updatedPosts, PostCount: count }); 
        //console.log(response);
}).catch(error =>{
//this.setState({error:true});
console.log('Error - ',error);
})
}
  render() {
    return (
      <div className="App">
        <CounterContext.Provider value={this.state}>
          <Counter />
        </CounterContext.Provider>
        <PostContext.Provider value={this.state.posts}>
          <Posts/>
        </PostContext.Provider>
      </div>
    );
  }
}

export default App;
