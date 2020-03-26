import Carousel from './components/Carousel/index.js'

export default {
  data : {
    loading: true,
    carouselList: [],
    textList: [],
    hotTopicList: [],
    picList: [],
    carouselTpl: [
      '<a href="{{item.url}}" target="_blank">',
        '<img src="{{item.pic | clipImage:\'120_155_75\'}}" width="120" height="155" alt="">',
        '<p class="ext">',
          '<span class="bg"></span>',
          '<span class="title">{{item.title}}</span>',
        '</p>',
        '<b class="tag" c-hide="!item.keywords">{{item.keywords}}</b>',
      '</a>',
    ].join('')
  },
  onLoad(){
    /*cube 被加载之后 */
    this.createComponent(Carousel)
  },
  onShow(){
    /*cube 展示之后，会被多次调用 */
  },
  onReady(){
    /*cube 被添加到页面之后 */
    this.request({
      api:'list',
      complete: (offlineData, res) => {
        const _this = this
        this.setData({
          loading: false
        })

        if (res && res.errno === 0 && Object.keys(res.data).length > 0) {
          _this.setStorage({
            key: 'data',
            data: res.data
          })
          _this.handleData(res.data)
        } else {
          _this.getStorage({
            key: 'data',
            success (res) {
              const data = res || offlineData
              _this.handleData(data)
            }
          })
        }
      }
    })
  },
  handleData (data) {
    this.setData({
      carouselList: data.carousel,
      textList: data.textList,
      hotTopicList: data.hotTopic,
      picList: data.picList
    })
  },
  onHide(){
    /*cube 被隐藏，会被多次调用 */
  },
  onCollapse(){
    /*cube 被收起，会被多次调用 */
  },
  onExpand(){
    /*cube 被展开，会被多次调用 */
  },
  onUnload(){
    /*cube 被删除 */
  },
  onError(){
    /*cube 无法进入ready状态 */
  }
}