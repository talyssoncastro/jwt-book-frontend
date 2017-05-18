import { Injectable } from '@angular/core';

//declare var alertify: any;

@Injectable()
export class NotificationService {
    //private _notifier: any = alertify;

    constructor() { }

    /*
    Opens a confirmation dialog using the alertify.js lib
    */
    openConfirmationDialog(message: string, okCallback: () => any) {
        /*this._notifier.confirm(message, function (e) {
            if (e) {
                okCallback();
            } else {
            }
        });
        */
        okCallback();
    }

    /*
    Prints a success message using the alertify.js lib
    */
    printSuccessMessage(message: string) {
        //this._notifier.success(message);
      console.log(message);
    }

    /*
    Prints an error message using the alertify.js lib
    */
    printErrorMessage(message: string) {
        //this._notifier.error(message);
      console.error(message);
    }
}
