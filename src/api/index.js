import ajax from './ajax';

export const getUserInfo = ajax('post', '/user/get', {});
export const listPlanData = ajax('post', '/user/listPlanData', {});
