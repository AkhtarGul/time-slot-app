import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-timeslot-list',
  templateUrl: './timeslot-list.component.html',
  styleUrls: ['./timeslot-list.component.scss']
})
export class TimeslotListComponent implements OnInit {
  submitted = false;
  getValue:PersonalInfo = {}
  constructor(private fb:FormBuilder) { }
  selectTime:string=''
  @ViewChild('exampleModal',{static:true}) public exampleModal!: ElementRef;
  ngOnInit(): void {
    this.getLocalStorage();
  }
listofTime=[
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
  this.profileForm.controls['id'].setValue(+item.id);;
}
listUser:PersonalInfo[]=[]
onSubmit(){
  this.submitted = true;

        // stop here if form is invalid
        if (this.profileForm.invalid) {
          return;
      }
      if(this.profileForm.valid){
        this.getValue.id = Number(JSON.stringify(this.profileForm.value.id));
        this.getValue.fName = JSON.stringify(this.profileForm.value.fName)
        this.getValue.lName = JSON.stringify(this.profileForm.value.lName)
        this.getValue.pNumber = JSON.stringify(this.profileForm.value.pNumber)

      }
      this.listUser.push(this.getValue);
  localStorage.setItem('personProfile',JSON.stringify(this.listUser))
  // window.location.reload();
//   this.exampleModal.hide();
}

getLocalStorage(){

  this.getValue = JSON.parse(localStorage.getItem('personProfile') || '{}');
  // this.getValue
  console.log(this.getValue);
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
  pNumber:['',Validators.required]
})
}


export interface TimeSlot{
  id?:number;
  time?:string;
  submited?:boolean
}

export interface PersonalInfo{
  id?:number;
  fName?:string;
  lName?:string;
  pNumber?:string;
  timeSlot?:TimeSlot;
}
