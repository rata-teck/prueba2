export interface Producto {
  id : number,
  title : string,
  description : string,
  price : number,
  discountPercentage : number,
  rating : number,
  stock : number,
  brand : string,
  category : string,
  thumbnail : string,
  images : Array<string>
}
export interface ListaProducto{
  products : Array<Producto>,
  total : number,
  skip? : number,
  limit : number
}
