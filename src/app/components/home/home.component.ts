import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    constructor(private activatedRoute:ActivatedRoute){
      // var id=activatedRoute.snapshot.paramMap.has("id");
      // console.log("id",id);

      // var id2=activatedRoute.snapshot.paramMap.get("id");
      // console.log(id2);

      activatedRoute.paramMap.subscribe({
        next:paramater=>{
          console.log(paramater.get("id"))
        }
      });
    }
}
