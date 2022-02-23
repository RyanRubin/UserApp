import { ResponseJson } from "./models/response-json";

export class Util {
  static toPromise(observable: any, isSilent?: boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      observable.subscribe({
        next: (data: ResponseJson) => {
          if (data.errorMessage) {
            if (isSilent) {
              console.warn(data.errorMessage);
            } else {
              alert(data.errorMessage);
            }
            reject(data.errorMessage);
            return;
          }
          resolve(data.returnValue);
        },
        error: (err: any) => {
          if (isSilent) {
            console.warn(err.message);
          } else {
            alert(err.message);
          }
          reject(err.message);
        }
      });
    });
  }
}
