function ajax() {
  let number = 0;
  const btn = document.getElementById('btn');
  btn.addEventListener('click', e => {
    const req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState == 4) {
        if(req.status == 200) {
          const videoArea = document.getElementById("video");
          const titleArea = document.getElementById("title");
          const contentArea = document.getElementById("content");
          videoArea.innerHTML = req.response[number].url;
          titleArea.innerHTML = req.response[number].title;
          contentArea.innerHTML = req.response[number].content;
          number == 2 ? number = 0 : number++
        }
      }
    }
    req.open("GET", "ajax.json");
    req.responseType = "json"
    req.send(null);
  })
}
window.onload = ajax;