
import { Component, OnInit ,ViewChild} from '@angular/core';
import {DrugService} from '../../../services/drug.service'
import {Drug} from './../../../Models/Drug'
import { error } from '@angular/compiler/src/util';
import { Table } from 'primeng/table';
import { FilterUtils } from 'primeng/utils';
import { ConfirmationService, SelectItem } from 'primeng/api';
import { map } from 'rxjs/operators'
// import { ToastrService } from 'ngx-toastr';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

    @Component({
          selector: 'app-show-drug',
          templateUrl: './show-drug.component.html',
          styleUrls: ['./show-drug.component.css'],
          providers: [MessageService]

        
})
export class ShowDrugComponent implements OnInit {

    drugs: Drug[];

    loading: boolean = true;

    @ViewChild('dt') table: Table;

    constructor (
      private DrugService: DrugService,
      private messageService: MessageService,
      private routee:Router, 
      private confirmationService: ConfirmationService
      ) { }

    ngOnInit() {
              this.DrugService.GetAll()
              .subscribe(drugs => {
                this.drugs = drugs,console.log(drugs),
                this.loading = false;
            }
              ,error=>{console.log(error);
              }) ;
    }

    onDeleteRow(id: number) {
  console.log(id)
 // if (confirm('Are you sure to delete this Drug ?') == true) {
                console.log("uuuu")
              this.DrugService.deleteDrug(id)
              .subscribe(x => {
                  console.log(x)
                this.DrugService.GetAll() .subscribe(drugs=>{this.drugs =drugs})
                this.messageService.add({severity:'success', summary: 'Success', detail: 'Drug Deleted Successfully'});

                // .subscribe(drugs => {
                //     this.drugs = drugs
                // }
                // this.toastr.warning("Deleted Successfully");
              })
            // }
    }

    showSuccess() {
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    }
        
    showInfo() {
          this.messageService.add({severity:'info', summary: 'Info', detail: 'Drug Deleted Successfully'});
    }
        
    showWarn() {
          this.messageService.add({severity:'warn', summary: 'Warn', detail: 'Drug Deleted Successfully'});
    }
        
    showError() {
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Drug Deleted Successfully'});
    }
        
    showTopLeft() {
          this.messageService.add({key: 'tl', severity:'info', summary: 'Info', detail: 'Message Content'});
    }
    confirm(id:number) {
          this.confirmationService.confirm({
              message: 'Are you sure that you want to perform this action?',
              accept: () => {
                this.onDeleteRow(id)
                  //Actual logic to perform a confirmation
              }
          });
    }

    editRow(id:number){
      this.routee.navigate(['/edit/',id])
    }

    onActivityChange(event) {
        const value = event.target.value;
        if (value && value.trim().length) {
            const activity = parseInt(value);

            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    }

    onDateSelect(value) {
        this.table.filter(this.formatDate(value), 'date', 'equals')
    }

    formatDate(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    onRepresentativeChange(event) {
        this.table.filter(event.value, 'representative', 'in')
    }
}
