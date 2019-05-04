import {get} from '../get'

export function getAdData() {
  const result = get('/api/v2/homead')
  return result
}
export function getListData(city, page) {
  const result = get('/api/v2/homelist/' + encodeURIComponent(city) + '/' + page);
  return result
}