export class Order {
    constructor (
        public id: number,
        public companyID: number,
        public created: Date,
        public createdBy: any,
        public paymentMethod: string,
        public totalPrice: number,
        public status: number,
        public orderRows: [],
    ){}
}