const sumar = (num1, num2) => num1 + num2;
console.log(sumar(2, 3));
console.log(sumar(1.2, 3.4));
console.log(sumar(3, -5));

const restar = (num1, num2) => num1 - num2;
console.log(restar(3, 2));
console.log(restar(10, 5.5));
console.log(restar(3, 5));

const multiplicar = (num1, num2) => num1 * num2;
console.log(multiplicar(2, 3));
console.log(multiplicar(4, 0.5));

const dividir = (num1, num2) => num1 / num2;
console.log(dividir(12, 3));
console.log(dividir(8, 4));
console.log(dividir(30, 6));

const saludar = (nombre) => {
    return "Hola"+ " " + nombre;
}
console.log(saludar("Melina"));

const saludarCompleto = (nombre, apellido) => {
    return "Hola"+ " " + nombre + " " + apellido;
}
console.log(saludarCompleto("Melina", "Ada"));

const esPar = (num1) => (num1 % 2 == 0);
console.log(esPar(2));
console.log(esPar(3));

const esImpar = (num1) => (num1 % 2 != 0);
console.log(esImpar(2));
console.log(esImpar(3));

const areaTriangulo = (base, altura) => (base * altura) / 2;
console.log(areaTriangulo(3, 4));
console.log(areaTriangulo(5, 6));

const gritar = (palabra) => "¡" + palabra + "!";
console.log(gritar("aaaaaaaa")); 
console.log(gritar("socorro")); 

const generarEmail = (usuario, dominio = "gmail") => usuario + "@" + dominio + ".com";
console.log(generarEmail("braida", "hotmail"));

const esMayorDeEdad = (edad) => edad >= 18;
console.log(esMayorDeEdad(18));

const haceCalor = (temperatura) => temperatura >= 22;
console.log(haceCalor(22));

const haceFrio = (temperatura) => temperatura <= 12;
console.log(haceFrio(22));





