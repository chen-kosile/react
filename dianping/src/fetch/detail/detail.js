import { get } from '../get'

export function getInfoData(id) {
  const result = get(`/api/v2/detail/info/${id}`)
  return result;
}

export function getCommentData(page, id){
  const result = get(`/api/v2/detail/comment/${page}/${id}`)
  return result;
}