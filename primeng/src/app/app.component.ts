import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { fromEvent } from 'rxjs';
import { BaseComponent } from 'src/internal/base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit, AfterViewInit {
  constructor(private primengConfig: PrimeNGConfig) {
    super()
  }

  ngOnInit() {
    // 啓用 ripple 效果
    this.primengConfig.ripple = true
    // 監聽 
    fromEvent(window, 'resize').pipe(
      this.takeUntilClosed(),
    ).subscribe({
      next: () => this._marginTop(),
    })
  }
  @ViewChild("toolbar")
  private toolbar_?: ElementRef
  ngAfterViewInit(): void {
    // 頁面初始化完成，等下一幀再調整高度
    Promise.resolve().then(() => this._marginTop())
  }
  private _marginTop() {
    const ele = this.toolbar_?.nativeElement as HTMLElement
    this.marginTop = (ele.clientHeight ?? 0) + (ele?.offsetTop ?? 0) * 2
  }
  marginTop = 92

  onClick(name: string) {
    console.log(name)
  }
}
