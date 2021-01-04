import Header from './components/header'
import Headline from './components/headline'

import SharedButton from './components/button'
import ListItem from './components/listItem'
import { connect } from 'react-redux'
import { fetchPost } from './actions'
import './app.scss'

const tempArr = [
  {
    fName: 'kuldeep',
    lName: 'nageshwar',
    age: 23,
    email: 'coolkn17@gmail.com',
    onlineStatus: true
  }
]

function App ({ posts,fetchPost }) {
  const fetch = () => {    
    fetchPost()
  }
  const configButton = {
    buttonText: 'get post',
    emitEvent: fetch
  }
  return (
    <div className='App' data-test="appComponent">
      <Header />

      <section className='main'>
        <Headline
          header='Posts'
          desc='click the button to render post'
          tempArr={tempArr}
        />
        <SharedButton {...configButton} />

        {posts.length >0 &&
          posts.map((post,index)=>
            <ListItem  desc={post.body} title={post.title}/>
          )
        }
      </section>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    posts: state.PostReducer
  }
}
export default connect(mapStateToProps, {fetchPost})(App)
