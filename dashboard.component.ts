import { Component, OnInit, Renderer2, AfterViewChecked } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd } from '@angular/router';
import { CommonService } from '@shared/services/common.service';
import * as NProgress from 'nprogress';
import {CardetailsService  } from 'app/cardetails.service';
import {CardetailsCuardService  } from 'app/cardetails-cuard.service';
import { cardetails,cardetailsres, deletedata } from '../pages/classes/cardetails';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';

import {DeleteService  } from 'app/delete.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title">Hi there!</h4>
//       <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//       <p>Hello, World!</p>
//       <p><button class="btn btn-lg btn-outline-primary" (click)="open()">Launch demo modal</button></p>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
//     </div>
//   `
// })
// export class NgbdModal1Content {
//   constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {}

//   open() {
//     this.modalService.open(NgbdModal1Content, {
//       size: 'lg'
//     });
//   }
// }


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  // title:string
  // price:any
  // img:any
  public show_dialog : boolean = false;
  public button_name : any = 'Show Login Form!';
  constructor(private http : HttpClient,public cardetails: CardetailsService,public datadelet: DeleteService ,public cardetails_crud: CardetailsCuardService, private router: Router, public cmnSrv: CommonService, private renderer: Renderer2) {
   
  
    NProgress.configure({ showSpinner: false });
    /**
     * to add preload class before loading the APP
     * to prevent transition effection on many element on app startup
     */
  
    this.renderer.addClass(document.body, 'preload');
  }
  userlist:cardetails;
  cardetails_crud_get:cardetailsres;
  price: any 
  dtadelete:deletedata;



  ngOnInit()

  
  {

    this.cardetails_crud.cardata(this.cardetails_crud.formdata)
    .subscribe(
      (res:cardetailsres) =>{
        this.price=res.price;
        //this.cardetails_crud_get =res;
        //this.price =this.cardetails_crud_get
// this.unam = this.userlist.response;
console.log(this.price[0].Img);
// console.log(this.userlist.Title)
//return this.price
      },
       error => console.error('error',error)

      
    )

//     this.cardetails_crud.getcardata()
//     .subscribe(
// data=>
// {
// this.cardetails_crud_get = data;
// }
//     );
    console.log(this.cardetails_crud_get)
    console.log("hgfhgfhgf")
    this.resetForn();
    console.log(this.cardetails.formdata.Title)
   
   }

   

   

   resetForn(from ? :NgForm){
    if (from != null)
    from.resetForm();
    this.cardetails.formdata ={
      Title: null,
      Img:'',
      Price: null

    }
    console.log(this.cardetails.formdata.Title)
     
    }
    /**
     * for progres bar (loading) on top; after route chages
     */
    // this.router.events.subscribe((obj: any) => {
    //   if (obj instanceof RouteConfigLoadStart) {
    //     NProgress.start();
    //     NProgress.set(0.4);
    //   } else if (obj instanceof RouteConfigLoadEnd) {
    //     NProgress.set(0.9);
    //     setTimeout(() => {
    //       NProgress.done();
    //       NProgress.remove();
    //     }, 500);
    //   } else if (obj instanceof NavigationEnd) {
    //     this.cmnSrv.dashboardState.navbarToggle = false;
    //     this.cmnSrv.dashboardState.sidebarToggle = true;
    //     window.scrollTo(0, 0);
    //   }
    // });
   
    onSubmit(){

      console.log(this.cardetails.formdata.Title)
      console.log(this.cardetails.formdata.Img)
      console.log(this.cardetails.formdata.Price)
  
  
      this.cardetails.postlogin(this.cardetails.formdata)
      .subscribe(
        data =>{
          console.log('suc',data),
          this.userlist = data;
  // this.unam = this.userlist.response;
  console.log(this.userlist.Price)
  console.log(this.userlist.Title)
  
        },
         error => console.error('error',error)
  
        
      )
      }

      toggle() {
        this.show_dialog = !this.show_dialog;
    
        // CHANGE THE TEXT OF THE BUTTON.
        if(this.show_dialog) 
          this.button_name = "Click for Add";
        else
          this.button_name = "Close";
      }

      deleteUser(user) {
        // console.log(user)
        this.dtadelete = user
        // console.log(this.dtadelete)
        this.datadelet.postlogin( this.dtadelete)
        .subscribe(
          data =>{
            console.log('suc',data),
            this.dtadelete = data;
    // this.unam = this.userlist.response;
    console.log(this.dtadelete)
   
    
          },
           error => console.error('error',error)
    
          
        )
      }
  }

  
  
//   ngAfterViewChecked() {
//     /**
//      * for removing transition effection on load of the page
//      */
//     // setTimeout(() => {
//     //   this.renderer.removeClass(document.body, 'preload');
//     // }, 300);
//   }

// }





