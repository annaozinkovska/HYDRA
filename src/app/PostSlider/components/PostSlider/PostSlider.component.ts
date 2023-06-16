import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  interval,
  Observable,
  startWith,
  Subject,
  switchMap,
  timer,
} from 'rxjs';
import { SlidePostInterface } from '../../types/slidepost.interface';
@Component({
  selector: 'post-slider',
  templateUrl: './PostSlider.component.html',
  styleUrls: ['./PostSlider.component.css'],
})
export class PostSliderComponent implements OnInit, OnDestroy {
  @Input() slides: SlidePostInterface[] = [];

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }
  // getCurrenttitleua() {
  //   return this.slides[this.currentIndex].titleua;
  // }
  getCurrentSlidetitleeng() {
    return this.slides[this.currentIndex].titleeng;
  }
  // getCurrenttextua() {
  //   return this.slides[this.currentIndex].textua;
  // }
  getCurrentSlidetexteng() {
    return this.slides[this.currentIndex].texteng;
  }
  getCurrenturlimg() {
    return `url('${this.slides[this.currentIndex].urlimg}')`;
    
  }
  getCurrentSlidehrefbutton() {
    return this.slides[this.currentIndex].hrefbutton;
  }
  // getCurrentSlideNumber() {
  //   return this.slides[this.currentIndex].number;
  // }
  // getCurrentSlidetext() {
  //   return this.slides[this.currentIndex].titile;
  // }
}
