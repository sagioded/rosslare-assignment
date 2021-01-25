import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/modules/users/users.service';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  showDetails: boolean = false;
  displayedColumns: string[] = ['Photo', 'Name', 'Username', 'Access Group', 'Access Level', 'Website'];


  @ViewChild('drawer') public drawer: MatDrawer;

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.load();
  }

  onUserClicked(index: number) {
    this.usersService.loadUser(index, () => {
      this.drawer.open();
    });
  }
}
