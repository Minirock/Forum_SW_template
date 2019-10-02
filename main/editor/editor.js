var showColor = false;
var showSize = false;

function displayColor(){
	var elt = document.getElementById('picker');
	if(!showColor){
		console.log("Show colors");
		elt.style.display = "block";
	}else{
		console.log("Hide colors");
		elt.style.display = "none";
	}
	showColor = !showColor;
}

function displaySize(){
	var elt = document.getElementById('text-size');
	if(!showSize){
		console.log("Show Size");
		elt.style.display = "inline";
	}else{
		console.log("Hide Size");
		elt.style.display = "none";
	}
	showSize = !showSize;
}

function loadEditor(){
	var input = document.getElementById('editor-content');

	var btnBold = document.getElementById('bold');
	var btnItalic = document.getElementById('italic');
	var btnUnderline = document.getElementById('underline');

	var btnLeft = document.getElementById('left');
	var btnCenter = document.getElementById('center');
	var btnRight = document.getElementById('right');

	var btnRed = document.getElementById('red');
	var btnBlue = document.getElementById('blue');
	var btnGreen = document.getElementById('green');
	var btnYellow = document.getElementById('yellow');
	var btnPink = document.getElementById('pink');

	var btnImage = document.getElementById('img');
	var btnSubtitle = document.getElementById('subtitle');
	var btnTitle = document.getElementById('title');

	var blur = null;

	var clearSelect = function() {
	  input.setSelectionRange(0, 0);
	};

	input.addEventListener('blur', function() {
	    blur = setTimeout(clearSelect, 0);
	  });

	btnBold.addEventListener('focus', function() {
	  if (blur !== null) {
	    clearTimeout(blur);
	    blur = null;
	  }
	});

	[btnBold,btnItalic,btnUnderline,btnLeft,btnCenter,btnRight,btnRed,btnBlue,
		btnGreen,btnYellow,btnPink,btnImage,btnSubtitle,btnTitle].forEach(function(element) {
		element.addEventListener('click', function() {
			var openCode,closeCode;
			switch(element.id){
				//FONT STYLE
				case "bold":
					openCode = "[b]";
					closeCode = "[/b]";
					break;
				case "italic":
					openCode = "[i]";
					closeCode = "[/i]";
					break;
				case "underline":
					openCode = "[u]";
					closeCode = "[/u]";
					break;
				//ALIGNS
				case "left":
					openCode = "[left]";
					closeCode = "[/left]";
					break;
				case "center":
					openCode = "[center]";
					closeCode = "[/center]";
					break;
				case "right":
					openCode = "[right]";
					closeCode = "[/right]";
					break;
				//COLORS
				case "red":
					openCode = "[red]";
					closeCode = "[/red]";
					break;
				case "blue":
					openCode = "[blue]";
					closeCode = "[/blue]";
					break;
				case "green":
					openCode = "[green]";
					closeCode = "[/green]";
					break;
				case "yellow":
					openCode = "[yellow]";
					closeCode = "[/yellow]";
					break;
				case "pink":
					openCode = "[pink]";
					closeCode = "[/pink]";
					break;
				case "img":
					openCode = "[img]";
					closeCode = "[/img]";
					break;
				case "subtitle":
					openCode = "[h2]";
					closeCode = "[/h2]";
					break;
				case "title":
					openCode = "[h1]";
					closeCode = "[/h1]";
					break;
				default:
					openCode = "";
					closeCode = "";
					break;

			}

			var emptyValue = openCode + closeCode;
			var fullText = input.value;
			var startPos = input.selectionStart;
			var endPos = input.selectionEnd;
		  	var selected = input.value.substring(startPos, endPos);
		  	if(selected == ""){
			    input.value = input.value.substring(0, startPos) + emptyValue + input.value.substring(endPos, input.value.length);
		  	}else{
		  		input.value = input.value.replace(selected,openCode+selected+closeCode);
		  	}
		  	clearSelect();
		});
	});
}
