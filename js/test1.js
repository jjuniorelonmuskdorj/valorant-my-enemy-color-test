"use strict"
let tempo = Date.now();
let interrupt = true; // evitar multiplos clicks / trava a função.
let interrupt2 = false; // segundo interruptor, 

let redmedtime = 0;
let purplemedtime = 0;
let yellowmedtime = 0;
let yellow2medtime = 0;


let red = 0;
let purple = 0;
let yellow = 0;
let yellow2 = 0;


let img = document.querySelector("#imagem");

let randomtime = 0;
let randomimg = 1;

function Cliqueemmim (){

	if(interrupt == true && interrupt2 == false)
	{
	
		randomtime = Math.floor(Math.random() * 2000 ) + 1000;
		randomimg = Math.floor(Math.random() * 4 ) + 1
		console.log ("variavel adicionada a randomtime: " + randomtime)

			img.setAttribute("src", "images/0.png");
				interrupt = false; // trava a função.
				
					setTimeout(function(){
							console.log	("hello world");
							img.setAttribute("src", "images/" +randomimg + ".png");
							tempo = Date.now(); // obtendo tempo após a troca da img

								interrupt2 = true; // prepara a proxima etapa

									}, randomtime); // 3000 ms = 3 segundos
			}


	else if(interrupt == false && interrupt2 == true)
	{

		if(randomimg == 1)
		{
			redmedtime++;
			red += Date.now() - tempo;
				document.querySelector("#redmedia").innerHTML = (red / redmedtime) + "ms"+ "(" + redmedtime+ ")";
				console.log ( Date.now() - tempo);

					// img.setAttribute("src", "1.png");
					interrupt = true;
					interrupt2 = false;

		}

		else if(randomimg == 2)
		{
			purplemedtime++;
			purple += Date.now() - tempo;
				document.querySelector("#purplemedia").innerHTML = (purple / purplemedtime) + "ms"+ "(" + purplemedtime+ ")";
				console.log ( Date.now() - tempo);

					// img.setAttribute("src", "1.png");
					interrupt = true;
					interrupt2 = false;


		}

		else if(randomimg == 3)
		{
			yellowmedtime++;
			yellow += Date.now() - tempo;
				document.querySelector("#yellowmedia").innerHTML = (yellow / yellowmedtime) + "ms(deuteranopia)"+ "(" + yellowmedtime+ ")";
				console.log ( Date.now() - tempo);

					// img.setAttribute("src", "1.png");
					interrupt = true;
					interrupt2 = false;
		}

		else if(randomimg == 4)
		{
			yellow2medtime++;
			yellow2 += Date.now() - tempo;
				document.querySelector("#yellow2media").innerHTML = (yellow2 / yellow2medtime) + "ms(protanopia)"+ "(" + yellow2medtime+ ")";
				console.log ( Date.now() - tempo);

					// img.setAttribute("src", "1.png");
					interrupt = true;
					interrupt2 = false;
		}
	}

	else{

			console.log	("calma, muito precoce.");
		}
	
}


// Obsoleto
function resetbuttonclick (){

	clearTimeout(esperatrocardecor);

		tempo = Date.now();
		console.log	(tempo)
		img.setAttribute("src", "red.png");

}







