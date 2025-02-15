import { Injectable } from '@angular/core';
import {
    HTTP_INTERCEPTORS,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MockupInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());


        function handleRoute() {
            console.log('url:' , url);
            
            if (environment.useMockupApi) { 
                switch (true) {
                    case url.endsWith('get-compute-data') && method === 'GET' && environment.useMockupApi:
                        return test();
                    default:
                        return next.handle(request); // pass through any requests not handled above
                }
            } else {
                return next.handle(request);
            }
        }

        function test(){
            const response={
                'test':'test',
                'data':[1,2,3,4,5]

            }
            return of(
                new HttpResponse({
                    status: 200,
                    body: response
                })
            );  
        }
    }
}

export const mockupInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: MockupInterceptor,
    multi: true
};