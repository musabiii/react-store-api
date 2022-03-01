export enum actions {
  ADJUST_QTY = 'ADJUST_QTY'
}

export interface actionType {
  type: actions;
  payload: any;
}

export interface stateType {
  cart: cartProductType[];
}

export interface productType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image:string
}

export interface cartProductType extends productType {
  qty:number
}