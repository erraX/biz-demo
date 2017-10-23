import ajax from './ajax';

export const getUserInfo = ajax('post', '/user/get', {});
