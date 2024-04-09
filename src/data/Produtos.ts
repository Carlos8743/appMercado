import { nanoid } from "nanoid";

const Produtos = [
  {
    id: nanoid(),
    nome: "Batata Inglesa",
    classe: "Horta",
    descricao:
      "Delicie-se com o sabor natural das batatas frescas do Supermercado",
    preco: "4,99/kg",
    linkImg: "../assets/image5.jpg",
    tabelaNutricional:
      "Porção: 100g (1 batata média) | Valor Energético: 86kcal = 359kJ | Carboidratos: 19,2g | Açúcares: 0,8g | Fibra Alimentar: 2,5g | Proteínas: 2,0g | Gorduras Totais: 0,1g | Gorduras Saturadas: 0g | Gorduras Trans: 0g | Sódio: 10mg | Vitamina C: 20mg (33% VD*) | Potássio: 542mg (15% VD*) | Fósforo: 57mg (8% VD*) | Magnésio: 21mg (5% VD*) | Sem adição de conservantes.",
  },
  {
    id: nanoid(),
    nome: "Cenoura",
    classe: "Horta",
    descricao:
      "Desfrute do sabor doce e crocante da cenoura fresca, direto do campo para sua mesa.",
    preco: "R$ 4,99/kg",
    linkImg: "../assets/image3.jpg",
    tabelaNutricional:
      "Valor Energético: 86kcal = 359kJ Carboidratos: 19,2g Açúcares: 0,8g Fibra Alimentar: 2,5g Proteínas: 2,0 Gorduras Totais: 0,1g Gorduras Saturadas: 0g Gorduras Trans: 0g Sódio: 10mg Vitamina C: 20mg (33% VD*) Potássio: 542mg (15% VD*) Fósforo: 57mg (8% VD*) Magnésio: 21mg (5% VD*) Sem adição de conservantes.",
  },
  {
    id: nanoid(),
    nome: "Beterraba",
    classe: "Horta",
    descricao: "Raiz de cor vibrante, com sabor terroso e adocicado.",
    preco: "R$ 4,00/kg",
    linkImg: "../assets/image2.jpg",
    tabelaNutricional:
      "Valor Energético: 43kcal = 180kJ Carboidratos: 9,5g Açúcares: 6,8g Fibra Alimentar: 2,8g Proteínas: 1,6g Gorduras Totais: 0,2g Gorduras Saturadas: 0g Gorduras Trans: 0g Sódio: 78mg Vitamina C: 4,9mg (8% VD*) Potássio: 558mg (16% VD*) Ferro: 1,8mg (10% VD*) Ácido Fólico: 144mcg (36% VD*)",
  },
  {
    id: nanoid(),
    nome: "Cebola",
    classe: "Horta",
    descricao:
      "Versátil na cozinha: utilizada para temperar carnes, legumes, saladas, sopas e diversos pratos.",
    preco: "R$ 4,00/kg",
    linkImg: "../assets/image4.jpg",
    tabelaNutricional:
      "Valor Energético: 43kcal = 180kJ \nCarboidratos: 9,5g \nAçúcares: 6,8g \nFibra Alimentar: 2,8g \nProteínas: 1,6g \nGorduras Totais: 0,2g \nGorduras Saturadas: 0g \nGorduras Trans: 0g \nSódio: 78mg \nVitamina C: 4,9mg (8% VD*) \nPotássio: 558mg (16% VD*) \nFerro: 1,8mg (10% VD*) \nÁcido Fólico: 144mcg (36% VD*)",
  },
  {
    id: nanoid(),
    nome: "Peito de Frango",
    classe: "Açougue",
    descricao:
      "Versátil e nutritivo, o peito de frango é uma ótima opção para o dia a dia. Pode ser grelhado, assado, cozido ou refogado, e combina com diversos acompanhamentos.",
    preco: "R$ 12,00/kg",
    linkImg: "../assets/image6.jpg",
    tabelaNutricional:
      "Porção: 100g (1 filé médio)\nValor Energético: 165kcal = 690kJ\nCarboidratos: 0g\nAçúcares: 0g\nFibra Alimentar: 0g\nProteínas: 31g\nGorduras Totais: 3,6g\nGorduras Saturadas: 1,3g\nGorduras Trans: 0g\nSódio: 72mg\nPotássio: 321mg\nFósforo: 210mg\nVitamina B3: 11mg (6% VD*)\nVitamina B6: 0,3mg (17% VD*)\nVitamina B12: 0,3mcg (5% VD*)\nZinco: 3mg (20% VD*)",
  },
  {
    id: nanoid(),
    nome: "Bife de Fígado",
    classe: "Açougue",
    descricao:
      "O bife de fígado é uma excelente fonte de proteínas, ferro e vitaminas. Pode ser frito, grelhado ou assado, e combina com diversos acompanhamentos.",
    preco: "R$ 15,00/kg",
    linkImg: "../assets/image8.jpg",
    tabelaNutricional:
      "Porção: 100g (1 bife médio)\n\nValor Energético: 127kcal = 532kJ\nCarboidratos: 3,7g\nAçúcares: 0g\nFibra Alimentar: 1,2g\nProteínas: 20g\nGorduras Totais: 4,6g\nGorduras Saturadas: 1,8g\nGorduras Trans: 0g\nSódio: 70mg\nVitamina A: 10.800mcg (120% VD*)\nVitamina B12: 3mcg (50% VD*)\nFerro: 6,5mg (36% VD*)\nFolato: 200mcg (50% VD*)\nZinco: 4mg (27% VD*)",
  },
  {
    id: nanoid(),
    nome: "Bife",
    classe: "Açougue",
    descricao:
      "O bife é uma carne rica em proteínas e ferro, ideal para quem busca uma alimentação nutritiva e saborosa. Pode ser grelhado, frito ou assado, e combina com diversos acompanhamentos.",
    preco: "R$ 18,00/kg",
    linkImg: "../assets/image7.jpg",
    tabelaNutricional:
      "Porção: 100g (1 bife médio)\n\nValor Energético: 254kcal = 1062kJ\nCarboidratos: 0g\nAçúcares: 0g\nFibra Alimentar: 0g\nProteínas: 26g\nGorduras Totais: 15g\nGorduras Saturadas: 6g\nGorduras Trans: 0g\nSódio: 60mg\nFerro: 2,5mg (14% VD*)\nZinco: 5mg (33% VD*)\nVitamina B12: 2mcg (33% VD*)",
  },
  {
    id: nanoid(),
    nome: "Tomate",
    classe: "Horta",
    descricao:
      "O tomate é um fruto rico em vitaminas e minerais, como vitamina C, potássio e licopeno. É versátil na cozinha e pode ser consumido cru, cozido ou assado.",
    preco: "R$ 4,00/kg",
    linkImg: "../assets/image11.jpg",
    tabelaNutricional:
      "Porção: 100g (1 tomate médio)\n\nValor Energético: 18kcal = 75kJ\nCarboidratos: 3,9g\nAçúcares: 2,6g\nFibra Alimentar: 1,2g\nProteínas: 0,9g\nGorduras Totais: 0,2g\nGorduras Saturadas: 0g\nGorduras Trans: 0g\nSódio: 2mg\nVitamina C: 24mg (40% VD*)\nPotássio: 292mg (8% VD*)\nLicopeno: 2,5mg",
  },
  {
    id: nanoid(),
    nome: "Vinho",
    classe: "Bebida",
    descricao:
      "Bebida alcoólica fermentada a partir de uvas. Possui diversas variedades, cores e sabores, podendo ser tinto, branco, rosé ou frisante.",
    preco: "R$ 25.00",
    linkImg: "../assets/image12.jpg",
    tabelaNutricional:
      "Porção: 100ml (1 taça média)\n\nValor Energético: 83kcal = 347kJ\nCarboidratos: 3,2g\nAçúcares: 2,6g\nProteínas: 0g\nGorduras Totais: 0g\nSódio: 9mg\nVitamina C: 4mg (7% VD*)\nPotássio: 108mg (3% VD*)\nPolifenóis: 150mg",
  },
  {
    id: nanoid(),
    nome: "Cerveja",
    classe: "Bebida",
    descricao:
      "Bebida alcoólica fermentada a partir de cereais, principalmente a cevada maltada. Possui diversas variedades, cores e sabores, como pilsen, IPA, stout, weiss e witbier.",
    preco: "R$ 8.00",
    linkImg: "../assets/image.jpg",
    tabelaNutricional:
      "Porção: 350ml (1 lata média)\n\nValor Energético: 153kcal = 640kJ\nCarboidratos: 13g\nAçúcares: 3g\nFibra Alimentar: 2g\nProteínas: 1g\nGorduras Totais: 0g\nSódio: 18mg\nPotássio: 180mg (5% VD*)\nMagnésio: 25mg (7% VD*)\nFósforo: 100mg (14% VD*)\nVitamina B3: 1,5mg (9% VD*)",
  },
  {
    id: nanoid(),
    nome: "Sabão",
    descricao:
      "Produto de limpeza usado para remover a sujidade das mãos, roupas e outros objetos. Possui diversas formas e fragrâncias.",
    preco: "R$ 5.0",
    linkImg: "../assets/image10.jpg",
  },
];
export default Produtos;
