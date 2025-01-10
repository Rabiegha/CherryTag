/**
 * The main interface describing our User table’s columns
 */
export interface IUser {
    UserID: number;
    Name: string;
    Email: string;
    Password: string;
    Role: 'Admin' | 'User';
    CreatedAt: Date;
    UpdatedAt: Date;
  }
  
/**
 * Fields that can be omitted when creating a new User (if auto-increment PK)
 */
export type IUserCreation = Omit<IUser, 'UserID' | 'CreatedAt' | 'UpdatedAt'>;
  