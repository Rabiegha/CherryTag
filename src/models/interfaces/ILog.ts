export interface ILog {
  LogID: number;
  TransactionID: number | null; // can be nullable if some logs don't reference a transaction
  ItemID: number | null;        // can be nullable if some logs don't reference an item
  UserID: number;
  Action: string;
  ActionTime: Date;
  Details: string | null;
  CreatedAt: Date;
}

export type ILogCreation = Omit<ILog, 'LogID' | 'CreatedAt'>;
