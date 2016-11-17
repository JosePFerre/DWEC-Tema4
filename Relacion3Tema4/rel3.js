//RELACION 3 TEMA 4 DAW DWEC
//Jose Pablo Ferre Leorini

function carga_paises(){
    var country_list = ["Select a country","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

    for(country in country_list){
        var x = document.getElementById('countries');
        var option = document.createElement("option");
        option.text = country_list[country];
        x.add(option);
    }
}

function validar(){
    var error = document.getElementById('alerta');
    error.innerHTML = '';
    var valida = new RegExp(/^\w{5,12}$/);
    if(!valida.test(document.getElementsByName('userid')[0].value)){
        error.innerHTML += 'User ID is required and must be of length 5 to 12.<br>';
    };
    var valida = new RegExp(/^\S{7,12}$/);
    if(!valida.test(document.getElementsByName('password')[0].value)){
        error.innerHTML += 'Password is required and must be of length 7 to 12.<br>';
    };
    var valida = new RegExp(/^[A-Za-z\s^\D]{5,30}$/);
    if(!valida.test(document.getElementsByName('name')[0].value)){
        error.innerHTML += 'Name is required and must contain only alphabetes.<br>'
    };
    var valida = new RegExp(/.*/);
    if(!valida.test(document.getElementsByName('countries')[0].value) || document.getElementsByName('countries')[0].value == 'Select a country'){
        error.innerHTML += 'Country must be valid.<br>'
    };
    var valida = new RegExp(/\d{5,10}/);
    if(!valida.test(parseInt(document.getElementsByName('zipcode')[0].value))){
        error.innerHTML += 'Zipcode must be numeric only and must be of length 5 to 10.<br>';
    };
    var valida = new RegExp(/^[-a-zA-Z0-9\_\S.]*[@].*[.].*$/);
    if(!valida.test((document.getElementsByName('email')[0].value))){
        error.innerHTML += 'Email must be valid.<br>';
    };
    if(!document.getElementsByName('sex')[0].checked && !document.getElementsByName('sex')[1].checked){
        error.innerHTML += 'Sex must be selected.<br>';
    }
    if(!document.getElementsByName('language')[0].checked && !document.getElementsByName('language')[1].checked){
        error.innerHTML += 'Language must be selected.<br>';
    }
    if(error.innerHTML==''){
        var enviado = document.getElementById('enviado');
        enviado.innerHTML = 'Your form has been sent successfully.'
    }
};

window.onload = function(){
    carga_paises();
}