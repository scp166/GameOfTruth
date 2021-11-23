module.exports = {
    title: "书名",
    description: "描述",
    isban: "编号",
    author: "作者",
    lang: "zh-cn",

    //插件列表
    plugins: ["-lunr", "-search", "search-pro", "code", "expandable-contract-chapters", "back-to-top-button","theme-lou"],
    //插件全局配置
    pluginsConfig: {
      
       
        "theme-lou":
        {
            "color": "#2096FF",
            "favicon": "/image/logo.jpg",
            "logo": "/image/logo.png",
            "logoStyle": "width:200px",
            "url": "http://localhost:4000/",
            "search-placeholder": "Input Keywords to Search",
            "book-summary-title": "GameOfTruth"
        }
    },
    //自定义
    variables: {

    }
}