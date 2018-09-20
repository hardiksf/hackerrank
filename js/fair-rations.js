function fairRations(B) {
    let count = 0;
    const sum = B.reduce((accumulator, currentVaue) => accumulator + currentVaue);

    //If sum of all #s is odd, answer is NO
    if (sum % 2 !== 0) {
        return "NO";

    } else {
        while (B.some(element => element % 2 !== 0)) {
            for (let index = 0; index < B.length - 1; index++) {

                if (B[index] % 2 !== 0) {
                    B[index] = B[index] + 1;
                    B[index + 1] = B[index + 1] + 1;
                    count = count + 2;

                }

            }
        }
        return count;
    }
}

// const B = [2, 3];


const B = [4, 5, 6, 7, 3, 5, 7, 2, 3, 4, 5, 7, 8, 1, 2, 4, 4, 1, 1];

console.log(fairRations(B));




-- -- -
import {
    RegistryElement
} from "@web-component-ecom-registry/registry-element";

import RegistryListController from './crossBrandRegistryList';

class MobileRegistryListController extends RegistryListController {
    get mobileRac() {
        if (typeof this._mobileRac === "undefined") {
            this._mobileRac = wsgc.js.mobile.AddToCartConfirmation;
        }

        return this._mobileRac;
    }

    _onAddToCartSuccess(response) {
        this.mobileRac.openOverlay(response);
    }
}

RegistryElement.define("mobile-registry-list-controller", MobileRegistryListController);

export default MobileRegistryListController;