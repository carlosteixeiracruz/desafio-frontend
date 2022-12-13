let slideIndexImoveis = 1;
showSlidesImoveis(slideIndexImoveis);

function plusSlidesImoveis(n) {
  showSlidesImoveis(slideIndexImoveis += n);
}

function currentSlideImoveis(n) {
  showSlidesImoveis(slideIndexImoveis = n);
}

function showSlidesImoveis(n) {
  let i;
  //let slides = document.getElementsByClassName("mySlides");
  let slides = document.getElementsByClassName("mySlidesImoveis");
  let dots = document.getElementsByClassName("dotImoveis");
  if (n > slides.length) {slideIndexImoveis = 1}    
  if (n < 1) {slideIndexImoveis = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexImoveis-1].style.display = "block";  
  dots[slideIndexImoveis-1].className += " active";
}



		function apiImoveis(){
				
					var yourUrl =	"https://labs.inforcedata.com.br/desafio-frontend/vitrines.json";
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
						
						var	splitImgArray2  = splitArray1[8].split('"capa": "');
						document.getElementById('imgImoveis1').src= splitImgArray2[1].replace('"', '');
						
						//console.log(splitImgArray2[1].replace('"', ''));				
						
						var	splitArray2  = splitArray1[3].split('"tipo": "');
						document.getElementById('tituloImoveis1').innerText= splitArray2[1].replace('"', '');
						
						
						var	splitBairroArray2  = splitArray1[0].split('"bairro": "');
						//document.getElementById('bairroImoveis1').innerText= splitBairroArray2[1].replace('"', '') + " - ";
						
						
						var	splitUfArray2  = splitArray1[2].split('"UF": "');
						document.getElementById('bairroImoveis1').innerText= splitBairroArray2[1].replace('"', '') + " - " + splitUfArray2[1].replace('"', '');
						
						
						var	splitQuartosArray2  = splitArray1[5].split('"quartos": "');
						document.getElementById('quartosImoveis1').innerText= splitQuartosArray2[1].replace('"', '');
						
						
						var	splitVagasArray2  = splitArray1[5].split('"quartos": "');
						document.getElementById('vagasImoveis1').innerText= splitVagasArray2[1].replace('"', '');
						
						
						var	splitMetragemArray2  = splitArray1[4].split('"metragem": "');
						document.getElementById('metragemImoveis1').innerText= splitMetragemArray2[1].replace('"', '');
						
						
						/*CARD 2*/
						var	splitArray3  = splitArray[2].split(',');
						
						var	splitImgArray2  = splitArray3[8].split('"capa": "');
						document.getElementById('imgImoveis2').src= splitImgArray2[1].replace('"', '');
						
						//console.log(splitImgArray2[1].replace('"', ''));
						
						
						
						var	splitArray2  = splitArray3[3].split('"tipo": "');
						document.getElementById('tituloImoveis2').innerText= splitArray2[1].replace('"', '');
						
						
						var	splitBairroArray2  = splitArray3[0].split('"bairro": "');
						//document.getElementById('bairroImoveis2').innerText= splitBairroArray2[1].replace('"', '') + " - ";
						
						
						var	splitUfArray2  = splitArray3[2].split('"UF": "');
						document.getElementById('bairroImoveis2').innerText= splitBairroArray2[1].replace('"', '') + " - " + splitUfArray2[1].replace('"', '');
						
						
						var	splitQuartosArray2  = splitArray3[5].split('"quartos": "');
						document.getElementById('quartosImoveis2').innerText= splitQuartosArray2[1].replace('"', '');
						
						
						var	splitVagasArray2  = splitArray3[5].split('"quartos": "');
						document.getElementById('vagasImoveis2').innerText= splitVagasArray2[1].replace('"', '');
						
						
						var	splitMetragemArray2  = splitArray3[4].split('"metragem": "');
						document.getElementById('metragemImoveis2').innerText= splitMetragemArray2[1].replace('"', '');
						
						
						
						/*CARD 3*/
						var	splitArray3  = splitArray[3].split(',');
						
						var	splitImgArray2  = splitArray3[8].split('"capa": "');
						document.getElementById('imgImoveis3').src= splitImgArray2[1].replace('"', '');
						
						//console.log(splitImgArray2[1].replace('"', ''));
						
						
						
						var	splitArray2  = splitArray3[3].split('"tipo": "');
						document.getElementById('tituloImoveis3').innerText= splitArray2[1].replace('"', '');
						
						
						var	splitBairroArray2  = splitArray3[0].split('"bairro": "');
						//document.getElementById('bairroImoveis2').innerText= splitBairroArray2[1].replace('"', '') + " - ";
						
						
						var	splitUfArray2  = splitArray3[2].split('"UF": "');
						document.getElementById('bairroImoveis3').innerText= splitBairroArray2[1].replace('"', '') + " - " + splitUfArray2[1].replace('"', '');
						
						
						var	splitQuartosArray2  = splitArray3[5].split('"quartos": "');
						document.getElementById('quartosImoveis3').innerText= splitQuartosArray2[1].replace('"', '');
						
						
						var	splitVagasArray2  = splitArray3[5].split('"quartos": "');
						document.getElementById('vagasImoveis3').innerText= splitVagasArray2[1].replace('"', '');
						
						
						var	splitMetragemArray2  = splitArray3[4].split('"metragem": "');
						document.getElementById('metragemImoveis3').innerText= splitMetragemArray2[1].replace('"', '');
						
						
						
						
						
						
						/*CARD 4*/
						var	splitArray4  = splitArray[4].split(',');
						
												
						
						var	splitImgArray4  = splitArray4[8].split('"capa": "');
						document.getElementById('imgImoveis4').src= splitImgArray4[1].replace('"', '');
						
						//console.log(splitArray[4]);
						
						var	splitTituloArray4  = splitArray4[3].split('"tipo": "');
						document.getElementById('tituloImoveis4').innerText= splitTituloArray4[1].replace('"', '');
						
						//console.log(splitArray4[1].replace('"', ''));
						
						
						var	splitBairroArray4  = splitArray4[0].split('"bairro": "');
						//document.getElementById('bairroImoveis2').innerText= splitBairroArray2[1].replace('"', '') + " - ";
					
						
						var	splitUfArray4  = splitArray4[2].split('"UF": "');
						document.getElementById('bairroImoveis4').innerText= splitBairroArray4[1].replace('"', '') + " - " + splitUfArray4[1].replace('"', '');
						
						
						
						var	splitQuartosArray4  = splitArray4[5].split('"quartos": "');
						document.getElementById('quartosImoveis4').innerText= splitQuartosArray4[1].replace('"', '');
						
						
						var	splitVagasArray4  = splitArray4[5].split('"quartos": "');
						document.getElementById('vagasImoveis4').innerText= splitVagasArray4[1].replace('"', '');
						
						
						var	splitMetragemArray4  = splitArray4[4].split('"metragem": "');
						document.getElementById('metragemImoveis4').innerText= splitMetragemArray4[1].replace('"', '');
						
						
						
						
						
						/*CARD 5*/
						var	splitArray5  = splitArray[5].split(',');
						
												
						
						var	splitImgArray5  = splitArray5[8].split('"capa": "');
						document.getElementById('imgImoveis5').src= splitImgArray5[1].replace('"', '');
						
						//console.log(splitArray[4]);
						
						var	splitTituloArray5  = splitArray5[3].split('"tipo": "');
						document.getElementById('tituloImoveis5').innerText= splitTituloArray5[1].replace('"', '');
						
						//console.log(splitArray4[1].replace('"', ''));
						
						
						var	splitBairroArray5  = splitArray5[0].split('"bairro": "');
						//document.getElementById('bairroImoveis2').innerText= splitBairroArray2[1].replace('"', '') + " - ";
					
						
						var	splitUfArray5  = splitArray5[2].split('"UF": "');
						document.getElementById('bairroImoveis5').innerText= splitBairroArray5[1].replace('"', '') + " - " + splitUfArray5[1].replace('"', '');
						
						
						
						var	splitQuartosArray5  = splitArray5[5].split('"quartos": "');
						document.getElementById('quartosImoveis5').innerText= splitQuartosArray5[1].replace('"', '');
						
						
						var	splitVagasArray5  = splitArray5[5].split('"quartos": "');
						document.getElementById('vagasImoveis5').innerText= splitVagasArray5[1].replace('"', '');
						
						
						var	splitMetragemArray5  = splitArray5[4].split('"metragem": "');
						document.getElementById('metragemImoveis5').innerText= splitMetragemArray5[1].replace('"', '');
						
						
						
						/*CARD 6*/
						var	splitArray6  = splitArray[6].split(',');
						
												
						
						var	splitImgArray6  = splitArray6[8].split('"capa": "');
						document.getElementById('imgImoveis6').src= splitImgArray6[1].replace('"', '');
						
						//console.log(splitArray[4]);
						
						var	splitTituloArray6  = splitArray6[3].split('"tipo": "');
						document.getElementById('tituloImoveis6').innerText= splitTituloArray6[1].replace('"', '');
						
						//console.log(splitArray4[1].replace('"', ''));
						
						
						var	splitBairroArray6  = splitArray6[0].split('"bairro": "');
						//document.getElementById('bairroImoveis2').innerText= splitBairroArray2[1].replace('"', '') + " - ";
					
						
						var	splitUfArray6  = splitArray6[2].split('"UF": "');
						document.getElementById('bairroImoveis6').innerText= splitBairroArray6[1].replace('"', '') + " - " + splitUfArray6[1].replace('"', '');
						
						
						
						var	splitQuartosArray6  = splitArray6[5].split('"quartos": "');
						document.getElementById('quartosImoveis6').innerText= splitQuartosArray6[1].replace('"', '');
						
						
						var	splitVagasArray6  = splitArray6[5].split('"quartos": "');
						document.getElementById('vagasImoveis6').innerText= splitVagasArray6[1].replace('"', '');
						
						
						var	splitMetragemArray6  = splitArray6[4].split('"metragem": "');
						document.getElementById('metragemImoveis6').innerText= splitMetragemArray6[1].replace('"', '');
						
						
						
                    } else {


                    }
                    };

                    request.onerror = function() {
                    // There was a connection error of some sort
                        console.log("Erro:"+request);
                    };

                    request.send();
                }

               apiImoveis();
			   