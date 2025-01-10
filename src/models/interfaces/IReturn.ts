export interface IReturn {
    ReturnID: number;
    TransactionID: number;  // foreign key => Transaction.TransactionID
    ReturnQuantity: number;
    ReturnTime: Date;
    Notes: string | null;
    CreatedAt: Date;
  }
  
  export type IReturnCreation = Omit<IReturn, 'ReturnID' | 'CreatedAt'>;
  