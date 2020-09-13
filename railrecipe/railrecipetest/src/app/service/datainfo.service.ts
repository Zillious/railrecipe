import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class DatainfoService {
userInfo:User=new User();
companyInfo:Company = new Company();
  constructor() { }
}
