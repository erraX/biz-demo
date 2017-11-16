import { Loading } from 'element-ui';

/**
 * loading classes
 *
 * @type {string}
 */
const loadingCls = 'global-loading';

/**
 * Loading instance
 *
 * @type {Loading}
 */
let loadingInstance = null;

/**
 * Loading count
 *
 * @type {Number}
 */
let loadingCount = 0;

/**
 * Show loading
 */
function show(text = '正在拼命加载中...') {
    loadingCount++;

    if (!loadingInstance) {
        loadingInstance = Loading.service({
            customClass: loadingCls,
            fullscreen: true,
            text,
        });
    }
}

/**
 * Close loading
 */
function closeLoadingIfNeeded() {
    loadingCount--;

    if (loadingCount <= 0 && loadingInstance) {
        loadingInstance.close();
        loadingInstance = null;
    }
}

export default {
    show,
    close: closeLoadingIfNeeded,
}
