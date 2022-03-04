import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  userList: Usuario[] = [];


  displayedColumns: string[] = ['name', 'lastName', 'birthPlace', 'birthDate', 'workPlace', 'formerBossName', 'formerBossPhone',  'startDate', 'finishDate', 'actions'];

dataSource! : MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _userService: UsuarioService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.userList = this._userService.getUsers();
    this.dataSource = new MatTableDataSource(this.userList);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(index:number){
    console.log(index);
    this._userService.deleteUser(index);
    this.loadUsers();

    this._snackBar.open('El usuario fue eliminado con éxito', '', {

      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    })
  }

}
