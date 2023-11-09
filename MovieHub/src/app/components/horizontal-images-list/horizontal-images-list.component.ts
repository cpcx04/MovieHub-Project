import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-images-list',
  templateUrl: './horizontal-images-list.component.html',
  styleUrls: ['./horizontal-images-list.component.css']
})
export class HorizontalImagesListComponent{

  @Input() imgList: String[] = [];
}
