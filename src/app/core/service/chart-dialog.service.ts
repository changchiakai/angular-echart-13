import { Injectable, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { ChartDialogComponent } from 'src/app/component/chart-dialog/chart-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class ChartDialogService {

  private dialogRef!: ComponentRef<ChartDialogComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  open(data: any) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ChartDialogComponent);
    this.dialogRef = factory.create(this.injector);
    this.dialogRef.instance.data = data; // 將圖表資料傳入

    this.appRef.attachView(this.dialogRef.hostView);
    document.body.appendChild(this.dialogRef.location.nativeElement);
  }

  close() {
    if (this.dialogRef) {
      this.appRef.detachView(this.dialogRef.hostView);
      this.dialogRef.destroy();
    }
  }
}
