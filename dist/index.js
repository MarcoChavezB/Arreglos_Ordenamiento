"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Arreglo_1 = require("./Arreglo");
const readline = __importStar(require("readline"));
const miArreglo = new Arreglo_1.Arreglo();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function mostrarMenu() {
    console.log("\nMenú de Opciones:");
    console.log("1. Agregar un valor");
    console.log("2. Eliminar un valor");
    console.log("3. Buscar un valor");
    console.log("4. Modificar un valor");
    console.log("5. Mostrar el arreglo");
    console.log("6. Limpiar el arreglo");
    console.log("7. Salir");
    rl.question("Seleccione una opción (1-7): ", (opcion) => {
        ejecutarOpcion(opcion);
    });
}
function ejecutarOpcion(opcion) {
    switch (opcion) {
        case "1":
            rl.question("Ingrese un valor (carácter): ", (valor) => {
                const resultado = miArreglo.add(valor);
                console.log(resultado);
                mostrarMenu();
            });
            break;
        case "2":
            rl.question("Ingrese el valor a eliminar: ", (valorEliminar) => {
                const resultado = miArreglo.remove(valorEliminar);
                console.log(resultado);
                mostrarMenu();
            });
            break;
        case "3":
            rl.question("Ingrese el valor a buscar: ", (valorBuscar) => {
                const resultado = miArreglo.find(valorBuscar);
                if (resultado.position !== -1) {
                    console.log(`El valor "${resultado.value}" fue encontrado en la posición ${resultado.position}`);
                }
                else {
                    console.log("El valor no fue encontrado en el arreglo.");
                }
                mostrarMenu();
            });
            break;
        case "4":
            rl.question("Ingrese el valor original: ", (valorOriginal) => {
                rl.question("Ingrese el valor modificado: ", (valorModificado) => {
                    const resultado = miArreglo.modify(valorModificado, valorOriginal);
                    console.log(resultado);
                    mostrarMenu();
                });
            });
            break;
        case "5":
            const contenido = miArreglo.show();
            console.log("Contenido del arreglo:");
            console.log(contenido);
            mostrarMenu();
            break;
        case "6":
            miArreglo.clear();
            console.log("Arreglo limpiado.");
            mostrarMenu();
            break;
        case "7":
            console.log("Saliendo del programa.");
            rl.close();
            break;
        default:
            console.log("Opción no válida. Por favor, elija una opción válida.");
            mostrarMenu();
            break;
    }
}
mostrarMenu();
