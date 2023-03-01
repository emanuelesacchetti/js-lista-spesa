const listaSpesa = [                              //creo array con gli elementi
    'Latte',
    'Uova',
    'Cereali',
    'Pollo',
    'Verdura mista',
    'Passata di pomodoro',
    'Pesce',
    'Piadine'
];

const listDom = document.querySelector('#list'); //riferimento all'UL nel DOM

let i = 0
while ( i < listaSpesa.length){                   //fintanto che i cresca da 0 fino al numero di elementi nella lista
   let listItem = document.createElement('li');   //creo LI
   listItem.append(listaSpesa[i]);                //metto l'elemento della lista nel LI
   listDom.append(listItem);                      //metto il LI(con dentro l'elemento) all'interno dell'UL

    i++                                           
}