$(document).ready(function(){
  var err=false;
  var errore="Compila tutti i campi!";
  var data={};
  $('#btn').click(function(){
    var nome=$("input#firstName").val();
    if (nome=="") {
      err=true;
      $("#firstName").after("<p class='errore'>"+"Compila Nome!"+"</p>");
    }
    var cognome=$("input#lastName").val();
    if (cognome=="") {
      err=true;
      $("#lastName").after("<p class='errore'>"+"Compila Cognome!"+"</p>");
    }
    var mail=$("input#email").val();
    if (mail=="") {
      err=true;
      $("#email").after("<p class='errore'>"+"Compila Email!"+"</p>");
    }
    else {
       var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       if (!filter.test(mail)) {
         $("#email").after("<p class='errore'>"+"Inserire Email VALIDA!"+"</p>");
       }
    }
    var telefono=parseInt($("input#tNumber").val());
    if (telefono=="") {
      err=true;
      $("#tNumber").after("<p class='errore'>"+"Compila Numero!"+"</p>");
    }
    else if (isNaN(telefono)) {
      $("#tNumber").after("<p class='errore'>"+"Inserire Numero VALIDO!"+"</p>");
    }
    var partecipanti=$("input#partNum").val();
    if (partecipanti==0) {
      err=true;
      $("#partNum").after("<p class='errore'>"+"Compila Numero Partecipanti!"+"</p>");
    }
    var commenti=$("textarea").val();


    if (err==true) {
      alert(errore);
    }
    else {
      data["First Name"]=nome;
      data["Last Name"]=cognome;
      data["Email"]=mail;
      data["Number"]=telefono;
      data["Participants Number"]=partecipanti;
      data["Comments"]=commenti;

      console.log(data);
    }


  });
})
