
		function apiMaisAcessadas()	{
				
					var yourUrl =	"https://labs.inforcedata.com.br/desafio-frontend/cloudtags.json";
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
						var	splitTag1Array2  = splitArray1[0].split('"tag": "');
						document.getElementById('tag1').innerText= splitTag1Array2[1].replace('"', '');
						
													
						var	splitArray2  = splitArray[2].split(',');						
						var	splitTag2Array2  = splitArray2[0].split('"tag": "');
						document.getElementById('tag2').innerText= splitTag2Array2[1].replace('"', '');
						
						var	splitArray3  = splitArray[3].split(',');						
						var	splitTag3Array3  = splitArray3[0].split('"tag": "');
						document.getElementById('tag3').innerText= splitTag3Array3[1].replace('"', '');
						
						var	splitArray4  = splitArray[4].split(',');						
						var	splitTag4Array4  = splitArray4[0].split('"tag": "');
						document.getElementById('tag4').innerText= splitTag4Array4[1].replace('"', '');
						
						var	splitArray5  = splitArray[5].split(',');						
						var	splitTag5Array5  = splitArray5[0].split('"tag": "');
						document.getElementById('tag5').innerText= splitTag5Array5[1].replace('"', '');
						
						
                    } else {


                    }
                    };

                    request.onerror = function() {
                    // There was a connection error of some sort
                        console.log("Erro:"+request);
                    };

                    request.send();
                }

               apiMaisAcessadas();
			   