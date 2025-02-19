import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RamService {


    constructor(private http: HttpClient) {

    }
    getRamData(): Observable<any[]> {
        return this.http.get<any[]>(`${environment.apiDomain}/api/v1/get-ram-data`);
    }


}




