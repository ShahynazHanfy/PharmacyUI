import { Component, OnInit } from '@angular/core';
import { Drug } from '../../../Models/Drug'
import { DrugService } from '../../../services/drug.service'
import { PrimeNGConfig } from 'primeng/api';
import { Order } from '../../../Models/Order'
import { OrderService} from '../../../services/order.service'
import { error } from '@angular/compiler/src/util';
import{OrderDetails} from '../../../Models/OrderDetails'
import { Pharmacy } from 'src/app/Models/Pharmacy';
import { Pledge } from 'src/app/Models/Pledge';
import { Supplier } from 'src/app/Models/Supplier';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  ExistDrugs: any;
  drug: Drug
  drug1: Drug
  DrugAdded: Drug[]
  Orders: Order[]
  order:Order
  drugDetailsNeeded:OrderDetails[];
  orderDetailObj :OrderDetails;
  newOrder:Order
  newOrderDetails:OrderDetails[]
  selectedDrug:Drug
  orderDetails:OrderDetails[]
  pharmacy:Pharmacy[]
  pledge:Pledge[]
  supplier:Supplier[]


  
  // checked:boolean=true
  DrugExistAfterElementDeleted: Drug[]
  constructor(private drugService: DrugService,private orderService:OrderService) {
    
    this.DrugAdded = []
    this.newOrderDetails = []
    this.DrugExistAfterElementDeleted = []
    this.drugService.GetAll().subscribe(drugs => {
    this.ExistDrugs = drugs, console.log(this.ExistDrugs),
    this.DrugExistAfterElementDeleted = this.ExistDrugs
    this.orderDetails = []
    this.pharmacy=[]
    
    });
  }
  ngOnInit() {
    this.order = {
      code: '', comments: '', date: new Date(), description: '', number: 0, pharmacyDeliverdID: 0,
      pharmacyID: 0, pledgeID: 0, supplierID: 0,orderDetailList:[],id:0
      
    }
    this.newOrder = {
      code: '', comments: '', date: new Date(), description: '', number: 0, pharmacyDeliverdID: 0,
      pharmacyID: 0, pledgeID: 0, supplierID: 0,orderDetailList:[],id:0
      
    }
    this.orderDetailObj = {
      quentity:0,price:0,orderId:0,drugId:0,exp_Date:new Date(),prod_Date:new Date()
    }
    this.drugService.GetAllPharmacies()
    .subscribe(pharmacy => {
      this.pharmacy=pharmacy
      console.log("pharmacies"+this.pharmacy)
    })

    this.drugService.GetAllPledges().subscribe(pledge=>{
      this.pledge = pledge
    })
    this.drugService.GetAllSuppliers().subscribe(supplier=>{
      this.supplier = supplier
    })
    
        this.drugService.GetAll()
        .subscribe(drugs => {
          this.ExistDrugs = drugs,
          console.log(drugs)
      }
        ,error=>
        {
          console.log(error);
        }) ;


    console.log(this.DrugExistAfterElementDeleted)
    // console.log(this.order)
  }
  saveDrug(id) {
    console.log(id)
    this.drugService.getDrugByID(id).subscribe(drug => {
      this.drug = drug
   
     
      var quentity = document.querySelectorAll("input")[2];
      var prod_Date = document.querySelectorAll("input")[3];
      var exp_Date = document.querySelectorAll("input")[4];
      
console.log(quentity.value)
console.log(prod_Date.value)
console.log(exp_Date.value)


      // console.log(element)  
      // element2.setAttribute("value","Added To Form")
      // element2.setAttribute("style","background-color: green;")
 
      console.log(drug)
      this.DrugAdded.push(drug)
      console.log("DRUGGGGGG"+this.DrugAdded)
      // var element = document.querySelector("#t");
      // console.log(element)  
      // element.setAttribute("value","Added To Form")
      // element.setAttribute("style","background-color: #2196F3;")

      // var element2 = document.querySelector("#tt");
      // console.log(element)  
      // element2.setAttribute("value","Added To Form")
      // element2.setAttribute("style","background-color: green;")

      // this.ExistDrugs.splice()
      // this.ExistDrugs.splice(this.ExistDrugs.indexOf(drug), 1) 
      // this.drugService.GetAll().subscribe(drugs => {this.ExistDrugs = drugs,console.log(this.ExistDrugs)});

      // this.DrugAdded.splice(this.DrugAdded.indexOf(drug), 1) 
    })
    // this.drug.IsChecked = !this.drug.IsChecked
      }
  deleteFromAddedList(id) {
    console.log(id)
    this.drugService.getDrugByID(id).subscribe(drug => {
      this.drug1 = drug
      console.log(this.drug1)
      var index = this.DrugAdded.indexOf(this.drug1);
      console.log(this.DrugAdded.indexOf(this.drug1))
      if (index > -1) {

        this.DrugAdded.splice(index, 1);
      }
      //  console.log(this.DrugAdded.indexOf()) 
      //   this.DrugAdded.splice(this.DrugAdded.indexOf(this.drug1), 1) 
    })
  }

//   saveOrder(){
//     // console.log(this.DrugAdded)
//     // this.order.number=Number(this.order.number);
//     for(var i=0;i<  this.DrugAdded.length;i++)
//     {
//        this.orderDetailObj = {
//       drugId: this.DrugAdded[i].id,
//       prod_Date:this.DrugAdded[i].prod_Date,
//       price: this.DrugAdded[i].price,
//       exp_Date:this.DrugAdded[i].exp_Date,
//       quentity:this.DrugAdded[i].quentity,
//       orderId:this.order.id
//       };
//       this.order.orderDetailList.push(this.orderDetailObj);
//     }

    

// //this.order.orderDetailList=this.DrugAdded
//     // console.log(this.DrugAdded)
//     console.log(this.order)
//     this.orderService.insertDrug(this.order).subscribe(d=>{
//       console.log(d)
//     })
//   }

  saveOrderList(){
    console.log(this.selectedDrug)
   this.order.number=Number(this.order.number) 
   this.orderDetailObj.quentity=Number(this.orderDetailObj.quentity) 
   this.orderDetailObj.price=Number(this.orderDetailObj.price) 
   this.order.pharmacyID=Number(this.order.pharmacyID) 
   this.order.supplierID=Number(this.order.supplierID) 
   this.orderDetailObj.drugId= this.selectedDrug.id
   this.orderDetails.push(this.orderDetailObj)
   this.order.orderDetailList=this.orderDetails
   console.log("orderDetailsObj"+this.orderDetailObj)
   console.log("orderDetails"+this.orderDetails)
  this.orderService.insertOrder(this.order).subscribe(order=>{
    console.log(order)
  })
  
   console.log(this.order)
  }

}
