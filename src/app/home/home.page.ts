import {Component} from '@angular/core';
import {StockPage} from '../stock/stock.page';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

}

@Component({
    templateUrl: 'home.page.html'

})

export class HomeTabs {

    tab1Root = StockPage;
    tab2Root = StockPage;
    tab3Root = StockPage;

    constructor() {

    }
}
