import { Component } from '@angular/core';
import { babysitter } from '../models/babysitter.model';
import { BabysitterService } from '../services/babysitter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil-p',
  templateUrl: './acceuil-p.component.html',
  styleUrls: ['./acceuil-p.component.css']
})
export class AcceuilPComponent {

  babysitter:babysitter[]=[];

  constructor(private nounouServ :BabysitterService , private route:Router)
 {


 }
 ngOnInit(): void {
   this.nounouServ.getAllNounou().subscribe(
    
 (tabNounou)=>{
   this.babysitter=tabNounou;
 }
   )

 }


 dell(idbabysitter:any){

  this.route.navigate(['/profilb',idbabysitter])
}

}
