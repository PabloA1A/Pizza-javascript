import  promptSync from "prompt-sync";
import { makePizza } from "./public/scripts/makePizza";
import { deliverPizza } from "./public/scripts/deliverPizza";

function app() {
    const prompt = promptSync();
    const pizzaName = prompt("And your pizza is ... (pepperoni): ");

    let result = makePizza (pizzaName);

    result.then((resolve) => {
        if (resolve === undefined) deliverPizza();
    });  
}

app();