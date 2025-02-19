import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  menus = [
    {
      text: '電腦資料', path: "compute-data", expanded: false
    },
    {
      text: 'ram 資料', path: "ram-data", expanded: false
    },
    {
      text: 'mix資料', path: "mix-data", expanded: false
    },
    {
      text: '新竹人口資料', path: 'hsinchu-people-data', expanded: false
    },
    {
      text: 'bp-ram' , path: 'bp-ram',expanded:false
    },
    {
      text: 'test',
      expanded: false,  // 用於控制子菜單是否展開
      subMenus: [
        { text: 'test-a', path: "test-a" },
        { text: 'test-2', path: "test-b" }
      ]
    },

  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toggleMenu(menu: any) {
    if (menu.subMenus) {
      menu.expanded = !menu.expanded;

    } else {
      this.routerTo(menu);
    }
  }
  routerTo(menu: any) {
    this.router.navigate([menu.path]);

  }

}
