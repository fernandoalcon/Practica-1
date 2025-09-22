console.log("Nombre: Fernando Alcon Gutierrez");
console.log("CI: 9166311");
console.log("Materia: Programación Web III");
console.log("Fecha: Septiembre 2025");

//EJERCICIO 1: Contar vocales
function contarVocales(txt) {
    let r = {a:0, e:0, i:0, o:0, u:0};
    for(let c of txt.toLowerCase()) {
        if(r.hasOwnProperty(c)) r[c]++;
    }
    return r;
}
let obj = contarVocales("euforia");
console.log(obj);

// EJERCICIO 2: Invertir cadena
function invertirCadena(texto){  
    let r = "";  
    for(let i=texto.length-1;i>=0;i--){  
        r+=texto[i];  
    }  
    return r;  
}  
console.log(invertirCadena("HolaMundo"));

// EJERCICIO 3: Separar pares e impares
function separar(nums){
    let r={par:[],impar:[]};
    for(let i=0;i<nums.length;i++) {
        if(nums[i]%2==0){
            r.par.push(nums[i]);
        } else {
            r.impar.push(nums[i]);
        }
    }
    return r;
}
let obj2 = separar([1,2,3,4,5,6,7,8,9,10]);
console.log(obj2);

// EJERCICIO 4: Encontrar mayor y menor
const valores = [10,20,30,40,50];
let may=valores[0];
let men=valores[0];
for(let num of valores) {
    if(num>may){ 
        may=num;
    }else if(num<men){
        men=num
    }
}
console.log( may,men);

// EJERCICIO 5: Verificar palíndromo
function esPalindrome(cadena) {
    const cadenaLimpia = cadena.toLowerCase().replace(/\s+/g, ""); 
    let cadenaInvertida = "";
    for(let i = cadenaLimpia.length-1; i >= 0; i--) {
        cadenaInvertida += cadenaLimpia[i];
    }
    return cadenaLimpia === cadenaInvertida;
}
console.log(esPalindrome("oruro"));
console.log(esPalindrome("hola"));

// EJERCICIO 6: Intercambiar valores
let x = 2;
let y = 3;
console.log("x=",x);
console.log("y=",y);
[x,y]=[y,x]
console.log("x=",x);
console.log("y=",y);


// EJERCICIO 7: Desestructuración
const numeros = [1,2,3,4,5];
const [resto]=numeros;
console.log(resto);

// EJERCICIO 8: Callback después de 2 segundos
function saludo(callback) {  
    console.log("hola");  
    setTimeout(() => {  
        callback();  
    }, 2000);  
}  
function despedida() {  
    console.log("adiós");  
}  
saludo(despedida);

// EJERCICIO 9: Promesa después de 3 segundos
const promesa = new Promise((resolve) => {
    setTimeout(() => resolve('Holamundo'),3000);
});
promesa.then(resultado => console.log(resultado));

// EJERCICIO 10: Explicación callbacks vs promesas
console.log("Los callbacks son adecuados para operaciones asíncronas simples, pero pueden llevar a callback hell en casos complejos.");
console.log("Las promesas son ideales para manejar múltiples operaciones asíncronas de forma encadenada y con mejor manejo de errores.");

// EJERCICIO 11: Encadenamiento de promesas
const primeraPromesa = () => new Promise(resolve => resolve(5));
primeraPromesa()
    .then(v => v * 2)
    .then(v => console.log(v));

// EJERCICIO 12: Async/await para callbacks anidados
function esperar(s) {
    return new Promise(res => {
        setTimeout(res, s * 1000);
    });
}
async function run() {
    await esperar(1);
    console.log("1 seg");
    await esperar(1);
    console.log("2 seg");
    await esperar(1);
    console.log("3 seg");
}
run();

// EJERCICIO 13: Explicación async/await
function paso1(x) { return Promise.resolve(x + 1); }
function paso2(x) { return Promise.resolve(x * 2); }
async function ejecutar() {
const r1 = await paso1(1);
const r2 = await paso2(r1);
console.log('Resultado:', r2);
}

// EJERCICIO 14: Convertir promesa a callback
function obtenerDatoCallback(cb) { 
    setTimeout(()=>{ 
        cb(null,"¡Listo!"); 
    }, 1000); 
} 
obtenerDatoCallback((err,res)=>{ 
    if(err)console.error(err); 
    else console.log("Callback:",res); 
});

// EJERCICIO 15: Convertir callback a promesa
function getData(text,cb){ 
    cb(`hola ${text}`) 
} 
getData("Mundo",res=>{ 
    console.log(res); 
});

// EJERCICIO 16: Migrar promesas a async/await
function obtenerNumero() { 
    return new Promise(resolve => { 
        setTimeout(() => resolve(10), 1000); 
    }); 
} 
async function main() { 
    try { 
        let n = await obtenerNumero(); 
        console.log("Async/await:",n); 
    } catch(err) { 
        console.error("Error:", err); 
    } 
} 
setTimeout(() => {
    main();
}, 2500);