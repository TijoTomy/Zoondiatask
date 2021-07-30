import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons}  from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
products=[
  {id:"ii22",name:"toys",type:"plastic",quantity:"99"},
  {id:"ii22",name:"toys",type:"plastic",quantity:"99"},
  {id:"ii22",name:"toys",type:"plastic",quantity:"99"}
]
  constructor(private modalService: NgbModal) { }
  productForm = new FormGroup({
    id: new FormControl('',[
      Validators.required]),
    name: new FormControl('',[
      Validators.required]),
      type: new FormControl('',[
        Validators.required]),
        quantity: new FormControl('',[
        Validators.required]),
  });
  ngOnInit(): void {
  }
  openPopup(content:any){
    this.modalService.open(content);
  }
  onSubmit(){
    console.log(this.productForm)
    let product:any={} as any;
    product.id=this.productForm.controls.id.value
    product.name=this.productForm.controls.name.value
    product.type=this.productForm.controls.type.value
    product.quantity=this.productForm.controls.quantity.value
    this.products.push(product)

  }
}
