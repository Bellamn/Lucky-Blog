<template>
    <div class="d-video">
        <div class="d-video__mobile" ref="d-video-show" id="video-show">
            <div class="d-video__title">移动端录制视频</div>
            <video class="d-video__play"></video>
            <input class="d-video__mbfile" type="file" accept="video/*" ref="take_video" v-on:change="shoot" id="take-video" capture="camcorder"/>
        </div>
        <div class="d-video__pc" >
            <div class="d-video__title">pc端录制视频</div>
            <video class="d-video__play" ref="pc-play" id="pc-play"></video>
            <button @click="pcShot">开启摄像头</button>
            <button @click="pcShot">关闭摄像头</button>
        </div>

        <button  class="d-video__upload" style="margin-top:30px;background: #fc9153;width: 95%;height: 50px;border: none;border-radius: 3px;font-size: 20px;color: #FFFFFF">视频上传</button>
    </div>
</template>

<script>
function pcShot(){
    var video = document.getElementById("pc-play")
    function success(stream) {
        //兼容webkit核心浏览器
        // let CompatibleURL = window.URL || window.webkitURL;

        //将视频流设置为video元素的源
        console.log(stream);
        // function offPlay(){
        //   video.pause()
        //   video.src="";
        //   stream.stop()
        // }

        //video.src = CompatibleURL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
        return offPlay
    }

    function error(error) {
        console.log(`访问用户媒体设备失败${error.name}, ${error.message}`);
    }
    if (navigator.mediaDevices.getUserMedia) {
        //最新的标准API
        navigator.mediaDevices.getUserMedia({video : {width: 1000, height: 1000}}).then(success).catch(error);
    } else if (navigator.webkitGetUserMedia) {
        //webkit核心浏览器
        navigator.webkitGetUserMedia({video : {width: 1000, height: 1000}},success, error)
    } else if (navigator.mozGetUserMedia) {
        //firfox浏览器
        navigator.mozGetUserMedia({video : {width: 1000, height: 1000}}, success, error);
    } else if (navigator.getUserMedia) {
        //旧版API
        navigator.getUserMedia({video : {width: 1000, height: 1000}}, success, error);
    }
}
    

function shoot(event) {
    let that = this
    let video_show = this.$refs.video_show
    video_show.style.display = "block"
    const files = event.target.files;
    if (files && files.length > 0) {
      let file = files[0];
      if (file.size > 50 * 1024 * 1024) {
        alert('视频大于50M，请重新上传');
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('loadend', function(){
        const localVideo = document.getElementById('local-video');
        if (localVideo) {
          localVideo.src = reader.result;
        } else {
          that.flag = false;
          const video = document.createElement('video');
          video.src = reader.result;
          video.id = 'local-video';
          video.style ="width:66%;height:100%;object-fit:fill"
          video.setAttribute('controls', 'controls');
          video_show.appendChild(video);
        }
      })
    } else {
      alert('请重新上传视频');
    }

}
function upload() {
  let token = Storage.getValueForKey(Storage.keys.token)
  if (token === Storage.notFoundValueForKey) {
    MessageBox.alert('缺少token')
    return
  }
  let router = this.$router
  let configure = new NetworkConfig({"token": token,"enctype":"multipart/form-data"})
  configure.configuration.timeout=10000
  let request = new NetworkUtil(configure, true)
  let PersonInfo = this.$route.params["CustomerInfo"]
  const formData = new FormData()
  formData.append("video",this.$refs.take_video.files[0])
  formData.append("name",PersonInfo.name)
  formData.append("customerId",PersonInfo.customerId)
  formData.append("certificateNo",PersonInfo.certificateNo)
  request.postRequest(URLS.baseUrl+URLS.livesDetection,formData,function (result) {
    if(result.error=="Lives_Detection_NOT_PASS"){
      MessageBox.alert("活体检测未通过,请重新拍摄")
    }else{
      HistoryPageManager.goBackSteps(router,3)
    }
  }, function (result) {
      MessageBox.alert(JSON.stringify(result))
  })
}
  export default{
    name: 'Dvideo-upload',
    props: {
    },
    data () {
      return {
   
      }
    },
    methods: {
        shoot,
        upload,
        pcShot,
    },
  }
</script>
