import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HistoryDTO } from "../dto/history.dto";

const API_URL = environment.api;

@Injectable({
    providedIn: 'root'
})
export class HistoryService{
    
    constructor(private http: HttpClient){}

    public getHistoryForElement(id: number): Observable<HistoryDTO[]>{
        return this.http.get<HistoryDTO[]>(`${API_URL}history/${id}`);
    }
}