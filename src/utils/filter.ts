import { productType, sortType } from "../types";

export {};
export function filterIt(list: productType[], from: number, till: number) {
  return list.filter((el) => el.price >= from && el.price <= till);
}

export function sortIt(list:productType[],sortWay:sortType) {

    if (sortWay === sortType.price) {
        return sortByPrice(list)
    }

    if (sortWay === sortType.name) {
        return sortByName(list)
    } 

}

function sortByPrice(list:productType[]) {
    
    return list.sort((a,b)=>{
        if (a.price>b.price) {
            return 1;
        }

        if (a.price < b.price) {
            return -1;
        }

        return 0;
    }) 
}

function sortByName(list:productType[]) {
    
    return list.sort((a,b)=>{
        if (a.title>b.title) {
            return 1;
        }

        if (a.title < b.title) {
            return -1;
        }

        return 0;
    }) 
}