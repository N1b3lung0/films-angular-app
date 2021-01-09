import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SwiperModule } from 'swiper/angular';
import { RatingModule } from 'ng-starrating';

// Angular Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    ToolbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    SwiperModule,
    MatGridListModule,
    MatCardModule,
    RatingModule,
    PipesModule
  ],
  exports: [
    ToolbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
  ]
})
export class ComponentsModule { }
