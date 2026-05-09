# Next Big Food

Aplicação frontend em Next.js que simula o fluxo de pedidos de um restaurante fast food. O projeto não usa banco de dados nem backend: os produtos e informações do restaurante ficam em dados estáticos dentro de `src/lib/demo-food.ts`.

## Tecnologias

- Next.js
- TypeScript
- Tailwind CSS
- ShadCN UI
- Lucide React

## Como rodar

```bash
npm install
npm run dev
```

Depois, acesse:

```txt
http://localhost:3000/fsw-donalds
```

Se a porta `3000` já estiver em uso, o Next.js pode iniciar em outra porta, como `3001` ou `3002`.

## Fluxo da aplicação

### 1. Entrada na aplicação

A rota inicial `/` redireciona o usuário para o restaurante de demonstração:

```txt
/fsw-donalds
```

Essa tela funciona como a página principal do restaurante.

### 2. Tela principal do restaurante

Rota:

```txt
/fsw-donalds
```

Nesta tela o usuário vê:

- capa e avatar do restaurante
- nome e descrição do restaurante
- campo visual de busca
- categorias de produtos
- lista de produtos disponíveis

Cada produto aparece em um card com imagem, nome, descrição curta e preço. Ao clicar em um produto, o usuário navega para a tela de detalhes.

Componente principal:

```txt
src/components/restaurant-home.tsx
```

### 3. Tela de detalhes do produto

Rota:

```txt
/fsw-donalds/menu/[productid]
```

Exemplo:

```txt
/fsw-donalds/menu/mcoferta-media-big-mac-duplo
```

Nesta tela o usuário vê:

- imagem grande do produto
- nome do restaurante
- nome do produto
- preço
- controle de quantidade
- descrição
- lista de ingredientes
- botão `Adicionar à Sacola`

O produto exibido é escolhido pelo `productid` da URL. Se o ID não existir na lista estática de produtos, a aplicação exibe a página 404 do Next.js.

Componentes principais:

```txt
src/app/[slug]/menu/[productid]/page.tsx
src/components/product-flow.tsx
```

### 4. Sacola

A sacola é aberta a partir da tela de produto ao clicar em:

```txt
Adicionar à Sacola
```

ou no ícone de sacola no topo da tela.

Na sacola o usuário vê:

- produto selecionado
- quantidade
- preço unitário
- subtotal
- descontos
- total
- botão `Finalizar Pedido`

A sacola é um estado visual do componente de produto. Ela não salva dados em banco e não persiste ao recarregar a página.

### 5. Cadastro para finalizar pedido

Ao clicar em `Finalizar Pedido`, aparece um modal solicitando:

- nome
- CPF

O usuário pode cancelar ou finalizar.

Essa etapa representa a coleta mínima de dados antes de concluir o pedido. No estado atual, os campos são apenas visuais e não enviam dados para uma API.

### 6. Pedido efetuado

Ao finalizar, a aplicação exibe um modal de sucesso com a mensagem:

```txt
Pedido Efetuado!
```

O usuário pode:

- clicar em `Ver pedidos`
- clicar em `Continuar`

`Ver pedidos` navega para a tela de pedidos.

### 7. Tela de pedidos

Rota:

```txt
/fsw-donalds/orders
```

Nesta tela o usuário vê pedidos demonstrativos com status:

- Em preparo
- Finalizado

Também existe uma seção para pedir novamente, com atalhos para alguns produtos.

Componente principal:

```txt
src/components/orders-page.tsx
```

## Dados da aplicação

Os dados ficam centralizados em:

```txt
src/lib/demo-food.ts
```

Esse arquivo contém:

- dados do restaurante
- lista de produtos
- categorias
- função para buscar produto por ID
- função para formatar preço em real

Para adicionar novos produtos, basta incluir um novo item no array `products`.