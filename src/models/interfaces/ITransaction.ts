export interface ITransaction {
    TransactionID: number;
    UserID: number;        // foreign key => User.UserID
    Quantity: number | null;
    QuantityReturned: number | null;
    StartTime: Date;
    EndTime: Date | null;
    Status: string;
    Notes: string | null;
    CreatedAt: Date;
    UpdatedAt: Date;
  }
  
  export type ITransactionCreation = Omit<
    ITransaction, 
    'TransactionID' | 'CreatedAt' | 'UpdatedAt'
  >;
  