import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DadesService {

  constructor(private http: HttpClient) { }

  dadesWorldTotals(){
    // és només un exemple, utilitzeu els punts de la api que vulgueu
    const apiURL = "https://api.covid19api.com/world/total";
    return this.http.get(apiURL);
  }
  dadesSummary(){
    // és només un exemple, utilitzeu els punts de la api que vulgueu
    const apiURL = "https://api.covid19api.com/summary";
    return this.http.get(apiURL);
  }
  dadesCountries(){
    // és només un exemple, utilitzeu els punts de la api que vulgueu
    const apiURL = "https://api.covid19api.com/countries";
    return this.http.get(apiURL);
  }
  dadesCountry(country){
    // és només un exemple, utilitzeu els punts de la api que vulgueu
    const apiURL = "https://api.covid19api.com/country/" + country;
    return this.http.get(apiURL);
  }
  dadesWIP(date1,date2){
    // és només un exemple, utilitzeu els punts de la api que vulgueu
    const apiURL = "https://api.covid19api.com/world?from="+date1+"&to="+date2;
    //?from=2021-02-01T00:00:00Z&to=2021-04-22T00:00:00Z
    return this.http.get(apiURL);
  }
  
}
