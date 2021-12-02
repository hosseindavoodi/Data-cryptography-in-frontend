
function update_encrypt_decrypt( id_inputt, type, id_output, id_key ){ 
    var ky = document.getElementById(id_key).value;
    var inputt = document.getElementById(id_inputt).value;
    if( type == 1 ){
        document.getElementById(id_output).innerHTML = CryptoJS.AES.encrypt(inputt, ky);
    }else if( type == 3 ){
        document.getElementById(id_output).innerHTML = CryptoJS.AES.decrypt(inputt, ky).toString(CryptoJS.enc.Utf8);
    }
}