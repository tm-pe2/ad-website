import { Injectable, OnInit, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { SuppliersForm } from "../interfaces/form";
import { SupplierData } from "../interfaces/suppliersData";

@Injectable({
    providedIn: 'root'
})
export class SupplierService {

    constructor(private http:HttpClient) {}

    suppliers: SupplierData[] = [];
    currentSupplier?: SupplierData;



}