import React from 'react';
import './App.css';
import Homepage from './pages/homepage.component';
import { Link, Route } from 'react-router-dom'

const HatsPage = (props) =>{
  console.log(props)
  return(
    <div>
      <button onClick={()=>
        props.history.push('/topics')
      }>Topics</button>
      <h1>Hats page</h1>
    </div>
  )
}

const Topics = (props) =>{
  return(
    <div>
      <button onClick={()=>
        props.history.goBack(`${props.goBack}`)
      }> back </button>

      <h1>Topics Listing</h1>
      <Link to={`${props.match.url}/13`}>Topics 13</Link><br/>
      <Link to={`${props.match.url}/14`}>Topics 14</Link><br/>
      <Link to={`${props.match.url}/16`}>Topics 16</Link><br/>
      <Link to={`${props.match.url}/17`}>Topics 17</Link><br/>
    </div>
  )
}

const TopicDetail = (props) =>{
  console.log(props);
  return(
    <div>
      
      <button onClick={()=>
      props.history.goBack(`${props.goBack}`)
      }> back </button>

      <h1>Topic Detail Page: {props.match.params.topicId} </h1>
      <h2>Page Path: {props.location.pathname}</h2>

      <button onClick={()=>
      props.history.push('/')
      }>Home</button>
      
    </div>
  )
}


function App() {
  return (
    <div className="App">
        <Route exact path="/" component={HatsPage} />
        <Route exact path="/topics" component={Topics} />
        <Route path="/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;
