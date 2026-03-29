console.log("String".length); // 6

console.log("String"[2]); // "r"

console.log("String".charAt(2)); // "r"

console.log("String".indexOf("t")); // 3

console.log("String".toLowerCase()); // "string"
console.log("String".toUpperCase()); // "STRING"

console.log("   String   ".trim()); // "String"

console.log("String".substring(1, 4)); // "tri"
//String
//012345


console.log("Hashir".concat(" Hasmy")); // "Hashir Hasmy"


let lang = "Java_JavaScript_Python";
let languages = lang.split("_");
console.log(languages[1]); // "JavaScript"

console.log("Hello World World".replace("World", "Hashir")); // "Hello Hashir World"
console.log("Hello World World".replaceAll("World", "Hashir")); // "Hello Hashir Hashir"

console.log("Hello World".includes("World")); // true


console.log("Hashir".padEnd(10, "*")); // "Hashir****"

console.log("Hashir".startsWith("Ha")); // true
console.log("Hashir".endsWith("ir")); // true
