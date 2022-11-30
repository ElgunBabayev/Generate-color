let backcolor = document.getElementById('rand-color')
let colorpath = document.getElementById('path')
let copy = document.querySelector('.btn')


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    backcolor.style.backgroundColor = color;
    colorpath.innerText = color;
  }

  copy.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const colorcode = colorpath.innerText;
	
	if(!colorcode) { return; }

	textarea.value = colorcode;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});
  
  