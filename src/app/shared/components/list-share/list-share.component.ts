import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { WillService } from 'src/app/services/will.service';

@Component({
  selector: 'app-list-share',
  templateUrl: './list-share.component.html',
  styleUrls: ['./list-share.component.scss']
})
export class ListShareComponent implements OnInit {
  @Input() memberListShare=[];
  @Input() _id;
  shareValue;
  allAssetsBeneficiary;

  constructor(private _willServices:WillService) { }
  getShortName(obj) { 
    const name =obj.fullname;
    if (name) {
      return name.split(' ').map(n => n[0]).join('').toUpperCase().substr(0,2);;
    } else {
      return "AA"
    }
   
  }
  ngOnChanges(changes: SimpleChanges) {
  
    // console.log(changes);
    // console.log(this.memberListShare);
    this.allAssetsBeneficiary=this.memberListShare;
    
  }
  ngOnInit(): void {

    // console.log(this.allAssetsBeneficiary);

    
  }

}
