import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'item-panel',
  templateUrl: './item-panel.component.jade',
  styleUrls: ['./item-panel.component.sass']
})
export class ItemPanelComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
