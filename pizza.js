import { mezclarLevadura, añadirAceite, añadirHarinaYSal, amasar, darFormaMasa, prepararBasePizza, hornearPizza, pizzaLista, entregarPizza } from './processes.js';

export function prepararPizza(tipoPizza) {
    mezclarLevadura();
    añadirAceite();
    añadirHarinaYSal();
    amasar();
    darFormaMasa();
    prepararBasePizza();
    
    switch (tipoPizza) {
        case 'pepperoni':
            console.log("Añadiendo tomate");
            console.log("Añadiendo mozzarella");
            console.log("Añadiendo pepperoni");
            break;
        case 'margarita':
            console.log("Añadiendo tomate");
            console.log("Añadiendo mozzarella");
            console.log("Añadiendo albahaca fresca");
            break;
        case 'hawaiana':
            console.log("Añadiendo tomate");
            console.log("Añadiendo mozzarella");
            console.log("Añadiendo jamón");
            console.log("Añadiendo piña");
            break;
        case 'vegetariana':
            console.log("Añadiendo tomate");
            console.log("Añadiendo mozzarella");
            console.log("Añadiendo verduras variadas");
            break;
    }
    
    hornearPizza();
    pizzaLista();
    entregarPizza();
}
