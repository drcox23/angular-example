import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl: string = 'https://swapi.co/api/';

  characters: any[] = [];

  constructor(private http: HttpClient) {

  }

  getCharacter(id: number) {
    const url = this.baseUrl + 'people/' + id;
    return this.http.get(url).toPromise();
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  register(data){
    return Promise.resolve({});
      // mocking up an fake call to the backend
  }

  login(data) {
    return Promise.resolve({ username: data.usernam });
  }

  logout() {
    return Promise.resolve({});
  }

}
