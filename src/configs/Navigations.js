export default [
    {
        key: 'home',
        label: '首页',
        link: '/',
        childLinks: [],
    },
    {
        key: 'promotion',
        label: '推广管理',
        link: '/user/listPlan',
        childLinks: [],
    },
    {
        key: 'report',
        label: '统计报告',
        link: '/user/getReportList',
        childLinks: [
            {
                key: 'base-report',
                label: '基础报告',
                link: '/user/getReportList',
            },
            {
                key: 'audiences-report',
                label: '受众报告',
                link: '/user/audiencesReport',
            },
        ],
    },
]
