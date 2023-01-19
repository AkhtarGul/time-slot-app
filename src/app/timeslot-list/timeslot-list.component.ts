import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TimeslotService } from '../timeslot.service';

@Component({
  selector: 'app-timeslot-list',
  templateUrl: './timeslot-list.component.html',
  styleUrls: ['./timeslot-list.component.scss']
})
export class TimeslotListComponent implements OnInit {
  submitted = false;
  getValue:PersonalInfo[] = []
  obj:any = {}
  constructor(private fb:FormBuilder,private timeSlotSrv:TimeslotService) { }
  selectTime:string=''
  @ViewChild('exampleModal',{static:true}) public exampleModal!: ElementRef;
  ngOnInit(): void {
    this.getAll();
  }
listofTime:TimeSlot[]=[
  {
    id: 9,
    time: '9:00 AM'
  },
  {
    id: 10,
    time: '10:00 AM'
  },
  {
    id: 11,
    time: '11:00 AM'
  },
  {
    id: 12,
    time: '12:00 AM'
  },
  {
    id: 1,
    time: '1:00 PM'
  },
  {
    id: 2,
    time: '2:00 PM'
  },
  {
    id: 3,
    time: '3:00 PM'
  }, {
    id: 4,
    time: '4:00 PM'
  },

]
bindVal(item:any){
  // alert(item.time);
  this.selectTime = item.time;
  this.profileForm.controls['timeSlot'].setValue(+item.id);

}
listUser:PersonalInfo[]=[]
onSubmit(){
  this.submitted = true;

        // stop here if form is invalid
        if (this.profileForm.invalid) {
          return;
      }
      if(this.profileForm.valid){
         this.obj = this.profileForm.value;
        this.timeSlotSrv.saveTimeSlot(this.obj).subscribe(res=>{
          console.table(res);
         })

      }
  //     this.listUser.push(this.obj);
  // localStorage.setItem('personProfile',JSON.stringify(this.listUser))
  // window.location.reload();
//   this.exampleModal.hide();
}
submitedId:any
getAll(){

  // this.getValue = JSON.parse(localStorage.getItem('personProfile') || '{}');
  // this.getValue
  // console.log(this.getValue);
    this.timeSlotSrv.getAll().subscribe(res => {
      res.forEach(i => {
        this.checkTime(i.timeSlot);
      });
    });
}
checkTime(id:any){
  switch (id) {
    case 9:
      this.submitedId = id;
      break;
    case 10:
      this.submitedId = id;
      break;
    case 11:
      this.submitedId = id;
      break;
    case 12:
      this.submitedId = id;
      break;
    case 1:
      this.submitedId = id;
      break;
    case 2:
      this.submitedId = id;
      break;
      case 3:
        this.submitedId = id;
        break;
      case 4:
        this.submitedId = id;
        break;
      default:
        console.log("Default is Zero");
  }
}
restForm(){
  this.submitted = false;
  this.profileForm.reset();
}
  // convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

profileForm = this.fb.group({
  id:[0,],
  fName: ['',Validators.required],
  lName:['',Validators.required],
  pNumber:['',Validators.required],
  timeSlot:[{}]
})
}


export interface TimeSlot{
  id?:number;
  time?:string;
  submited?:boolean
}

export interface PersonalInfo{
  id?:any;
  fName?:string;
  lName?:string;
  pNumber?:string;
  timeSlot?:TimeSlot;
}
