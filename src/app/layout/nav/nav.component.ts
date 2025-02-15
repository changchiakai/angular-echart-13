import { Component, Output, EventEmitter,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() logoutEvent = new EventEmitter<void>();
  @Output() menuToggleEvent = new EventEmitter<boolean>();  // 用來通知父組件是否顯示 menu

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login'], { replaceUrl: true });
  }
  toggleMenu() {
    this.menuToggleEvent.emit();  // 發送切換菜單顯示/隱藏的事件
  }
}
