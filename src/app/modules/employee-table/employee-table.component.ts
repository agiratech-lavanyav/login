import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import {MatSort,Sort} from '@angular/material/sort';
import * as _ from 'lodash';
import { values } from 'lodash';


@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {
  displayedColumns = ['select','position', 'empID','name','gender','age','department','yr_of_joining','email','contact'];
  empTabDataSource = new MatTableDataSource<employeeDetails>(ELEMENT_DATA);
  // response:any = [];


  // filter for employee table

  idFilter=  new FormControl();
  nameFilter= new FormControl();
  // genderFilter=new FormControl();
  globalFilter='';

  filteredValues = {
    position: '', empID:'', name: '',gender:'', age:'', department:'', yr_of_joining:'', email:'', contact:''};

    ngOnInit() {

      // this.response = Element;

      this.idFilter.valueChanges.subscribe((idFilterValue) => {
        this.filteredValues['empID'] = idFilterValue;
        this.empTabDataSource.filter = JSON.stringify(this.filteredValues);
      });
  
      this.nameFilter.valueChanges.subscribe((nameFilterValue) => {
        this.filteredValues['name'] = nameFilterValue;
        this.empTabDataSource.filter = JSON.stringify(this.filteredValues);
      });

      // this.genderFilter.valueChanges.subscribe((genderFilterValue)=>{
      //   this.filteredValues['gender']= genderFilterValue;
      //   this.empTabDataSource.filter = JSON.stringify(this.filteredValues);
      // });
  
      this.empTabDataSource.filterPredicate = this.customFilterPredicate();
  
    }
  
    applyFilter(filter: any) {
      this.globalFilter = filter;
      this.empTabDataSource.filter = JSON.stringify(this.filteredValues);
    }

    customFilterPredicate() {
      const myFilterPredicate = (data: employeeDetails, filter: string): boolean => {
        var globalMatch = !this.globalFilter;
  
        if (this.globalFilter) {

          globalMatch = data.name.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1;
                        // data.gender.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1;
        }
        let searchString = JSON.parse(filter);
        return data.empID.toString().trim().indexOf(searchString.empID) !== -1 &&
          data.name.toString().trim().toLowerCase().indexOf(searchString.name.toLowerCase()) !== -1;
          // data.gender.toString().trim().toLowerCase().indexOf(searchString.gender.toLowerCase()) !== -1;
      }
      return myFilterPredicate;
     }
  
  //  pagination for employee table

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  // sorting for employee table

  @ViewChild('employeeTableSort') employeeTableSort = new MatSort();


ngAfterViewInit() {
  this.empTabDataSource.paginator = this.paginator;

  this.employeeTableSort.disableClear = true;
  this.empTabDataSource.sort = this.employeeTableSort;

}
// onChange($event: any){
//   let filteredData = _.filter(this.response,(item)=>{
//     return item.gender.toLowerCase() == $event.value.toLowerCase();
//   })
//   this.empTabDataSource = new MatTableDataSource(filteredData);
// }

}

  // constructor() { }

  // ngOnInit(): void {
  // }
export interface employeeDetails {
    position: number;
    empID: number;
    name: string;
    gender:string;
    age: number;
    department: string;
    yr_of_joining: number;
    email: any;
    contact: number;
}

  
  const ELEMENT_DATA: employeeDetails[] = [
    {position: 1,  empID: 101, name:"Donald",   gender:"Male",    age:30, department:"Analyst",     yr_of_joining:2012, email:"abbott.rodger@grant.net",       contact:7111136008,},
    {position: 2,  empID: 102, name:"Douglas",  gender:"Male",    age:32, department:"Analyst",     yr_of_joining:2018, email:"mittie22@eichmann.info",        contact:6127930385,},
    {position: 3,  empID: 103, name:"Jennifer", gender:"Female",  age:35, department:"Developer",   yr_of_joining:2013, email:"ernest.hoppe@yahoo.com",        contact:8708353526,},
    {position: 4,  empID: 104, name:"Michael",  gender:"Male",    age:25, department:"Developer",   yr_of_joining:2012, email:"vjohnson@emard.biz",            contact:7447864993,},
    {position: 5,  empID: 105, name:"Susan",    gender:"Female",  age:27, department:"Analyst",     yr_of_joining:2018, email:"kolby45@yahoo.com",             contact:7319228716,},
    {position: 6,  empID: 106, name:"Hermann",  gender:"Male",    age:29, department:"Development", yr_of_joining:2017, email:"hsimonis@hotmail.com",          contact:6127975788,},
    {position: 7,  empID: 107, name:"Shelley",  gender:"Female",  age:32, department:"Management",  yr_of_joining:2016, email:"hsenger@hotmail.com",           contact:8079785519,},
    {position: 8,  empID: 108, name:"William",  gender:"Male",    age:31, department:"Developer",   yr_of_joining:2011, email:"corrine.pfeffer@hotmail.com",   contact:7448949198,},
    {position: 9,  empID: 109, name:"Steven",   gender:"Male",    age:35, department:"Engineer",    yr_of_joining:2013, email:"lang.keegan@haley.biz",         contact:6127947177,},
    {position: 9,  empID: 109, name:"Steven",   gender:"Male",    age:35, department:"Engineer",    yr_of_joining:2013, email:"ledner.chester@gibson.biz",     contact:8840921465,},
    {position: 10, empID: 110, name:"Neena",    gender:"Female",  age:28, department:"Tester",      yr_of_joining:2019, email:"kallie.murray@mcglynn.com",     contact:6797189012,},
    {position: 11, empID: 111, name:"Alexander",gender:"Male",    age:27, department:"Developer",   yr_of_joining:2020, email:"norbert21@gmail.com",           contact:8079633321,},
    {position: 12, empID: 112, name:"Bruce",    gender:"Male",    age:38, department:"Analyst",     yr_of_joining:2012, email:"reynolds.elsie@gmail.com",      contact:6127997940,},
    {position: 13, empID: 113, name:"David",    gender:"Male",    age:40, department:"Manager",     yr_of_joining:2013, email:"maverick.mayert@kutch.org",     contact:7887067035,},
    {position: 14, empID: 114, name:"Valli",    gender:"Female",  age:29, department:"Developer",   yr_of_joining:2018, email:"schumm.genevieve@torphy.com",   contact:6127924377,},
    {position: 15, empID: 115, name:"Diana",    gender:"Female",  age:27, department:"Engineer",    yr_of_joining:2020, email:"reginald14@sawayn.com",         contact:7931352785,},
    {position: 16, empID: 116, name:"Nancy",    gender:"Female",  age:32, department:"Analyst",     yr_of_joining:2021, email:"lueilwitz.craig@schmeler.info", contact:8917762795},
    {position: 17, empID: 117, name:"Daniel",   gender:"Male",    age:21, department:"Development", yr_of_joining:2012, email:"kulas.kennedy@gmail.com",       contact:6721016906,},
    {position: 18, empID: 118, name:"John",     gender:"Male",    age:25, department:"Analyst",     yr_of_joining:2020, email:"dustin22@gmail.com",            contact:6127953677,},
    {position: 19, empID: 119, name:"Ismael",   gender:"Male",    age:29, department:"Tester",      yr_of_joining:2015, email:"nikki80@bahringer.com",         contact:8847204903,},
    {position: 20, empID: 120, name:"Karen",    gender:"Male",    age:29, department:"Manager",     yr_of_joining:2016, email:"everette84@yahoo.com",          contact:8078776409,},
    {position: 21, empID: 121, name:"Adam",     gender:"Male",    age:30, department:"Developer",   yr_of_joining:2018, email:"lane.blanda@gmail.com",         contact:8167702600,},
    {position: 22, empID: 122, name:"Laura",    gender:"Female",  age:24, department:"Management",  yr_of_joining:2012, email:"devyn81@gmail.com",             contact:6310342337,},
    {position: 23, empID: 123, name:"Stephen",  gender:"Male",    age:27, department:"Tester",      yr_of_joining:2019, email:"rcummings@sporer.com",          contact:6127911151,},
    {position: 24, empID: 124, name:"John",     gender:"Male",    age:25, department:"Developer",   yr_of_joining:2020, email:"greenholt.lucs@cartwright.com", contact:6192132238,},
    {position: 25, empID: 125, name:"Joshua",   gender:"Male",    age:24, department:"Engineer",    yr_of_joining:2018, email:"vickie25@hotmail.com",          contact:8917035179,},
    {position: 26, empID: 126, name:"James",    gender:"Male",    age:29, department:"Developer",   yr_of_joining:2014, email:"lennie12@gmail.com",            contact:6794128200,},
    {position: 27, empID: 127, name:"Jason",    gender:"Male",    age:31, department:"Tester",      yr_of_joining:2013, email:"johnson.harvey@hotmail.com",    contact:6127998372,},
    {position: 28, empID: 128, name:"Hazel",    gender:"Female",  age:25, department:"Developer",   yr_of_joining:2012, email:"karianne.roob@yahoo.com",       contact:7979755486,},
    {position: 29, empID: 129, name:"Renske",   gender:"Female",  age:35, department:"Analyst",     yr_of_joining:2020, email:"laaverick.mayert@kutch.org",    contact:6127938213,},
    {position: 30, empID: 130, name:"Matthew",  gender:"Male",    age:31, department:"Developer",   yr_of_joining:2016, email:"hyenger@hotmail.com",           contact:6127909329,},
  ];

				



