export interface IItem {
    ItemID: number;
    Name: string;
    Quantity: number;
    PurchaseDate: Date | null;
    State: string;
    QRCode: string;
    Description: string | null;
    CreatedAt: Date;
    UpdatedAt: Date;
  }
  
  export type IItemCreation = Omit<IItem, 'ItemID' | 'CreatedAt' | 'UpdatedAt'>;
  