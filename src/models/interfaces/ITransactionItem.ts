export interface ITransactionItem {
    TransactionItemID: number;
    TransactionID: number; // foreign key => Transaction.TransactionID
    ItemID: number;        // foreign key => Item.ItemID
    Quantity: number;
    CreatedAt: Date;
    UpdatedAt: Date;
  }
  
  export type ITransactionItemCreation = Omit<
    ITransactionItem, 
    'TransactionItemID' | 'CreatedAt' | 'UpdatedAt'
  >;
  