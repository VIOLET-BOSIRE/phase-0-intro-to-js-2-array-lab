// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
 cats.push("Ralph");
 const copyOfCats=[...cats]
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
    const copyOfCats =[...cats]
}
function destructivelyRemoveLastCat(){
    cats.pop()
    const copyOfCats =[...cats]
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    const copyOfCats =[...cats]
}
function appendCat(names)
{
    return cats.concat(names)
}
function prependCat(name){
    return[name,...cats]
}
function removeLastCat(){
    return cats.slice(0,cats.length-1)
}
function removeFirstCat(){
    return cats.slice(1,cats.length)
}
