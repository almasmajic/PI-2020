let lista = [
    {
    ime: "Marko",
    prezime: "Marković",
    upisan: true
    },

    {
    ime: "Iva",
    prezime: "Ivić",
    upisan: true
    },

    {
    ime: "Lucija",
    prezime: "Lucić",
    upisan: false
    },

    {
    ime: "Nikola",
    prezime: "Nikolić",
    upisan: true
    },

    {
    ime: "Lea",
    prezime: "Lovrinčić",
    upisan: true
    },

    {
    ime: "Ivan",
    prezime: "Horvat",
    upisan: true
    },

    {
    ime: "Pero",
    prezime: "Perić",
    upisan: false
    },

    {
    ime: "Ana",
    prezime: "Anić",
    upisan: false
    },

    {
    ime: "Petra",
    prezime: "Petrović",
    upisan: true
    },

    {
    ime: "Igor",
    prezime: "Tvorić",
    upisan: true
    }
   ];

function provjeri(lista, pojam){
    for (let i=0; i<10; i++){
        if((lista[i].ime || lista[i].prezime)==pojam){
            if(Boolean(lista[i].upisan)){
                return true;
            }
        }
    }
}

console.log(provjeri(lista, "Petra"));