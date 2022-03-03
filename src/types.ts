export enum actions {
  ADJUST_QTY = "ADJUST_QTY",
  SET_SORT = 'SET_SORT',
  SET_FILTER_FROM = 'SET_FILTER_FROM',
  SET_FILTER_TILL = 'SET_FILTER_TILL'
}

export interface actionType {
  type: actions;
  payload: any;
}

export interface stateType {
  cart: cartStateType[];
}

export interface productType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface cartStateType {
  id: number;
  qty: number;
}

export interface cartProductType extends productType {
  qty: number;
}


//filter

export interface filterType {
  from:number,
  till:number
}

export interface filterState {
  filter:filterType,
  sort:sortType
}

export enum sortType {
  name = "name",
  price = "price",
}
