import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  group: FormGroup;
  @Input() userList: User[];
  submitted: boolean;

  constructor(private fb: FormBuilder, private service: UserService, private toastrService: ToastrService) {
  }

  get formControls() {
    return this.group.controls;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.group = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      participation: ['', Validators.required]
    });
  }

  submit() {
    this.submitted = true;
    if (this.group.invalid) {
      return;
    }
    const user = this.group.getRawValue();

    if (this.checkCanAddMoreParticipation(user)) {
      const userAlreadyAdded = this.userList.filter(usr => {
        return usr.firstName === user.firstName && usr.lastName === user.lastName;
      })

      if (userAlreadyAdded.length > 0) {
        this.toastrService.error('User already added', 'Duplicated entry');
        return;
      }

      this.userList = this.service.addNewParticipation(user, this.userList);
      this.toastrService.success('The new Participation was added');
      this.group.reset();
    }
    this.submitted = false;
  }

  checkCanAddMoreParticipation(user: User) {
    let totalPercentage = this.userList.reduce((sum, item) => {
      return sum + item.participation;
    }, 0);
    totalPercentage += user.participation;

    if (totalPercentage > 100) {
      this.toastrService.error('This user can not be added.', 'Total percentage reached');
      return false;
    }
    return true;
  }

  delete(item: any) {
    this.userList = this.service.deleteParticipation(item, this.userList);
    this.toastrService.success('The Participation was removed');
  }
}
