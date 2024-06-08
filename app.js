import promptSync from 'prompt-sync';
import { prepararPizza } from './pizza.js';

const prompt = promptSync();

const pizzasDisponibles = ['pepperoni', 'margarita', 'hawaiana', 'vegetariana'];
const ingredientesDisponibles = ['tomate', 'mozzarella', 'pepperoni', 'albahaca fresca', 'jamón', 'piña', 'verduras variadas', 'aceitunas negras'];

console.log('Pizzas disponibles:');
pizzasDisponibles.forEach((pizza, index) => {
    console.log(`${index + 1}. ${pizza}`);
});

const nombrePizza = prompt('Selecciona el número de la pizza que quieres: ');
const pizzaSeleccionada = pizzasDisponibles[parseInt(nombrePizza) - 1];

if (pizzaSeleccionada) {
    console.log(`Pizza ${pizzaSeleccionada} en preparación`);
    
    let ingredientesElegidos = [];
    let ingrediente;
    
    console.log("Elige los ingredientes adicionales que desees (escribe 'listo' cuando termines): ");
    while (true) {
        ingrediente = prompt('Ingrediente: ').toLowerCase();
        if (ingrediente === 'listo') {
            break;
        }
        if (ingredientesDisponibles.includes(ingrediente)) {
            ingredientesElegidos.push(ingrediente);
            console.log(`${ingrediente} añadido a la pizza.`);
        } else {
            console.log(`Ingrediente no disponible. Ingredientes disponibles: ${ingredientesDisponibles.join(', ')}`);
        }
    }
    
    prepararPizza(pizzaSeleccionada, ingredientesElegidos);
} else {
    console.log('Lo siento, no tenemos esa pizza disponible.');
}

function mezclarLevadura() {
    console.log("Mezclar 30 gramos de levadura fresca con 2½ tazas de agua tibia");
}

function añadirAceite() {
    console.log("Añadir 2 cucharadas soperas de aceite de oliva");
}

function añadirHarinaYSal() {
    console.log("Añadir Harina de fuerza");
    console.log("Añadir 1 cucharadita de sal fina");
}

function amasar() {
    console.log("Amasar bien hasta que deje de ser pegajosa");
}

function darFormaMasa() {
    console.log("Darle forma a la masa para 4 pizzas");
    console.log("4 porciones obtenidas");
}

function prepararBasePizza() {
    console.log("Base para 1 pizza");
    console.log("Dejar la base para 1 pizza reposar durante 45 min");
    console.log("Base con forma circular obtenida");
}

function añadirIngredientes() {
    console.log("Añadido Salsa de tomate");
    console.log("Añadido Mozzarella");
    console.log("Añadido Pepperoni");
    console.log("Añadidas 4 Aceitunas Negras");
}

function hornearPizza() {
    console.log("Horneando la pizza durante 10 min");
}

function pizzaLista() {
    console.log("Pizza lista");
}

function entregarPizza() {
    console.log("Pizza entregada");
}

mezclarLevadura();
añadirAceite();
añadirHarinaYSal();
amasar();
darFormaMasa();
prepararBasePizza();
añadirIngredientes();
hornearPizza();
pizzaLista();
entregarPizza();