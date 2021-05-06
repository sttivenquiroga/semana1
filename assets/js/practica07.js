// Regiones, Ciudades y Platos tipicos
const departamento = () => {
  let dep = prompt(
    "Escoja uno de los departamentos a explorar: \n A: Atlántico  \n B: Boyacá \n C: Cauca \n D: Putumayo"
  );
  if (dep == null) {
    alert("Ingrese un valor");
  } else {
    dep = dep.toLowerCase();
    if (dep != "a" && dep != "b" && dep != "c" && dep != "d") {
      alert("Seleccione un departamento correctamente");
    } else {
      if (dep == "a") atlantico();
      if (dep == "b") boyaca();
      if (dep == "c") cauca();
      if (dep == "d") putumayo();
    }
  }
};
const atlantico = () => {
  let city = prompt(
    "Escoja una de las ciudades a explorar: \n A: Barranquilla \n B: Sabanagrande \n C: Sabanalarga \n D: Tubará"
  );
  if (city == null) {
    alert("Seleccione un dato correctamente");
  } else {
    city = city.toLowerCase();
    if (city != "a" && city != "b" && city != "c" && city != "d") {
      alert("Seleccione una ciudad correctamente");
    } else {
      if (city == "a") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Arepa de huevo \n B: Cazuela de mariscos \n C: Carimanola"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") arepaHuevo();
            if (plat == "b") cazuelaMariscos();
            if (plat == "c") carimanola();
          }
        }
      }
      if (city == "b") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Arroz blanco \n B: Estofado de pollo \n C: Guiso de frijol"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") arrozBlanco();
            if (plat == "b") estofadoPollo();
            if (plat == "c") guisoFrijol();
          }
        }
      }
      if (city == "c") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Cereal de Pancakes \n B: Gallestas de limón \n C: Pescado Blanco con Cebolla"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") cerealPancakes();
            if (plat == "b") galletasLimon();
            if (plat == "c") pescadoBlanco();
          }
        }
      }
      if (city == "d") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Arroz con leche \n B: Tabulé \n C: Fondue de chocolate"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") arrozLeche();
            if (plat == "b") tabule();
            if (plat == "c") fondueChocolate();
          }
        }
      }
    }
  }
};

const boyaca = () => {
  let city = prompt(
    "Escoja una de las ciudades a explorar: \n A: Duitama \n B: Sogamoso \n C: Soraca \n D: Tunja"
  );
  if (city == null) {
    alert("Seleccione un dato correctamente");
  } else {
    city = city.toLowerCase();
    if (city != "a" && city != "b" && city != "c" && city != "d") {
      alert("Seleccione una ciudad correctamente");
    } else {
      if (city == "a") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Hojaldre \n B: Bolitas de queso \n C: Pacitos con carne"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") hojaldre();
            if (plat == "b") bolitasQueso();
            if (plat == "c") pancitosCarne();
          }
        }
      }
      if (city == "b") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Pallares con pescado frito \n B: Pollo rebozado con vegetales \n C: Tortilla francesa"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") pallaresPescado();
            if (plat == "b") polloVegetales();
            if (plat == "c") tortillaFrancesa();
          }
        }
      }
      if (city == "c") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Seccillo flan de Zapallope \n B: Torta de cumpleaños \n C: Ponquesitos de Mickey"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") flanZapallope();
            if (plat == "b") tortaCumpleaños();
            if (plat == "c") ponsqueMickey();
          }
        }
      }
      if (city == "d") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Crema volteada de quinua \n B: Pechuga a la brasa \n C: Pastel de atún"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") volteadaQuinua();
            if (plat == "b") pechugaBrasa();
            if (plat == "c") envueltoPlatano();
          }
        }
      }
    }
  }
};

const cauca = () => {
  let city = prompt(
    "Escoja una de las ciudades a explorar: \n A: Cajibío \n B: El tambo \n C: La Sierra \n D: Morales"
  );
  if (city == null) {
    alert("Seleccione un dato correctamente");
  } else {
    city = city.toLowerCase();
    if (city != "a" && city != "b" && city != "c" && city != "d") {
      alert("Seleccione una ciudad correctamente");
    } else {
      if (city == "a") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Cupcakes de vainilla \n B: Bombitas de camote \n C: Arroz con chorizos"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") cupcakesVainilla();
            if (plat == "b") bombitasCamote();
            if (plat == "c") arrozChorizo();
          }
        }
      }
      if (city == "b") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Rollos de canela \n B: Berenjena en tortilla \n C: Torta de yuca"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") rollosCanela();
            if (plat == "b") berenjenaTortilla();
            if (plat == "c") tortaYuca();
          }
        }
      }
      if (city == "c") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Garbanzos con tocino \n B: Saltadito de coliflor \n C: Hamburguesas"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") garbanzosTocino();
            if (plat == "b") saltaditoColiflor();
            if (plat == "c") hamburguesas();
          }
        }
      }
      if (city == "d") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Alfajores \n B: Pan en sarten \n C: Guiso de carne"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") alfajores();
            if (plat == "b") panSarten();
            if (plat == "c") guisoCarne();
          }
        }
      }
    }
  }
};
const putumayo = () => {
  let city = prompt(
    "Escoja una de las ciudades a explorar: \n A: Colón \n B: Mocoa \n C: Orito \n D: Puerto Asis"
  );
  if (city == null) {
    alert("Seleccione un dato correctamente");
  } else {
    city = city.toLowerCase();
    if (city != "a" && city != "b" && city != "c" && city != "d") {
      alert("Seleccione una ciudad correctamente");
    } else {
      if (city == "a") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Omelette de plátano \n B: Jugo de fresa y guanábana \n C: Pasta a la huancaína"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") omelettePlatano();
            if (plat == "b") jugoFreGua();
            if (plat == "c") pastaHucaina();
          }
        }
      }
      if (city == "b") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Ensalada proteica \n B: Pastel venido del bronceado \n C: Mazapán"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") ensalProt();
            if (plat == "b") pastelVen();
            if (plat == "c") mazapan();
          }
        }
      }
      if (city == "c") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Pan con pejerrey \n B: Rollito de platano \n C: Torticas Esponjosas"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") panPejerrey();
            if (plat == "b") rolPlatano();
            if (plat == "c") tortEsponj();
          }
        }
      }
      if (city == "d") {
        let plat = prompt(
          "Seleccione el plato tipico que desea visualizar: \n A: Enyucado con helado \n B: Keke de platano \n C: Salsa agridulce de ahuyama"
        );
        if (plat == null) {
          alert("Seleccione un plato");
        } else {
          plat = plat.toLocaleLowerCase();
          if (plat != "a" && plat != "b" && plat != "c") {
            alert("Seleccione un plato correctamente");
          } else {
            if (plat == "a") enyucadoHelado();
            if (plat == "b") kekePlatano();
            if (plat == "c") salsaAhuyama();
          }
        }
      }
    }
  }
};

const arepaHuevo = () => {
  alert(
    "Receta de la arepa de huevo: \n 1 cucharadita de sal \n 2 cucharadas de mantequilla \n 10 huevos \n 3 tazas de aceite \n Agua suficiente \n 1/2 cucharadita de azúcar \n 3 tazas de harina de maíz"
  );
};
const cazuelaMariscos = () => {
  alert("Receta de la cazuela de mariscos: \n 1 cucharada de aceite de oliva \n  1/4 cebollas, fileteada \n 2 dientes de ajo, en láminas \n 1 pimiento morrón, cortado en tiras \n 250 gramos de calamar, en aros \n 1 cucharada de pimentón \n 5 jitomates, sin piel, sin semillas, picados finamente \n  6 tazas de agua \n 2 cubos de Knorr ® caldo de camarón \n  250 gramos de camarón, jumbo, limpios y con cabeza \n 200 gramos de mejillón, limpios \n 200 gramos de almeja, limpia \n suficiente de perejil, picado, para decorar");
};
const carimanola = () => {
  alert("Receta de la carimañola: \n al gusto de sal \n 500 gramos de carne de cerdo \n 750 gramos de yuca \n 1/2 taza de aceite vegetal");
};
const arrozBlanco = () => {
  alert("Receta de arroz blanco: \n Ajos (1 diente de ajo o 1 cdta. de ajo molido por cada taza de arroz) \n Arroz \n Agua caliente \n Aceite \n Sal (1 cda. por cada taza de arroz) \n Orégano seco molido (opcional)");
};
const estofadoPollo = () => {
  alert("Receta de estofado de pollo: \n 1 cebolla mediana cortada en cuadritos \n 5 zanahorias cortadas en rodajas \n  5 tomates cortados en cuadritos \n 1 puñado arverjas \n 4 presas pollo \n Sal \n Aceite \n Agua \n 1 cda. Ají colorado (opcional) \n Papas (opcional)");
};
const guisoFrijol = () => {
  alert("Receta de guiso de fríjol: \n 500 grs. (1/2 kilo) frejolitos verdes (frescos) \n 5 papitas medianas cortadas en cuadritos \n 300 grs. carne de res (suavecita) y cortado en cubitos chicos \n 1/2 cebolla cortada en cubitos chicos \n 1 cuchara ajos en pasta");
};
const cerealPancakes = () =>{
  alert("Receta de cereal de pancakes");
};
const galletasLimon = () =>{
  alert("Receta de galletas de limón");
};
const pescadoBlanco = () =>{
  alert("Receta de pescado blanco");
};
const arrozLeche = () =>{
  alert("Receta de arroz con leche");
};
const tabule = () =>{
  alert("Receta de tabule");
};
const fondueChocolate = () =>{
  alert("Receta de fondue de chocolate");
};
const hojaldre = () =>{
  alert("Receta de hojaldre");
};
const bolitasQueso = () => {
  alert("Receta de bolitas de queso");
};
const pancitosCarne = () => {
  alert("Receta de carne");
};
const pallaresPescado = () => {
  alert("Receta de pallares de pescado");
};
const polloVegetales = () => {
  alert("Receta de pollo con vegetales");
};
const tortillaFrancesa = () => {
  alert("Receta de tortilla francesa");
};
const flanZapallope = () => {
  alert("Receta de flan de zapallope");
};
const tortaCumpleaños = () => {
  alert("Receta de torta de cumpleaños");
};
const ponsqueMickey = () => {
  alert("Receta de ponquesitos de Mickey");
};
const volteadaQuinua = () =>{
  alert("Receta de volteada de quinua");
};
const pechugaBrasa = () =>{
  alert("Receta de pechuga a la brasa");
};
const envueltoPlatano = () =>{
  alert("Receta de envuelto de platano");
};
const cupcakesVainilla = () =>{
  alert("Receta de cupcakes de vainilla");
};
const bombitasCamote = () =>{
  alert("Receta de bombitas de camote");
};
const arrozChorizo = () =>{
  alert("Receta de arroz con chorizo");
};
const rollosCanela = () => {
  alert("Receta de rollos de canela");
};
const berenjenaTortilla = () =>{
  alert("Receta de tortilla de berenjena");
};
const tortaYuca = () =>{
  alert("Receta de torta de yuca");
};
const garbanzosTocino = () =>{
  alert("Receta de garbanzos con tocino ");
};
const saltaditoColiflor = () =>{
  alert("Receta de saltadito de coliflor");
};
const hamburguesas = () =>{
  alert("Receta de hamburguesas");
};
const alfajores = () =>{
  alert("Receta de alfajores");
};
const panSarten = () =>{
  alert("Receta de pan en sartén");
};
const guisoCarne = () =>{
  alert("Receta de guiso de carne");
};
const omelettePlatano = () =>{
  alert("Receta de Omelette de plátano");
};
const jugoFreGua = () =>{
  alert("Receta de jugo de fresa y guanabana");
};
const pastaHucaina = () =>{
  alert("Receta de pasta a la hucaina");
};
const ensalProt = () =>{
  alert("Receta de ensalada proteica");
};
const pastelVen = () =>{
  alert("Receta de pastel venido del bronceado");
};
const mazapan = () =>{
  alert("Receta de Mazapán");
};
const panPejerrey = () =>{
  alert("Receta de pan con pejerrey");
};
const rolPlatano = () =>{
  alert("Receta de rollito de platano");
};
const tortEsponj = () =>{
  alert("Receta de torta sponjosa de zanahoria");
};
const enyucadoHelado = () =>{
  alert("Receta de enyucado con helado");
};
const kekePlatano = () =>{
  alert("Receta de keke de platano");
};
const salsaAhuyama = () =>{
  alert("Receta de salsa de ahuyama");
};