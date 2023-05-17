function loadHTML(event) {
    var xhr = new XMLHttpRequest();
    var url = event.target.id + '.html';
    xhr.open('GET', url, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var target = document.getElementById("target");
        target.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  document.querySelector(".propClone").addEventListener("click",loadHTML);
