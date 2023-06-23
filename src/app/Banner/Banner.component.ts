import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Banner',
  templateUrl: './Banner.component.html',
  styleUrls: ['./Banner.component.css']
})
export class BannerComponent implements OnInit {

  banners: string[] = ['assets/Banner1.webp', 'assets/Banner2.gif', 'assets/Banner3.gif', 'assets/Banner4.webp',];
  currentBannerIndex = 0;
  constructor() { }

  ngOnInit() {
    setInterval(() => { this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length; }, 5000)
  }

}
