import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

@Component({
  selector: 'app-text',
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent implements AfterViewInit {

  constructor() {
    gsap.registerPlugin(TextPlugin);
  }

  ngAfterViewInit(): void {

    // Animate text/heading
    gsap.to('#text', {
      ease: 'power1.inOut',
      opacity: 1,
      y: 0,
      duration: 1.5,
    });

    // Animate paragraph
    gsap.fromTo('.para', {
      opacity: 0,
      y: 20
    }, 
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1,
      stagger: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.in'
    });

  }

}
