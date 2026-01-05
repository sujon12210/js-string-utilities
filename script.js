function toUpper(){
  const text = document.getElementById('text').value;
  document.getElementById('result').innerText = text.toUpperCase();
}

function toLower(){
  const text = document.getElementById('text').value;
  document.getElementById('result').innerText = text.toLowerCase();
}
