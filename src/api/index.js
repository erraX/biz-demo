export const getUserInfo = query => fetch({
    url: '/user/get',
    method: 'post',
    params: query,
});
