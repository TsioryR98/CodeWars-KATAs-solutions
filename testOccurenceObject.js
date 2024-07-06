const tableau = [1, 2, 3, 2, 1, 3, 4,4,4, 5, 4, 6];
const occurrences = {};

tableau.forEach(chiffre => {
    if (occurrences[chiffre]) {
        occurrences[chiffre]++;
    } else {
        occurrences[chiffre] = 1;
    }
});

//console.log(occurrences);


const tableau1 = [1, 2, 3, 2, 1, 3, 4, 5, 4, 6,6 ,6];
const occurrences1 = {};

tableau1.forEach(chiffre => {
    occurrences1[chiffre] = (occurrences1[chiffre] || 0) + 1;
});

//console.log(occurrences1);

/*
L'expression (counts[num] || 0) + 1 est une façon concise de mettre à jour le compteur d'occurrences pour un chiffre donné dans un objet en JavaScript. Voici comment cela fonctionne :

counts[num] : Cette partie de l'expression vérifie si la clé num existe dans l'objet counts. Si la clé existe, elle renvoie la valeur associée à cette clé (le nombre d'occurrences du chiffre), sinon elle renvoie undefined.
|| 0 : L'opérateur || est l'opérateur logique OU. Si la valeur de counts[num] est undefined (c'est-à-dire que la clé n'existe pas encore), cette partie de l'expression renverra 0. Cela permet d'initialiser le compteur à 0 si la clé n'existe pas encore.
Enfin, on ajoute 1 à ce résultat, ce qui incrémente le compteur d'occurrences du chiffre num.
En résumé, cette expression combine une vérification de l'existence de la clé dans l'objet avec une incrémentation du compteur en une seule ligne de code concise.

*/ 



const tableaux1 = [[1, 2, 3], [2, 3, 4, 5, 2], [1, 2, 0, 4]];
const occurrences3 = {};

// Compter les occurrences de chaque chiffre
tableaux1.forEach(tableau => {
    tableau.forEach(chiffre => {
        //occurrences3[chiffre] = (occurrences3[chiffre] || 0) + 1;
        if (occurrences3[chiffre]) {
             occurrences3[chiffre]++
        } else {
            occurrences3[chiffre] = 1
        }
    });
});

// Trouver la clé avec l'occurrence la plus élevée
let maxOccurrence = 0;
let maxKey = ""; //null ou none

for (const key in occurrences3) {
    if (occurrences3[key] > maxOccurrence) {
        maxOccurrence = occurrences3[key];
        maxKey = key;
    }
}
console.log(occurrences3)
console.log("Clé avec l'occurrence la plus élevée :" + maxKey);
console.log("Occurrence la plus élevée :"+ maxOccurrence);



let choice = ["Gran_Turismo Mission_Impossible Elementaire Barbie Oppenheimer Taken_3" , "Oppenheimer Never_say_never Mission_Impossible Barbie" , "Gran_Turismo Barbie Transformers Never_say_never" , 
"Gran_Turismo Barbie Transformers Never_say_never"
]
function movieChoice(movies) {
    let titleOfMovie = {};
    movies.forEach(subArray => {
        subArray.split(" ").forEach(movie => {
            if (titleOfMovie[movie]) {
                titleOfMovie[movie]++;
            } else {
                titleOfMovie[movie] = 1;
            }
        });
    });

    let topChoices = [];
    for (let i = 0; i < 2; i++) {
        let maxChoice = 0;
        let titleGroup = "";
        for (const title in titleOfMovie) {
            if (titleOfMovie[title] > maxChoice && !topChoices.includes(title)) {
                maxChoice = titleOfMovie[title];
                titleGroup = title;
            }
        }
        topChoices.push(titleGroup);
    }

    return `Les 2 meilleurs films du groupe sont ${topChoices[0]} avec ${titleOfMovie[topChoices[0]]} choix et ${topChoices[1]} avec ${titleOfMovie[topChoices[1]]} choix.`;
}

console.log(movieChoice(choice));
