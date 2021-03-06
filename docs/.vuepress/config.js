const fs = require('fs')
function getSidebar(dir) {
    const files = fs.readdirSync(`${__dirname}/../${dir}`)
    const sidebar = files.map(file => {
        let fileName = file.split('.')[0]
        if (fileName.toUpperCase() === 'README') {
            return ['', '写在开头']
        }
        else {
            return fileName
        }
    })
    return sidebar
}




module.exports = {
    base: '/blog/',
    logo: '/assets/img/logo.jpg',
    title: '菜鸟向前端指南',
    description: 'Fooly Cooly',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    markdown: {
        extractHeaders: ['h2', 'h3', 'h4', 'h5']
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress'
    ],
    themeConfig: {
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '前端博客',
                link: '/frontend/'
            },
            {
                text: '面经',
                link: '/mianshi/'
            },
            {
                text: '杂记',
                link: '/gossip/'
            },
            // {
            //     text: '随笔',
            //     link: 'https://messiahhh.github.io/'
            // },
            // {
            //     text: '简历',
            //     link: 'https://messiahhh.github.io/resume/'
            // }
        ],
        sidebar: {
            '/frontend/': [
                ['', 'HTML'],
                'css',
                'javascript',
                'node',
                'koa',
                'react',
                'react相关库',
                'vue',
                'react-vs-vue',
                'typescript',
                'browser',
                '前端工程化',
                '计算机网络',
                '前端安全',
                '错误监控',
                '网站优化',
                '数据结构',
                '排序',
                '编程题',
                '设计模式',
                // '面试题',
                'mongodb',
                'mysql',
                'git',
                'linux',
                'websocket',
                '代码段记录',
                'php',
                // '其它'
            ],
            '/mianshi/': [
                '',
            ],
            '/gossip/': getSidebar('gossip')
        },
        lastUpdated: '上次更新时间',
        // 一些github的配置
        repo: 'messiahhh/blog',
        repoLabel: 'Github',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Edit this page'
    }
}
