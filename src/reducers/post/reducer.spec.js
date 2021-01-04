import { types } from '../../actions/types'
import PostReducer from './reducer'
describe('post reducer tests', () => {
  it('should return default state', () => {
    const newState = PostReducer(undefined,{})
    expect(newState).toEqual([])
  })
  it('should return a new state if action is passed', () => {
const post =[{title:'test 1'},{title:'test 1'},{title:'test 1'},
{title:'test 1'}]   
const newState = PostReducer(undefined,{
    type:types.GET_POSTS,
    payload:post
})

 expect(newState).toEqual(post)
  })
})