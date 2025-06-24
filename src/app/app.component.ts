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
  @ViewChild('greenBox') greenBox!: ElementRef;
  @ViewChild('redBox') redBox!: ElementRef;
  @ViewChild('yellowBox') yellowBox!: ElementRef;

  // gsap - timeline declaration and initialization
  tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true
  });
    
  ngAfterViewInit() {
    gsap.registerPlugin();

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
  }

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
}
