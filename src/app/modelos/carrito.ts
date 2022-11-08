import {Producto} from './producto';
export interface Carrito {
  id : number,
  products : Array<Producto>,
  total : number,
  discountedtotal : number,
  userid : number,
  totalproducts : number,
  totalquantity : number
}
