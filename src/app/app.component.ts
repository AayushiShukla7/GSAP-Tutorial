import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTriggerComponent } from './scroll-trigger/scroll-trigger.component';
import { TextComponent } from './text/text.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ScrollTriggerComponent,
    TextComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  
  title = 'GSAP-Tutorial';
  
  @ViewChild('blueBox') blueBox!: ElementRef;
  @ViewChild('greenBox') greenBox!: ElementRef;
  @ViewChild('redBox') redBox!: ElementRef;
  @ViewChild('yellowBox') yellowBox!: ElementRef;
  @ViewChild('staggerBox') staggerBox!: ElementRef;  

  constructor() {
    gsap.registerPlugin();
  }

  // gsap - timeline declaration and initialization
  tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true
  });
    
  ngAfterViewInit() {
    // gsap - to Demo
    gsap.to(this.blueBox.nativeElement, { 
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      easy: 'bounce.out'
    });

    // gsap - from Demo
    gsap.from(this.greenBox.nativeElement, { 
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      easy: 'power1.inOut'
    });

    // gsap - fromTo Demo
    gsap.fromTo(this.redBox.nativeElement, { 
      x: 0,
      rotation: 0,
      borderRadius: '0%'
    },
    { 
      x: 250,      
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      easy: 'expoScale(0.5,7,none)',
      repeat: -1,
      yoyo: true,
    });

    // gsap - timeline Demo    
    this.tl.to(this.yellowBox.nativeElement, { 
      x: 250,
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      ease: 'elastic'
    });

    this.tl.to(this.yellowBox.nativeElement, {
      y: 100,
      scale: 2,
      rotation: 360,
      borderRadius: '100%',
      duration: 1,
      ease: 'slow'
    });

    this.tl.to(this.yellowBox.nativeElement, {
      x: 500,
      scale: 1,
      rotation:360,
      borderRadius: '8px',
      duration: 2,
      ease: 'back.inOut'
    });

    //gsap - stagger Demo
    gsap.to('.stagger-box', { 
      y: 140,
      borderRadius: '100%',      
      rotation: 360,      
      repeat: -1,
      yoyo: true,
      //stagger: 0.5,
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: 'y',
        ease: 'circ.inOut',
        from: 'end'   //'center'
      }
    });
  }

  // #region - Timeline methods
  playPause() {
    if(this.tl.paused()) {
      this.tl.play();
    }
    else {
      this.tl.pause();
    }
  }

  play() {
    this.tl.play();
  }

  pause() {
    this.tl.pause();
  }

  resume() {
    this.tl.resume();
  }

  reverse() {
    this.tl.reverse();
  }

  restart() {
    this.tl.restart();
  }

  // #endregion - Timeline methods
}
