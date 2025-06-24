import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  
  title = 'GSAP-Tutorial';
  @ViewChild('blueBox') blueBox!: ElementRef;
    
  ngAfterViewInit() {
    //gsap.registerPlugin();

    gsap.to(this.blueBox.nativeElement, { 
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      easy: 'bounce.out'
    });

    // const tl = gsap.timeline();

    // tl.to(this.box.nativeElement, { duration: 1, x: 100, opacity: 1 })
    //   .to(this.box.nativeElement, { duration: 1, rotation: 360 })
    //   .to(this.box.nativeElement, { duration: 1, scale: 2 });
  }
}
