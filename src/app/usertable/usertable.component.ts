import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from "@angular/material/select";
@Component({
  selector: 'app-usertable',
  standalone: true,
  imports: [MatIconModule,MatInputModule,MatFormFieldModule,MatSelectModule],
  templateUrl: './usertable.component.html',
  styleUrl: './usertable.component.css'
})
export class UsertableComponent implements OnInit {
constructor( private modalService: NgbModal){

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addRow(content:any) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title",size:'lg',});
  }
}
