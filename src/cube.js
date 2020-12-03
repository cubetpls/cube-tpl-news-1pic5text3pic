export default {
  data : {
    loading: true,
    carouselList: [],
    textList: [],
    hotTopicList: [],
    picList: []
  },
  onLoad(){
    /*cube 被加载之后 */
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