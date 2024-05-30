import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[header-less-tabs]",
  standalone: true
})
export class HeaderLessTabsDirective implements OnInit {
  constructor(private eleRef: ElementRef) { }

  /**
   * Oculta las pestañas de la cabecera del componente mat-tab
   */
  ngOnInit(): void {
    this.eleRef.nativeElement.children[0].style.display = "none";
  }
}
