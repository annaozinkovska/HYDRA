import { Input, Output} from "@angular/core";
import { Component } from "@angular/core";
import { SearchService } from "./service/search.service";
import { ViewChild,ViewContainerRef,ComponentRef } from "@angular/core";
import { MenuComponent } from "./menu/menu.component";
import { IsActiveMatchOptions } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SearchService],
})
export class AppComponent {
  @ViewChild('menu', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef
  private componentRef!: ComponentRef<MenuComponent>
  showmenu(){
    this.componentRef = this.viewRef.createComponent(MenuComponent);
  }

  @Input()
  routerLinkActiveOptions!: {
    exact: boolean;
  } | IsActiveMatchOptions;      
  // @Output()
  // isActiveChange?r
  
}