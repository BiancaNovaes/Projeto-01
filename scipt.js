var prompt = require("prompt-sync")();

console.log("\nOlá. Mundo!\n");

console.log(`Todos os dias ao abrir os olhos, despertamos para o Mundo, numa jornada da qual não podemos prever o fim...
De uma coisa temos certeza, na maioria das vezes, somos Héróis e Heroínas, prontos para desbravar a vida!
Digite seu nome para que possamos nos conhecer.
`);

const nome = prompt("Qual o seu nome? ✨  ");

console.log(`\nMuito bom, ${nome}, a partir de agora, você está convidado(a) a testar o seu nivel de Heroísmo, então,
prepare-se para transcender!\n`);

console.log(`Responda 1 para SIM e 0 para NÃO\n`);

let r1;
while (true) {
  r1 = +prompt(
    "⭐ Se um amigo seu falasse com você, da mesma maneira como você fala consigo mesmo, você continuaria sendo seu amigo?  "
  );
  if (r1 == 0 || r1 == 1) {
    break;
  }
  console.log(`Por favor digite 0 ou 1!`);
}

let r2;
while (true) {
  r2 = +prompt("⭐ Hoje você lembrou de agradecer pela sua existência?  ");
  if (r2 == 0 || r2 == 1) {
    break;
  }
  console.log(`Por favor digite 0 ou 1!`);
}

let r3;
while (true) {
  r3 = +prompt(
    "⭐ Tem o hábito de tratar as pessoas, como gosta de ser tratado?  "
  );
  if (r3 == 0 || r3 <= 1) {
    break;
  }
  console.log(`Por favor digite 0 ou 1!`);
}

let r4;
while (true) {
  r4 = +prompt("⭐ Você possui sonhos e objetivos em sua vida?  ");
  if (r4 == 0 || r4 == 1) {
    break;
  }
  console.log(`Por favor digite 0 ou 1!`);
}

let r5;
while (true) {
  r5 = +prompt(
    "⭐ Se hoje fosse o último dia de sua jornada, você faria a mesma coisa que está prestes a fazer?  "
  );
  if (r5 == 0 || r5 == 1) {
    break;
  }
  console.log(`Por favor digite 0 ou 1!`);
}

const res = r1 + r2 + r3 + r4 + r5;

console.log();

if (res == 0) {
  console.log(res + " Você falha miseravelmente.");
}
if (res == 1) {
  console.log(res + " Você falha, mas ainda consegue fugir da situação.");
}
if (res == 2) {
  console.log(
    res +
      " Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco."
  );
}
if (res == 3 || res == 4) {
  console.log(
    res +
      " Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita."
  );
}
if (res == 5) {
  console.log(
    "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações."
  );
}

console.log();
console.log(`Lembre-se: Independente do seu resultado, Herói é aquele que respeita o próximo, transmite felicidade,
compartilha conhecimentos, controla seus pensamentos, dá valor aos momentos simples da vida!!!\n`);
