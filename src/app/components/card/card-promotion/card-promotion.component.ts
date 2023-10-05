import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-promotion',
  templateUrl: './card-promotion.component.html',
  styleUrls: ['./card-promotion.component.css']
})
export class CardPromotionComponent implements OnInit {
  @Input()
  gamePromotionSave: string = ""
  @Input()
  gamePromotionPercent: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
