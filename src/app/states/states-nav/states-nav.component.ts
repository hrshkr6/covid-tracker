import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { StateService } from '../states.service';

@Component({
  selector: 'app-states-nav',
  templateUrl: './states-nav.component.html',
  styleUrls: ['./states-nav.component.css']
})
export class StatesNavComponent implements OnInit {
  statesName:string[]
  constructor(private statesService : StateService) { }

  ngOnInit(): void {
    this.statesService.getStatesData()
    .subscribe(
      data=>{
        let states =[]
        data.forEach(val=>{
          states.push(val.province)
        })

       this.statesName=states
        
      }
    )
  }

}
