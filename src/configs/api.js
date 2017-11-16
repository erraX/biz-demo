import ajax from '../utils/ajax';

export default {
  getUserInfo: ajax('post', '/user/get', {}),
  listPlanData: ajax('post', '/user/listPlanData', {}),
}