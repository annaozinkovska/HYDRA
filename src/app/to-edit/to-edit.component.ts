import { Component, Output } from '@angular/core';
import { AddEventListenerOptions } from 'rxjs/internal/observable/fromEvent';
import {  OnInit } from '@angular/core';
import { ElementRef, Renderer2, RendererStyleFlags2 } from '@angular/core';
import { Navigation } from '@angular/router';
import { PaginationMethods } from 'swiper/types/modules/pagination';
@Component({
  selector: 'app-to-edit',
  templateUrl: './to-edit.component.html',
  styleUrls: ['./to-edit.component.scss']
})
export class ToEditComponent implements OnInit {
  @Output() contacts = [{title: 'Pay Us a Visit',
    text: 'Union St, Seattle, WA 98101, United States',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAIAAAC1w6d9AAAEhklEQVRYhbVZPXMbOQx9oHSR7FRq/BGnuV8SsfGc5LmbyS91kbE244byL0mTi2w16WIrJ/FdsR/SLkHuSpYxbrwkwUcCDwAhQV3clwUMxBhoQr8BBL9f7Oc/1QmhNukb+g3EgGt787HLqlykrkUSU+vL5NPkPD3nIXsiGC4lvJ1cdkX2kC0J3xFWtXacBDf/+gSGyLriMwBcttgfFgA+fF3Gxly2iMMCQIE8ZE8J7QJgnj3uD6vcAYwdvaPamAbjviwOhgVAEHVN9nQahRrc3ffwu0G4XIQEwfAPouBwmX42e31GkBR6MmVZiPRDcP3wzPQbO/2gqnDup6x+Nx3IR3fdNVN+AP2OBSJ9ly1252sXzqiBrB1x0+RKLPiFKO3kkojen1Dc7bfq334XpTU5HeJl1fjmbhf2c82LXbbYuR7hf2v7zxXKW6yPVrNgTt5X/xnEXVgVa0fK13fhLrtqKX/05tmjuys8Mr+8UA3pK681yaiji7ai9snN9EAlRubZU24yO7kklSBaHUnhZrvfyN6H2RHK4KQAN/2QILsBQ2htytfBl8YGJ4F16/plcFLAHLxTwHkCMJDgSlvtazbpcWtHCQ7m4HKf08kuBoDBcBgu3GWvhqyXRoY8Rkwv+fKsejoAMeVVnQYABO7uuwBws4XUr5QUO9XrCJ3wbXWHmz2GRqsyZphhSR9xdur2isACfUupYqcXoT9JyT7F7CzGgjUaPd39Mpa/7U17JaiEiAqRRnYTGwhdTQJXLfW3EKKQkLDVMYfD5o1Kz6AIegG4waAGNFIsEbTTqy7AlORRorF2xIoQIqS30/PKaoFBpW7QSILtUtFX0uDpbg6w12fjyQVBPv/KK50CkOrajWpTrVETNW1Mity1+pV+gG3RhA8Kem9vtoValJj7g+siW5OpsXiXB3Zyqaa5Rl11fGQ4DQlSK5iQpzkFGmR4+obIrB2FAXO3YEKZEDU9nCefaAdI7ZJinjSeXHSZBoKr54Zfu9tvGJxItRUBAb1v7Sc0NwhzKAB6NqJ8FFydEG72r5h+W/EiXHv7d5NDATL1dURQmgRMPHTJjZ1eRfoaUWmcv5kf1YIJorzGOByoVAUg0ptnj3vBQr0WV5Ahnp4bXQxrR3pF+iphVe5G+mTaw5/0bvajAW781/n+T5yklOVu9MRu9qOZOouF5tPkrDk5TohKCuP2elgT9BCEVNtOXT2n1MV8XAd3v4yVSYhksEQ/gT7eKEDO0+A5XoJTeo4uW4DKTbQmVjVlp56W8YgPgmFfrniV1E/bJd+HT2IxvXZmufuleOrRUotzxapsgV7PXjeNrm+huGk3zqfAaRliX1GRdWswXZ9tq+FAiggZ6e8dLJ2QoWwgxscpODK+rshQtZZSDnBMfIfkli5xFQA9YTo9YQ5nwMHgcqH38IJ19Dchrbfwuny8F75iOxKQWvEsIkaCSJvMAR3BqXH/lcJEG3svOTq+8eTimGdNdfz3kTyhHdkKubzmCqs8+ybIKnH3S2w2+S6tO5GEbKPM2yJrSAkUxW+W280FQWXwP6osas45MCkJAAAAAElFTkSuQmCC'
  },
  {title: 'Give Us a Call',
    text: '(110) 1111-1010',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAEp0lEQVRoge1aPXMbOQx9WDuWlVRqfOdMmvsnZuMZOVV+qQqPtTfXMP4lbnLZKE2aTKL70OIKyfKawK4Ikuu5Qq9KaPHjLQjwASRwxBFHHKGCXmAOv2j2/3YfLseebhRKfvGAyZSIAFb+zADAzKjg5uUZFqbkbxs6tY3JLbv3JYkVo5RApgtmcje/FFlJAUp+8VBN3zC3+Yvh9Q/34bfcUTL7+7qhoruXwZkOlrWaGD7MjxGCCMwgOjhlJqt0SsN8mBkErNdyI/m6AYBBdjmsEikN8NmSiVmQrxu0TFWlj7P+meZXpwl9AIC1r0HE7cbdvI0cY0vbLz8TKazofJq2tBQr6SYi4orc9UXKgH98pY0SMNOOLN3owyjLB4C7vuCTCsK1iMgvHuzLM0I10cDn9IsGZ4//2bR4VfW5mXXkPpgpfay/yEGu5srBP6AnuP3XvX+ndFk2YRhkXN38alqhbeP520Y2MhQ3uK9XA/qIqtP7eqX8YXoebj96DPrRMPrSiWwiuZHu6xWrGrwDBktWzs24FR1lyyBslOQZwu0/QYuvm4N8dn3BfvmnmCPs23dw9cHwa++/gcP5pEuYJB9RaHc3v5ShzxT3LB/g+zpo4Db0Ir9UPISZeav1NAUkXUUOi7NX8cu0qIeTSmSpcoliyxG5+VPI+vj7KjS1dBVFmihO3AeLlUh8PLnvBUfePHO2qLTqsFgfQop6eAJHzP33oQ8sCYgvZUIeJQEW8QOTQ+uTXfLyYwsllj+WyxU6DdU+ZvjbRhHdmqIPWyzLtIQHaoP5lRNjOsH6r+e9QOCnqCBtoqhVMXW7iV+mgX7MieHcTNl70JjsEIoP77+JvsrpNwCjLymuMglbpueG8aTfrMXpF6dF9rBR0nZNOIJzs3hBJPWhIj6M8c9opamwCeDvwuPfzS8ZrIiAR2z1hOSji27jGovkS72lD183YOxLQTs36y+2xCdjAzCXUxis7I0z3X9MhSs1JVGTsWGkSA9FpzGYsuqJPVU0s4mQph6YW5l7Uow4GhpUtBAlmAhplNz8kmWNyp5R7+HvvsrKK3ObZvZUjfdacZ7kej9VijWSt3Eipb7Dxy8/W4dSbatUIKKRrsTVr0ioTEm1HhUYOfeCWcmFYijqDeg90ysL4Lx8KfvKTCsmRgb0goG7i+wUUCsmxsYJ/bo994I0l5JzMyWg96m17g+Wq4KBu4sSiXpSQCfNYeLvpgZQgFJCQC8euLsoU04xBfS+qFDqQUexChGfKHWSavpG+6nalv9sYodilNz1hcx5mVt/96nb4msR9AH1+iMZRet404lS7qmepWTqTXNBE6EsJedmrFWn9sHA140sX3Cb+xwlQOFqq7t5qxgKu1tkNbKXfeaF4pTQV8g/O1dvMpkNNcdIjPLEUKmKMFCR2HW5ck5FeSthq9CF8FO8qGhU6E41CvxdQ9XQ4PmP1PowipUA4LVQ6AFEobgURnyBPPQarPR71i7GfVStlmYBXM1tD05MGG3jAei5dLDeRFgx+tN3kcmPEri7GNdKAEDPrvVGCtzBhKNjH9DHC9xdjG8lPGXyL8AHL0PJuRkzlcrDjzji/4n/AOwY9JZgvWtbAAAAAElFTkSuQmCC'
  }, {title: 'Send Us a Message',
    text: 'Contact@HydraVTech.com',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAtCAIAAACF9GTsAAAB1UlEQVRYhe3ZwWqDMBzH8d//Xxl7gg7ZaU8ycinIYLAn3WkVdnF9kh279gXWQpv/DkG71mjUxJlBv5dCK/IhGokpoax4/URyixlBBNNGhMNRPd+fvjAfxfKLOALfeaJFPaUwylW+EcTlqyLQY3ZHRb6mckTjTPSBYx3E3zET89QIR8SciNZEzVdcIONPKSLHTZe4TgCm2WM2D2i6aJVvBbr9GPflFuhVvg1EuqwLEV2UGA3akYiOSowAbSTaJolFKXK0HhoQ2kIU2zSyjeWehWk8aBuRCdryk/2Kq8V8JGg7US3sD5PG+3IM6DBimxKhoYOJDiXCQX2IbiVCQD2JnZTwg/oTuyoxFBqE2EOJ/tBQxH5K9IEGJMK9cqulFvPifUsa9Vc5gf7IN6I1Mwckou9YVtCmEQWEmOzvekOJGKaEA2rLg4jBSvSC+hHho0QFdeVJhKcSBgppfIMjEognEQPmeD2VpQCKfA0hnOYNYf+tXh78z48gSpOxjlTsWwamqzJcV2W4rspw/Q+l7al+I8Xb+s8lZWLZy7Qoo9sdJmLEvfUPAAJGEtnI1RJoNkuvqSWNCURlKQNQWRojlEhEm6XW2U1ZLDfmX4mJXGVEIMFuVy1PfwBvUxTw9lAkRgAAAABJRU5ErkJggg=='
  }]
 

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer2) { }
    button=-345;
    public changeslaid() {
      const box = this._elementRef.nativeElement.querySelector('.slaider_mobile');
      this._renderer.setStyle(box, 'left', this.button+`px`, RendererStyleFlags2.Important + RendererStyleFlags2.DashCase);
      console.log('Invoked ---< ');
    }
  public ngOnInit() {
    console.log('Initiaed');
  }
  public prev(){
    if((this.button>-1)&&(this.button<690)){
      this.button= this.button -345
  console.log(` n0/${this.button}`);
  this.changeslaid() 
  }  
   else{
      this.button=+345
          this.changeslaid()
          console.log(`n 2/${this.button}`);
    }
  }
public next(){
  if((this.button>-1)&&(this.button<690)){
    this.button= this.button-345
console.log(` n0/${this.button}`);
}  
 else{
    this.button=+345
        console.log(`n 2/${this.button}`);
  }
  this.changeslaid()
}
}



  















