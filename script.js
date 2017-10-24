
$(function() {
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
});

function pb1() {
          baz_az="ATCG";
          nr=0; OK=0;
        	for (var i=0; i<baz_az.length; i++)
        		{    x = document.getElementById("rsp1"+baz_az.charAt(i)).value;
                 if(baz_az.charAt(i) == 'A')
                 	  if (x == '50') {text = 'Corect'; nr++;}
                    	   else text = 'Incorect';
                 if(baz_az.charAt(i) == 'T')
                 	    if(x == '150') {text = 'Corect'; nr++;}
                    	 else text = 'Incorect';
                 if(baz_az.charAt(i) == 'C')
                 	    if(x == '1500') {text = 'Corect'; nr++;}
                    	   else text = 'Incorect';
                 if(baz_az.charAt(i) == 'G')
                 	    if(x == '300') {text = 'Corect'; nr++;}
                    	   else text = 'Incorect';
                 if ( x == 0) {text = 'Invalid'; OK++;}
                 document.getElementById("1"+baz_az.charAt(i)).innerHTML = text;
                 }
            if (OK!=0) alert("Unele campuri au fost lasate necompletate.");
              else if (nr==0) alert("Niciun raspuns corect. Poti vedea rezolvarea.");
              else if(nr==1) alert("Doar un raspuns corect.");
                else if (nr==2) alert("Jumatate dintre raspunsuri sunt corecte. Mai incearca.");
                  else if (nr==3) alert("Aproape toate raspunsurile sunt corecte!");
                    else alert("Felicitari! Problema a fost rezolvata corect!")
          }

function pb2(){
    	 x = document.getElementById("rsp2").value;
            if(x == 0) {text = 'Invalid'; alert("Nu ati completat raspunsul.");}
              else if( x == "84") {text = "Corect"; alert("Felicitari! Raspunsul e corect!");}
     		         else {text = "Incorect"; alert("Raspunsul e gresit. Mai incearca."); }
           document.getElementById(2).innerHTML = text;
      }

function pb3(){
           nr=0; OK=0;
           adn = document.getElementById("rsp3"+"ADN").value;
           arn = document.getElementById("rsp3"+"ARN").value;
           if(adn == 0) {text = 'Invalid'; OK++;}
              else if(adn == "TAACGCGTAGGC") {text = "Corect"; nr++;}
     			  	   else text = "Incorect";
       	   document.getElementById("3"+'ADN').innerHTML = text;
           if(arn == 0) {text = 'Invalid'; OK++;}
              else if(arn == "UAACGCGUAGGC") {text = "Corect"; nr++;}
     			  	   else text = "Incorect";
       	   document.getElementById("3"+'ARN').innerHTML = text;
           if(OK!=0) alert("Unul sau mai multe campuri sunt necompletate.");
            else if(nr==0) alert("Niciun raspuns corect. Poti vedea rezolvarea.");
              else if (nr==1) alert("Un raspuns este corect, celalalt nu. Mai incearca.");
                else alert("Felicitari! Toate raspunsurile sunt corecte!");
}
