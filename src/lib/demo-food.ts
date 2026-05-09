export const restaurant = {
  name: "FSW Donald's",
  slug: "fsw-donalds",
  avatarImageUrl:
    "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQvcNP9rHlEJu1vCY5kLqzjf29HKaeN78Z6pRy",
};

export interface DemoProduct {
  id: string;
  category: string;
  name: string;
  shortName: string;
  price: number;
  imageUrl: string;
  description: string;
  ingredients: string[];
}

export const products: DemoProduct[] = [
  {
    id: "mcoferta-media-big-mac-duplo",
    category: "Combos",
    name: "McOferta Média Big Mac Duplo",
    shortName: "McOferta Média Big Mac D...",
    price: 39.9,
    imageUrl:
      "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQaHB8tslkBUjlHSKiuseLm2hIFzVY0OtxEPnw",
    description:
      "Quatro hambúrgueres (100% carne bovina), alface americana, queijo fatiado sabor cheddar, molho especial, cebola, picles e pão com gergilim, acompanhamento e bebida.",
    ingredients: [
      "Quatro hambúrgueres de carne bovina 100%",
      "Alface americana",
      "Queijo processado sabor cheddar",
      "Molho especial",
      "Cebola",
      "Picles",
      "Pão com gergelim",
    ],
  },
  {
    id: "novo-brabo-melt-onion-rings",
    category: "Combos",
    name: "Novo Brabo Melt Onion Rings",
    shortName: "Novo Brabo Melt Onion...",
    price: 41.5,
    imageUrl:
      "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQeGQofnEPyQaHEV2WL8rGUs41oMICtYfNkphl",
    description:
      "Dois hambúrgueres de carne 100% bovina, maionese especial com sabor de carne defumada, onion rings, bacon, cheddar e molho lácteo no pão tipo brioche.",
    ingredients: [
      "Pão tipo brioche",
      "Hambúrguer de carne 100% bovina",
      "Maionese especial defumada",
      "Onion rings",
      "Fatias de bacon",
      "Queijo processado sabor cheddar",
      "Molho lácteo com queijo tipo cheddar",
    ],
  },
  {
    id: "mccrispy-chicken-elite",
    category: "Combos",
    name: "McCrispy Chicken Elite",
    shortName: "McCrispy Chicken Elite",
    price: 39.9,
    imageUrl:
      "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQr12aTqPo3SsGjBJCaM7yhxnbDlXeL5N9dckv",
    description:
      "Pão tipo brioche com batata, molho Honey&Fire, bacon em fatias, alface, tomate, cheddar e frango temperado e empanado.",
    ingredients: [
      "Pão tipo brioche",
      "Molho Honey&Fire",
      "Bacon em fatias",
      "Alface",
      "Tomate",
      "Queijo sabor cheddar",
      "Peito de frango empanado",
    ],
  },
  {
    id: "duplo-cheddar-mcmelt",
    category: "Lanches",
    name: "Duplo Cheddar McMelt",
    shortName: "Duplo Cheddar McMelt",
    price: 36.2,
    imageUrl:
      "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQWdq0w8niS9XCLQu7Nb4jvBYZze16goaOqsKR",
    description:
      "Dois hambúrgueres de carne bovina, molho lácteo com queijo tipo cheddar, cebola ao shoyu e pão escuro com gergelim.",
    ingredients: [
      "Pão escuro com gergelim",
      "Hambúrguer de carne 100% bovina",
      "Molho lácteo com queijo tipo cheddar",
      "Cebola ao molho shoyu",
    ],
  },
  {
    id: "fritas-grande",
    category: "Fritas",
    name: "Fritas Grande",
    shortName: "Fritas Grande",
    price: 10.9,
    imageUrl:
      "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQNd3jSNrcJroaszwjUAlM6iSO5ZTx2HV70t31",
    description: "Batatas fritas crocantes e sequinhas. Vem bastante!",
    ingredients: ["Batata", "Óleo vegetal", "Sal"],
  },
  {
    id: "coca-cola",
    category: "Bebidas",
    name: "Coca-cola",
    shortName: "Coca-cola",
    price: 5.9,
    imageUrl:
      "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQJS1b33q29eEsh0CVmOywrqx1UPnJpRGcHN5v",
    description: "Coca-cola gelada para acompanhar seu lanche.",
    ingredients: ["Refrigerante Coca-cola"],
  },
];

export const product = products[0];

export const categories = Array.from(
  new Set(products.map((item) => item.category)),
);

export const getProductById = (id: string) =>
  products.find((item) => item.id === id);

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
