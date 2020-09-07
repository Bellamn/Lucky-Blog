/**
 * @author Yuhang Deng
 * Date: 2020/07/15
 */
import Video_upload from './src/video-upload.vue';

Video_upload.install = function(Vue) {
  Vue.component(Video_upload.name, Video_upload)
}

export default Video_upload