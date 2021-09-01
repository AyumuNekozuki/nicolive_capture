$(function(){

  $(".___addon-controller___3qJ5M.___addon-controller___1q-nm").prepend('<button class="___fullscreen-button___dO6Gz" aria-label="[非公式] CAPTURE" type="button" data-toggle-mode="action" data-toggle-state="false" id="fullscreen-but"><svg id="capcam" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="width: 16px; height: 16px; opacity: 1;" xml:space="preserve"><g><path class="st0" d="M256,224.828c-34.344,0-62.156,28.078-62.156,62.719s27.813,62.719,62.156,62.719s62.156-28.078,62.156-62.719S290.344,224.828,256,224.828z"></path><path class="st0" d="M478.766,135.75h-58.625c-13.078,0-24.938-7.75-30.297-19.781l-17.547-39.313c-5.359-12.016-17.234-19.766-30.313-19.766H170.016c-13.078,0-24.953,7.75-30.328,19.766l-17.531,39.313C116.797,128,104.938,135.75,91.859,135.75H33.234C14.875,135.75,0,150.766,0,169.266v252.328c0,18.5,14.875,33.516,33.234,33.516h244.25h201.281c18.344,0,33.234-15.016,33.234-33.516V169.266C512,150.766,497.109,135.75,478.766,135.75z M256,403.844c-63.688,0-115.297-52.063-115.297-116.297S192.313,171.234,256,171.234s115.297,52.078,115.297,116.313S319.688,403.844,256,403.844z"></path></g></svg></button><style>#capcam g path{fill:white;} button[aria-label="[非公式] CAPTURE"]:hover svg#capcam g path{fill:#0080ff;}');

  $('[aria-label="[非公式] CAPTURE"]').on('click', function() {
    exportplayer();
  });

  $(".___player-display-screen___2uuQ5.___player-display-screen___3T4yr").attr("id", "nicoliveplayer_capture")

  function exportplayer(){
    /*
    html2canvas(document.querySelector("#nicoliveplayer_capture")).then(canvas => { 
      let downloadEle = document.createElement("a");
      downloadEle.href = canvas.toDataURL("image/png");
      downloadEle.download = "canvas.png";
      downloadEle.click();
    });
    */
    
    var video = document.querySelector('video');
    if (video) {
      var canvas = document.createElement('canvas');
      canvas.width = video.clientWidth; canvas.height = video.clientHeight;
      var context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      var image = new Image();
      image.src = canvas.toDataURL('image/png');
      var a = document.createElement('a');
      a.download = `${location.host}_${new Date().toISOString()}.png`;
      a.target = '_blank';
      a.href = image.src; a.click();
    } else {
      alert('There is no video tag.'); 
    }
    
  }

})
