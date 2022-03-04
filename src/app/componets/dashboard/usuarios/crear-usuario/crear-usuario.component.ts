import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _usuarioService: UsuarioService, private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({
      user : ['', [Validators.required]],
      name : ['', [Validators.required]],
      lastName : ['', [Validators.required]],
      birthPlace : ['', [Validators.required]],
      birthDate : ['', [Validators.required]],
      workPlace : ['', [Validators.required]],
      formerBossName : ['', [Validators.required]],
      formerBossPhone : ['', [Validators.required]],
      startDate : ['', [Validators.required]],
      finishDate: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  addUser(){
    const user: Usuario = {
      
      name : this.form.value.name,
      lastName : this.form.value.lastName,
      birthPlace : this.form.value.birthPlace,
      birthDate : this.form.value.birthDate,
      workPlace : this.form.value.workPlace,
      formerBossName : this.form.value.formerBossName,
      formerBossPhone : this.form.value.formerBossPhone,
      startDate : this.form.value.startDate,
      finishDate: this.form.value.finishDate,
    }

    this._usuarioService.addUser(user);
    this._snackBar.open('El usuario fue agregado con éxito', '', {

      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    })
  }

}
