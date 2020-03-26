# 标准资讯 cube 模板，1*n图 + 5文字 + 3图内容

## 介绍
标准资讯类模板，适合新闻资讯、娱乐资讯类场景

## 使用
```
cubetool init <cubeid> -t https://github.com/ntt360/cube-tpl-news-1pic5text3pic.git
```
或简写：
```
cubetool init <cubeid> -t ntt360/cube-tpl-news-1pic5text3pic
```

## UI预览
![标准资讯类模板 UI 预览图](https://github.com/ntt360/cube-tpl-news-1pic5text3pic/blob/master/ui/ui.png)

## data格式
```json
{
  "carousel": [
    {
      "title": "关晓彤暴露床边的人",
      "keywords": "",
      "pic": "https://hao5.qhimg.com/t013e00d4964365b91c.jpg",
      "url": "https://yule.360.cn/detail/608223"
    },
    {
      "title": "焦俊艳与papi做美容",
      "keywords": "",
      "pic": "https://hao5.qhimg.com/t01986a1f6e6311d713.jpg",
      "url": "https://yule.360.cn/detail/608210"
    },
    {
      "title": "韩红至今不嫁的原因",
      "keywords": "",
      "pic": "https://hao5.qhimg.com/t01818f3f22e243e223.jpg",
      "url": "https://yule.360.cn/detail/608225"
    }
  ],
  "textList": [
    {
      "type": "八卦",
      "type_url": "https://yule.360.cn/list?tag=%E5%A8%B1%E4%B9%90%E6%B2%A1%E6%9C%89%E5%9C%88&tonality=%E5%A8%B1%E4%B9%90%E6%B2%A1%E6%9C%89%E5%9C%88",
      "title": "杨幂曝新欢？男方有钱又有颜",
      "url": "https://yule.360.cn/detail/608284"
    },
    {
      "type": "星闻",
      "type_url": "https://yule.360.cn/list?tag=XX%E6%8C%96%E6%8E%98%E6%9C%BA&tonality=XX%E6%8C%96%E6%8E%98%E6%9C%BA",
      "title": "带给你力量与温暖的张韶涵相",
      "url": "https://yule.360.cn/detail/608154"
    },
    {
      "type": "写真",
      "type_url": "https://yule.360.cn/photo",
      "title": "郑爽与成龙冯小刚张国立聚餐",
      "url": "https://yule.360.cn/photo/detail/608234"
    },
    {
      "type": "搞笑",
      "type_url": "https://yule.360.cn/list?tag=%E7%AC%91%E8%AF%9D",
      "title": "娶小13岁的小三前妻却护他",
      "url": "https://yule.360.cn/detail/608221"
    },
    {
      "type": "电影",
      "type_url": "https://yule.360.cn/list?tag=%E5%BD%B1%E8%A7%86",
      "title": "黄圣依被骂这么多年终于洗白",
      "url": "https://yule.360.cn/detail/608192"
    }
  ],
  "hotTopic": [
    {
      "title": "《2019中国好声音》",
      "url": "https://www.360kan.com/va/ZcApaXNy8pQ3Ez.html?haotsfr=qqzghsy2019&go=https%3a%2f%2fv.qq.com%2fx%2fcover%2fmzc00200w8iu85k.html%3fptag%3d360kan.variety.free"
    },
    {
      "title": "追剧",
      "url": "https://yule.360.cn/list?tag=%E7%BB%BC%E8%89%BA&from=hot-toutiao"
    },
    {
      "title": "明星访谈",
      "url": "https://yule.360.cn/list?tonality=%E4%B8%89%E5%85%AD%E9%9B%B6%E8%B7%9D%E7%A6%BB"
    },
    {
      "title": "",
      "url": ""
    }
  ],
  "picList": [
    {
      "title": "不戒烟就逐出娱乐圈",
      "keywords": "胡歌",
      "pic": "https://hao5.qhimg.com/t01ad803d0512c904da.jpg",
      "url": "https://yule.360.cn/detail/608184"
    },
    {
      "title": "又一女星似怀孕",
      "keywords": "唐艺昕",
      "pic": "https://hao5.qhimg.com/t010bd9390cc4fdbbbc.jpg",
      "url": "https://yule.360.cn/detail/608185"
    },
    {
      "title": "爆火的“前男二”",
      "keywords": "朱一龙",
      "pic": "https://hao5.qhimg.com/t01758652d581ea525f.jpg",
      "url": "https://yule.360.cn/detail/608074"
    }
  ]
}
```
