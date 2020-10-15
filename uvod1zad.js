let n = 1000;

function suma(n){
    let zbroj = 0;
    for (i=1; i<=n; i++){
        zbroj += i;
    }
        return zbroj;
}

console.log(`Suma brojeva od 1 do ${n} je ${suma(n)}`)

/* 2.nacin AKA 6.zadatak (Gauss)
    -preko aritmetickog niza
    function suma(n){
        let zbroj=(n*(1+n))/2
        return zbroj;
    }
*/