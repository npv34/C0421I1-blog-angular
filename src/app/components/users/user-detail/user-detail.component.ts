import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IUser} from "../IUser";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IUser) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
