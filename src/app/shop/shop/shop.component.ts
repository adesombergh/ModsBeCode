import { Component, OnInit } from '@angular/core';

import { routerTransition } from '@app/core';

@Component({
  selector: 'anms-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [routerTransition]
})
export class ShopComponent implements OnInit {
  shop = [
    { link: 'projects', label: 'Projects' },
    { link: 'preorders', label: 'Pre-orders' },
    { link: 'orders', label: 'Orders' },
    { link: 'authenticated', label: 'Authenticated' }
  ];

  constructor() {}

  ngOnInit() {}
}
