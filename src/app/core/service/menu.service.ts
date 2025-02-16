import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private menuState = new BehaviorSubject<boolean>(true); // true: 顯示, false: 隱藏
    menuState$ = this.menuState.asObservable();  // 統一用這個訂閱即可

    toggleMenu() {
        const newState = !this.menuState.value;
        this.menuState.next(newState);  // 直接更新狀態
    }

    getMenuState() {
        return this.menuState.value;
    }
}