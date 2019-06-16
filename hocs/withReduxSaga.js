import nextReduxWrapper from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import store from '@/appRedux/store/index'

export default function (BaseComponent) {
  return nextReduxWrapper(store)(nextReduxSaga(BaseComponent))
}
