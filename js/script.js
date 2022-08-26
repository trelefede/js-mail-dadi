console.log('js ok')

// creo le variabili computer ed utente
const user = Math.floor(Math.random() * 7);
const pc = Math.floor(Math.random() * 7);
console.log('user' + user + 'pc' + pc);

if (user == pc) {
    console.log('Pareggio');
}

if (user !== pc) {
    if (user > pc) {
        console.log('user vince');
    } else {
        console.log('Pc vince');
    }
}


// provo a prendere i valori da un array
const interi = [1, 2, 3, 4, 5, 6];

// assegno alle variabili un indice dell'array a random
const userA = Math.floor(Math.random() * interi.length);
const pcA = Math.floor(Math.random() * interi.length);

// scrivo l'indice randomico assegnato ad ogni variabile
console.log('userA' + userA + 'pcA' + pcA);

//scrivo il valore corrispondete all'indice dell'array
console.log(interi[userA]);
console.log(interi[pcA]);

//if per paragonare i valori
if (userA == pcA) {
    console.log('Pareggio array');
}

if (userA !== pcA) {
    if (userA > pcA) {
        console.log('user array vince');
    } else {
        console.log('Pc array vince');
    }
}