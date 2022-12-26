let f = document.getElementById('formular');

f.addEventListener("submit", function (ev) {
    let polje;

    //Ime
    polje = document.getElementById('name');

    if (polje.value == null || polje.value == "") {
        ev.preventDefault();
        alert('Molim unesite Vase ime!');
        polje.focus();
        return false;
    }

    korisnickoIme = polje.value.trim();
    malaSlova = "qwertzuiopšđžasdfghjklčćyxcvbnm";
    velikaSlova = "QWERTZUIOPŠĐŽASDFGHJKLČĆYXCVBNM";
    let tekuciKarakter;

    for (let i = 0; i < korisnickoIme.length; ++i) {
        tekuciKarakter = korisnickoIme.charAt(i);

        if (
            malaSlova.indexOf(tekuciKarakter) === -1 &&
            velikaSlova.indexOf(tekuciKarakter) === -1
        ) {
            ev.preventDefault();
            alert('Greska pri unosu imena');
            polje.focus();
            return false;
        }
    }

    //Prezime
    polje = document.getElementById('surname');

    if (polje.value == null || polje.value == "") {
        ev.preventDefault();
        alert('Molim unesite Vase prezime!');
        polje.focus();
        return false;
    }

    korisnickoIme = polje.value.trim();
    malaSlova = "qwertzuiopšđžasdfghjklčćyxcvbnm";
    velikaSlova = "QWERTZUIOPŠĐŽASDFGHJKLČĆYXCVBNM";

    for (let i = 0; i < korisnickoIme.length; ++i) {
        tekuciKarakter = korisnickoIme.charAt(i);

        if (
            malaSlova.indexOf(tekuciKarakter) === -1 &&
            velikaSlova.indexOf(tekuciKarakter) === -1
        ) {
            ev.preventDefault();
            alert('Greska pri unosu prezimena');
            polje.focus();
            return false;
        }
    }

    //Telefon
    polje = document.getElementById('tel');
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (polje.value == '' || !regex.test(polje.value || polje.value.indexOf(0) != '+' || polje.value.indexOf(0) != '0')) {
        ev.preventDefault();
        alert('Greska pri unosu broja telefona');
        polje.focus();
        return false;
    }

    //Mail
    polje = document.getElementById('mail');
    polje.value.trim();

    if (polje.value == null || polje.value == '') {
        ev.preventDefault();
        alert('Molim unesite Vas email');
        polje.focus();
        return false;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mailformat.test(polje.value)) {
        ev.preventDefault();
        alert("Ne validna email adresa!");
        polje.focus();
        return false;
    }


    //Naziv firme
    polje = document.getElementById('company_name');

    polje.value.trim();

    if (polje.value == null || polje.value == '') {
        ev.preventDefault();
        alert('Molim unesite naziv Vase firme');
        polje.focus();
        return false;
    }

    //PIB firme
    //Ne sme da ima ni manje ni vise od 9 cifara!!!
    polje = document.getElementById('pib');

    let cifre = '0123456789';
    let duzina = polje.value.length;
    
    if (polje.value == '' || polje.value == null || duzina != 9){
        ev.preventDefault();
        alert('Molim pravilno unesite pib Vase firme!');
        polje.focus();
        return false;
    }

    for (let i = 0; i < duzina; i++) {
        tekuciKarakter = polje.value.charAt(i);

        if (cifre.indexOf(tekuciKarakter) === -1) {
            ev.preventDefault();
            alert('Molim pravilno unesite pib Vase firme!');
            polje.focus();
            return false;
        }
    }
});

f.addEventListener("reset", function (ev) {
    const treba_resetovati = window.confirm('Da li zelite da ponistite unos?');

    if (!treba_resetovati) {
        ev.preventDefault();
        return false;
    }
    return true;
});