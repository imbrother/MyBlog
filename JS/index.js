window.onload = function ()
{
  // select Js start
  var oLi = document.getElementById("tab").getElementsByTagName("li");
  var oUl = document.getElementById("ms-main").getElementsByTagName("div");
  
  for(var i = 0; i < oLi.length; i++)
  {
    oLi[i].index = i;
    oLi[i].onmouseover = function ()
    {
      for(var n = 0; n < oLi.length; n++) oLi[n].className="";
      this.className = "cur";
      for(var n = 0; n < oUl.length; n++) oUl[n].style.display = "none";
      oUl[this.index].style.display = "block"
    } 
  }
// select Js end
// bgm js start
var c = document.getElementById("music");  
 var music_state =0;
// 音乐按钮
   $("#btn-music").on("click", function(){
  
    if(music_state){
        c.pause();
        music_state = 0;
        $("#btn-music-off").removeClass("hide");
        $("#btn-music-on").addClass("hide");
    }else{
        c.play();
        music_state = 1;
        $("#btn-music-on").removeClass("hide");
        $("#btn-music-off").addClass("hide");
    }
});
   //bam JS end
}