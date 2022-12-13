	function apiCarrossel()	{
		
					var yourUrl =	"https://labs.inforcedata.com.br/desafio-frontend/banners.json";
                    let resp;
                    let request = new XMLHttpRequest();
                    request.open('GET', yourUrl, true);
		

                    request.onload = function() {
                    if (request.readyState == 4 && (request.status >= 200 && request.status < 400)) {
                        // Success!
                        resp = request.responseText;
						resp2 = resp.replace('[', '');
						
						
						var splitArray = resp2.split("{");
						
						var	splitArray1  = splitArray[1].split(',');						
						var	splitTag1Array1  = splitArray1[0].split('"titulo": "');
						document.getElementById('titulocarrossel1').innerText= splitTag1Array1[1].replace('"', '');
												
						var	splitTag1Array1  = splitArray1[1].split('"imagem": "');
						document.getElementById('carrossel1').src= splitTag1Array1[1].replace('"', '');
						console.log(splitTag1Array1[1]);
						
						
						var	splitArray2  = splitArray[2].split(',');						
						var	splitTag1Array2  = splitArray2[0].split('"titulo": "');
						document.getElementById('titulocarrossel2').innerText= splitTag1Array2[1].replace('"', '');
												
						var	splitTag1Array2  = splitArray2[1].split('"imagem": "');
						document.getElementById('carrossel2').src= splitTag1Array2[1].replace('"', '');
						console.log(splitTag1Array2[1]);							
                    } else {


                    }
                    };

                    request.onerror = function() {
                    // There was a connection error of some sort
                        console.log("Erro:"+request);
                    };

                    request.send();
                }

               apiCarrossel();
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}