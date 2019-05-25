import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses',
    template: `
    
    <h2>{{title}}</h2>
    <img src="{{imageurl}}"/>

    `
})

export class CoursesComponent{
    title = "Pic of the Year"
    imageurl = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
 }
 
 
