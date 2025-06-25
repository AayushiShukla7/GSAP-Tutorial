import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-scroll-trigger',
  imports: [],
  templateUrl: './scroll-trigger.component.html',
  styleUrl: './scroll-trigger.component.css'
})
export class ScrollTriggerComponent implements AfterViewInit {

  // @ViewChild('scrollPink') scrollPink!: ElementRef;
  // @ViewChild('scrollOrange') scrollOrange!: ElementRef;
  @ViewChildren('myDivs') myDivElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.to('.scroll-box', {
    //   x: 500,
    //   rotation: 360,
    //   borderRadius: '100%',
    //   scale: 2,
    //   scrollTrigger: {
    //     trigger: '.scroll-box',
    //     start: 'bottom bottom',
    //     end: 'top 20%',
    //     scrub: true
    //   },
    //   ease: 'power1.inOut'
    // });

    // Access the nativeElement of each div
    this.myDivElements.forEach((div, index) => {
      console.log(div.nativeElement);

      // You can now manipulate the div's properties or add event listeners
      gsap.to(div.nativeElement, {
        x: 150 * (index + 5),
        rotation: 360,
        borderRadius: '100%',
        scale: 2,
        scrollTrigger: {
          trigger: div.nativeElement,
          start: 'bottom bottom',
          end: 'top 10%',
          scrub: true
        },
        ease: 'power1.inOut'
      });
    });
  }

}
