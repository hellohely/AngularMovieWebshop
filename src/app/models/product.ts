export class Product {
    constructor (
        public id: number, 
        public name: string, 
        public description: string,
        public imageUrl: string,
        public year: number,
        public price: number,
     ){}
}