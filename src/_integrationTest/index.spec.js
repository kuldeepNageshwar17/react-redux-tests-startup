import { testStore } from '../../utils'
import { fetchPost } from '../actions'
import moxios from 'moxios'

describe('fetchPost action', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  it('store is updated correctly', () => {
    const expectedState = [
      { title: 'title 1', body: 'descrition' },
      { title: 'title 2', body: 'descrition' },
      { title: 'title 3', body: 'descrition' },
      { title: 'title 4', body: 'descrition' }
    ];
    const store=testStore();
    moxios.wait(()=>{
        const request=moxios.requests.mostRecent();
        request.respondWith({status:200,response:expectedState})
    })
    return store.dispatch(fetchPost()).then(()=>{
        const state=store.getState();
        expect(state.PostReducer).toBe(expectedState)
    })
  })
})
