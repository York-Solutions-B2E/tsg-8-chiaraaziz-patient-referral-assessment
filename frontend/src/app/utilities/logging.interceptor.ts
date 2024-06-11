import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export class ResponseInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log('Request URL' + request.url);
        return next.handle(request).pipe(
            tap<HttpEvent<unknown>>(
                () => {
                    /** */
                },
                (error:HttpErrorResponse) => {
                    if (error.status == 404){
                        alert(`Error: ${error.status} - Not found`)
                    }
                    if (error.status == 500) {
                        alert(`Error ${error.status} internal service error`)
                    }
                }
            )
        )
    }
}

