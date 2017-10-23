import { Message } from 'element-ui';

const messageCls = 'global-message';

export default function ({
    type = 'error',
    message = '',
    options = {}
} = {}) {
    Message({
        type,
        message,
        customClass: `global-message ${type}`,
        ...options,
    });
};
