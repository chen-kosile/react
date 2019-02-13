import * as actionTypes from '../constants/store';

const initialState = [
  { id: 1},
  { id: 2}
];

export default function storeReducer (state = initialState, action) {
  switch (action.type) {
    // 这个地方由于写成了USERINFO_UPDATE而在 City组件会使用dispatch action type为USERINFO_UPDATE,导致这里也会跟更新数据
    case actionTypes.STORE_UPDATE:
      return action.data;
    case actionTypes.STORE_ADD:
      state.unshift(action.data);
      return state;
    case actionTypes.STORE_RM:
      return state.filter(item => {
        return item.id !== action.data.id
      })
    default:
      return state;
  }
}