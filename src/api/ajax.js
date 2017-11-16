/**
 * @file ajax
 * @author niminjie
 */

import Vue from 'vue';
import loading from '@/ui/GlobalLoading';
import message from '@/ui/GlobalMessage';

// 默认的成功、失败结果处理函数
export const resolveResponse = (response = {}) => response.body;
export const resolveError = (error = {}) => error;

// 全局失败处理函数
export const globalFailedHandler = resolver => error => {
    loading.close();

    // Show error message
    const errorMsg = error.msg || '请求失败，请稍候再试！';
    message({ message: errorMsg });

    error = resolver(error);

    // 没有权限
    // ...
    if (error.status === 'NOT_LOGIN') {
        location.href = '#/admin/login';
    }

    throw new Error(resolver(error));
};

// 全局成功处理函数
export const globalSucceedHandler = resolver => response => {
    loading.close();
    return resolver(response);
};

/**
 * 统一ajax请求
 *
 * @param  {string} method 请求方法
 * @param  {string} url    请求地址
 * @param  {Object} params 请求参数
 * @return {Promise}
 */
export default (method, url, {
    showLoading = true,
    responseResolver = resolveResponse,
    errorResolver = resolveError,
}) => params => {
    if (showLoading) {
        loading.show();
    }

    return Vue.http[method](url, params)
        .then(
            globalSucceedHandler(responseResolver),
            globalFailedHandler(errorResolver)
        );
};
