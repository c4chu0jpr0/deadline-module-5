import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {

    constructor(public httpClient: HttpClient) { }

    getData = (): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:8080/customers";
            this.httpClient.get(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }

    addCustomer = (customers): Promise<Object> => {
        return new Promise((resolve, reject) => {
            debugger
            let url = "http://localhost:8080/customers";
            this.httpClient.post(url,customers)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    updateCustomer = (id,customers): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:8080/customers/update/"+id;
            this.httpClient.put(url,customers)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    detailCustomer = (id): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:8080/customers/detail/"+id;
            this.httpClient.get(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    deleteCustomer = (id): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:8080/customers/delete/"+id;
            this.httpClient.delete(url,id)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
}