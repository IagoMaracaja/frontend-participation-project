import { Injectable } from '@angular/core';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  getAllParticipation(){
    return [
      {firstName: 'Carlos', lastName: 'Moura', participation:5},
      {firstName: 'Fernanda', lastName: 'Oliveira', participation:15},
      {firstName: 'Hugo', lastName: 'Silva', participation:20},
      {firstName: 'Eliza', lastName: 'Souza', participation:20},
      {firstName: 'Anderson', lastName: 'Santos', participation:40}
    ]
  }


  /**
   * Add a new participation
   * @param user the new user to be added
   * @param userList the previous list of users
   */
  addNewParticipation(user: User, userList: User[]){
    return [...userList, user];
  }

  /**
   * Delete an user from list
   * @param userToDelete the user to be deleted
   * @param userList the previous list of users
   */
  deleteParticipation(userToDelete: User, userList: User[]){
    return userList.filter(user => user !== userToDelete);
  }
}
