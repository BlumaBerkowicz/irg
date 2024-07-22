import { Component } from '@angular/core';
import { YechidotService } from '../services/yechidot.service';
import { IrgYechidaIrgunitMisrad } from '../models/IrgYechidaIrgunitMisrad.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private YechidotService:YechidotService){
  }
  pirteyYechida: IrgYechidaIrgunitMisrad[] = [];
get(code:number,rama:number){
  this.YechidotService.Get(code,0).subscribe(data=>{
    this.pirteyYechida=data;});}
}