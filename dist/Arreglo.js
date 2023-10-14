"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arreglo = void 0;
class Arreglo {
    constructor() {
        this.array = [];
    }
    clear() {
        this.array.splice(0, this.array.length);
    }
    find(valor) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === valor) {
                return { position: i, value: this.array[i] };
            }
        }
        return { position: -1, value: null };
    }
    show() {
        if (this.array.length === 0) {
            return "Arreglo vacio";
        }
        else {
            return this.array;
        }
    }
    add(valor) {
        let i = 0;
        const letraMayuscula = valor.toUpperCase();
        if (this.array.length >= 20) {
            return "Arreglo lleno";
        }
        if (!this.isLetter(valor)) {
            return "No se pueden asignar valores de ese tipo";
        }
        while (i < this.array.length) {
            const letter = this.array[i];
            const currentMayuscula = letter.toUpperCase();
            if (letraMayuscula < currentMayuscula || (letraMayuscula === currentMayuscula && valor < letter)) {
                break;
            }
            i++;
        }
        this.array.splice(i, 0, valor);
        return "Letra asignada correctamente";
    }
    remove(valor) {
        const valRemove = this.array.indexOf(valor);
        if (valRemove !== -1) {
            this.array.splice(valRemove, 1);
            return `El valor "${valor}" fue eliminado del arreglo.`;
        }
        else {
            return `El valor "${valor}" no se encontró en el arreglo.`;
        }
    }
    modify(valor, valorOriginal) {
        const valModify = this.array.indexOf(valorOriginal);
        if (valModify === -1) {
            return `El valor "${valor}" no se encontró en el arreglo.`;
        }
        this.array[valModify] = valor;
        return "Se cambio el valor";
    }
    isLetter(valor) {
        return /^[A-Za-z]$/.test(valor);
    }
}
exports.Arreglo = Arreglo;
