export interface Product {
    id: number
    name: string
    price: number
    image: string
  }
  
  export const products: Product[] = [
    { id: 1, name: "Recycled Paper Notebook", price: 19.99, image: "/recycled notebook.jpg" },
    { id: 2, name: "Upcycled Denim Bag", price: 69.99, image: "/upcyclyed denim bag.jpg" },
    { id: 3, name: "Bamboo Cutlery Set", price: 29.99, image: "/bamboo cutlery set.jpg" },
    { id: 4, name: "Recycled Glass Vase", price: 59.99, image: "/recycled glass vase.jpg" },
  ]
  

  