import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ComputeService {


    constructor(private http: HttpClient) {

    }
    getComputeData(): Observable<any[]> {
        return this.http.get<any[]>(`${environment.apiDomain}/api/v1/get-compute-data`);
    }


}




