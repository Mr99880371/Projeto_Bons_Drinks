import React from "react";
import "./Drinks.css";
// import CardImage from "../Card/CardImage";
function BuscaDrinks() {
const [requisicao, setRequisicao] = React.useState([]);
async function buscaDrinks() {
console.log("rodando o useEffect");
const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink");
const dados = await response.json();
return setRequisicao(dados.drinks.slice(0, 10));
}
    React.useEffect(() => buscaDrinks(), []);
    return (
        <>
        <div className="conatainerPrincipal">
        <h1>Drinks Populares</h1>
        <div className="containerApi"> 
            {requisicao.map(item =>(
               <div key={item.id} className="containerImagem">
                   <h1>{item.strDrink}</h1>
                   <img src={item.strDrinkThumb} alt="" width="100%"></img>
               </div>
            ))}
        </div> 
        </div>
        </> 
    );
} 
export default BuscaDrinks;