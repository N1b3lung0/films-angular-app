import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing-response';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Virtual, EffectCube } from "swiper/core";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual, EffectCube]);

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  @Input() movies: Movie[];

  constructor() { }

  ngOnInit(): void {
    
  }

  onSwiper(swiper) {
    
  }
  onSlideChange() {
    
  }

}
