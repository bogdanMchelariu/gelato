import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MatProgressSpinnerDefaultOptions } from '@angular/material';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent implements OnInit {
  constructor(@Inject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS) private defaults?: MatProgressSpinnerDefaultOptions) {
    this.defaults._forceAnimations = true;
  }

  ngOnInit() {}
}
