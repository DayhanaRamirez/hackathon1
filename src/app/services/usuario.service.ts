import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  userList: Usuario[] = [
    {name: "Dayhana", lastName: "Ramirez", birthPlace: "Medellin", birthDate: "01/06/1966", workPlace: "Medellin", formerBossName: "Angela Moreno", formerBossPhone: "3104721560", startDate: "01/02/2020", finishDate: "01/02/2021"},
  ];

  constructor() { }

  getUsers(){
    return this.userList.slice();
  }

  deleteUser(index: number){
    this.userList.splice(index, 1);
  }

  addUser(user: Usuario){
    this.userList.unshift(user);
  }
}
