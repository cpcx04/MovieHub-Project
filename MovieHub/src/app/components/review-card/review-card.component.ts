import { Component, Input } from '@angular/core';
import { Reviews } from 'src/app/models/reviews-list.interface';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent {

  @Input() comments !: Reviews
}
