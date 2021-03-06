import { Component,Input, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero:Hero;

  constructor(
    private _route: ActivatedRoute,
    private _heroService: HeroService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void
  {
    const id = +this._route.snapshot.paramMap.get('id');
    this._heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this._location.back();
  }
  

}
