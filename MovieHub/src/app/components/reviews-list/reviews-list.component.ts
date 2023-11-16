import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reviews } from 'src/app/models/reviews-list.interface';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent {

  reviews !: Reviews[]

  constructor(private reviewsService: ReviewService,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      this.reviewsService.getFilmReviewById(movieId).subscribe(resp =>{
        this.reviews = resp.results
      })
    })
  }

}
