const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
cats.push(name);
}


function destructivelyPrependCat(){
    cats.unshift("Bob");
}


 function destructivelyRemoveLastCat(){
    cats.pop();
}


function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat() {
    let newCatsArray = [...cats, "Broom"];
    return newCatsArray;
  }let newCatsArray = appendCat();
  

  function prependCat() {
    let newCatsArray = ["Arnold", ...cats];
    return newCatsArray;
  }let newCatsArray2 = appendCat();
  

  function removeLastCat() {
    let copyOfCats=cats.slice(0,2)
return copyOfCats;
  }
  let copyOfCats2=removeLastCat();
  



function removeFirstCat(){

    let copyOfCats3=cats.slice(1)
    return copyOfCats3;
  }
  let copyOfCats4=removeFirstCat();
  console.log(copyOfCats4)
