module.exports = {
    title: "书名",
    description: "描述",
    isban: "编号",
    author: "作者",
    lang: "zh-cn",

    //插件列表
    plugins: ["-lunr", "-search", "search-pro", "code", "expandable-contract-chapters", "back-to-top-button","insert-logo"],
    //插件全局配置
    pluginsConfig: {
        "insert-logo": {
            "url": "/image/logo.jpg",
            "style":"background:none;max-height:60px;min-height:60px"
        }
    },
    //自定义
    variables: {

    }
}