import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isVisible$ = new BehaviorSubject<boolean>(false)

  constructor() { }

  open() {
    this.isVisible$.next(true)
  }

  close() {
    this.isVisible$.next(false)
  }
}
