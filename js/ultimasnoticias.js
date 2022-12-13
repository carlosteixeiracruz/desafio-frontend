let slideIndexNoticias = 1;
showSlidesNoticias(slideIndexNoticias);

function plusSlidesNoticias(n) {
  showSlidesNoticias(slideIndexNoticias += n);
}

function currentSlideNoticias(n) {
  showSlidesNoticias(slideIndexNoticias = n);
}

function showSlidesNoticias(n) {
  let i;
  //let slides = document.getElementsByClassName("mySlides");
  let slides = document.getElementsByClassName("mySlidesNoticias");
  let dots = document.getElementsByClassName("dotNoticias");
  if (n > slides.length) {slideIndexNoticias = 1}    
  if (n < 1) {slideIndexNoticias = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexNoticias-1].style.display = "block";  
  dots[slideIndexNoticias-1].className += " active";
}



		function apiNoticias(){
				
					var yourUrl =	"https://labs.inforcedata.com.br/desafio-frontend/noticias.json";
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
						
						var	splitImgArray1  = splitArray1[3].split('"capa": "');
						document.getElementById('imgNoticias1').src= splitImgArray1[1].replace('"', '');					
						
						var	splitTituloArray1  = splitArray1[0].split('"titulo": "');
						document.getElementById('tituloNoticias1').innerText= splitTituloArray1[1].replace('"', '');	
							
						//console.log(splitArray1[1]);
						
						var	splitBairroArray1  = splitArray1[1].split('"sumario": "');
						document.getElementById('bairroNoticias1').innerText= splitBairroArray1[1].replace('"', '');
							
						
						/*CARD 2*/
						var	splitArray2  = splitArray[2].split(',');
						
						//console.log(splitArray3[4]);
						
						var	splitImgArray2  = splitArray2[4].split('"capa": "');
						document.getElementById('imgNoticias2').src= splitImgArray2[1].replace('"', '');
						//console.log(splitImgArray2[1].replace('"', ''));				
						
						
						var	splitTituloArray2  = splitArray2[0].split('"titulo": "');
						document.getElementById('tituloNoticias2').innerText= splitTituloArray2[1].replace('"', '');
						//console.log(splitArray2);
						
						
						var	splitBairroArray2  = splitArray2[1].split('"sumario": "');
						document.getElementById('bairroNoticias2').innerText= splitBairroArray2[1].replace('"', '');
						
						//console.log(splitBairroArray2[3].replace('"', ''));
						
						
						/*CARD 3*/
						var	splitArray3  = splitArray[3].split(',');
						
						var	splitImgArray3  = splitArray3[3].split('"capa": "');
						document.getElementById('imgNoticias3').src= splitImgArray3[1].replace('"', '');	
												
						var	splitTituloArray3  = splitArray3[0].split('"titulo": "');
						document.getElementById('tituloNoticias3').innerText= splitTituloArray3[1].replace('"', '');
						
						var	splitBairroArray3  = splitArray3[1].split('"sumario": "');
						document.getElementById('bairroNoticias3').innerText= splitBairroArray3[1].replace('"', '');
						
						//console.log(splitBairroArray2);
		
						
						/*CARD 4*/
						var	splitArray4  = splitArray[4].split(',');
						
						var	splitImgArray4  = splitArray4[3].split('"capa": "');					
						document.getElementById('imgNoticias4').src= splitImgArray4[1].replace('"', '');
						
						//console.log(splitArray[4]);
						
						var	splitTituloArray4  = splitArray4[0].split('"titulo": "');
						document.getElementById('tituloNoticias4').innerText= splitTituloArray4[1].replace('"', '');
						
						//console.log(splitArray4[1].replace('"', ''));					
						
						
						var	splitBairroArray4  = splitArray4[1].split('"sumario": "');
						document.getElementById('bairroNoticias4').innerText= splitBairroArray4[1].replace('"', '');		
						
						
						/*CARD 5*/
						var	splitArray5  = splitArray[5].split(',');
						
												
						
						var	splitImgArray5  = splitArray5[8].split('"capa": "');
						document.getElementById('imgNoticias5').src= splitImgArray5[1].replace('"', '');
						
						//console.log(splitArray[4]);
						
						var	splitTituloArray5  = splitArray5[3].split('"tipo": "');
						document.getElementById('tituloNoticias5').innerText= splitTituloArray5[1].replace('"', '');
						
						//console.log(splitArray4[1].replace('"', ''));
						
						
						var	splitBairroArray5  = splitArray5[0].split('"bairro": "');
						//document.getElementById('bairroNoticias2').innerText= splitBairroArray2[1].replace('"', '') + " - ";
					
						
						var	splitUfArray5  = splitArray5[2].split('"UF": "');
						document.getElementById('bairroNoticias5').innerText= splitBairroArray5[1].replace('"', '') + " - " + splitUfArray5[1].replace('"', '');
						
						
						
						var	splitQuartosArray5  = splitArray5[5].split('"quartos": "');
						document.getElementById('quartosNoticias5').innerText= splitQuartosArray5[1].replace('"', '');
						
						
						var	splitVagasArray5  = splitArray5[5].split('"quartos": "');
						document.getElementById('vagasNoticias5').innerText= splitVagasArray5[1].replace('"', '');
						
						
						var	splitMetragemArray5  = splitArray5[4].split('"metragem": "');
						document.getElementById('metragemNoticias5').innerText= splitMetragemArray5[1].replace('"', '');
						
						
						
						/*CARD 6*/
						var	splitArray6  = splitArray[6].split(',');
						
												
						
						var	splitImgArray6  = splitArray6[8].split('"capa": "');
						document.getElementById('imgNoticias6').src= splitImgArray6[1].replace('"', '');
						
						//console.log(splitArray[4]);
						
						var	splitTituloArray6  = splitArray6[3].split('"tipo": "');
						document.getElementById('tituloNoticias6').innerText= splitTituloArray6[1].replace('"', '');
						
						//console.log(splitArray4[1].replace('"', ''));
						
						
						var	splitBairroArray6  = splitArray6[0].split('"bairro": "');
						//document.getElementById('bairroNoticias2').innerText= splitBairroArray2[1].replace('"', '') + " - ";
					
						
						var	splitUfArray6  = splitArray6[2].split('"UF": "');
						document.getElementById('bairroNoticias6').innerText= splitBairroArray6[1].replace('"', '') + " - " + splitUfArray6[1].replace('"', '');
						
						
						
						var	splitQuartosArray6  = splitArray6[5].split('"quartos": "');
						document.getElementById('quartosNoticias6').innerText= splitQuartosArray6[1].replace('"', '');
						
						
						var	splitVagasArray6  = splitArray6[5].split('"quartos": "');
						document.getElementById('vagasNoticias6').innerText= splitVagasArray6[1].replace('"', '');
						
						
						var	splitMetragemArray6  = splitArray6[4].split('"metragem": "');
						document.getElementById('metragemNoticias6').innerText= splitMetragemArray6[1].replace('"', '');
						
						
						
                    } else {


                    }
                    };

                    request.onerror = function() {
                    // There was a connection error of some sort
                        console.log("Erro:"+request);
                    };

                    request.send();
                }

               apiNoticias();
			   