import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MenuService } from 'src/app/core/service/menu.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('menuAnimation', [
      state('open', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('closed', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition('open <=> closed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class LayoutComponent implements OnInit {
  menuVisible: boolean = true;


  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.menuState$.subscribe((res) => {
      console.log("res:",res);
      this.toggleMenuVisibility();
    });
  }

  hideMenu() {
    this.menuVisible = false;  // 隱藏菜單
  }

  toggleMenuVisibility() {
    this.menuVisible = !this.menuVisible;  // 切換菜單顯示狀態
  }
}
