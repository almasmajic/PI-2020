let poruka;

function izracunOcjene(bodovi)  {
if(bodovi<50) {  poruka = "Nažalost, dobili ste 1!"; 
    return 1;
    }

if(bodovi>=50 && bodovi<65) {
    poruka = "Možete i bolje, ali dobili ste 2."; 
    return 2;
    }

if(bodovi>=65 && bodovi<75) {
    poruka = "Dobro je, dobili ste 3!"; 
    return 3;
    }

if(bodovi>=75 && bodovi<90) {
    poruka = "Vrlo dobro! Dobili ste 4!"; 
    return 4;
    }

if(bodovi>=90 && bodovi<100) {
    poruka = "Paa izvrsno, dobili ste 5"; 
    return 5;
    }

}
 
let bodovi = prompt("Unesite broj bodova");
let ocjena=izracunOcjene(bodovi);

console.log(poruka);
