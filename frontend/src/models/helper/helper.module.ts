export interface Response<T> {
  Status: boolean;
  Message: string;
  Error: any;
  Data: T;
}