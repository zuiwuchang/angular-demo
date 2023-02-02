import { Injectable } from '@angular/core';
import { getItem, setItem } from 'src/internal/local-storage';

export class SettingsString {
  private value_: string
  constructor(private readonly key_: string, val: string) {
    this.value_ = getItem(key_, val)
  }
  get value(): string {
    return this.value_
  }
  set value(val: string) {
    if (val != this.value_) {
      this.value_ = val
      setItem(this.key_, val)
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  theme = new SettingsString(
    "theme",
    "bootstrap4-light-blue",
  )
}
