function sahovskaPloca(velicina) {

    for (let i = 0; i < velicina; i++) {
        let start = i % 2 === 1 ? ' ' : '#'; //ako je neparno ostavlja prazno polje (bijelo) 

        //triple jednako oznacava da u jednakosti moraju biti isti TIP i VRIJEDNOST

        let temp = ''; //temp sprema uzorak ploce
        for (let j = 0; j < velicina; j++) {
            start = start == '#' ? ' ' : '#'; //sa svakom iteracijom mijenja uzorak 
            temp += start;
        }

        //Print the pattern for the current row
        console.log(temp);
    }
}

sahovskaPloca(8,8);