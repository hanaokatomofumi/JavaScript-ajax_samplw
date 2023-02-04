let number = 0;
let data = [getData]; // ajax.jsonから取得したデータを格納するための変数を追加
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  $.ajax('ajax.json',{
    success: function(data){
      return data; 
     }}) // ajax.jsonからデータを取得する処理を記述
}

function changeVideo() {
  button.click(function(){
    console.log("test");
   // const videoData = getData(); 
   // videoArea.html(videoData[number].url);
   // titleArea.html(videoData[number].title);
   // contentArea.html(videoData[number].content);
   // number == 2 ? number = 0 : number++;
  });// ボタンがクリックされた際の処理を記述
  // ajax.jsonからデータを取得していない場合のみ、getDataの処理を呼び出す
}

window.onload = changeVideo;