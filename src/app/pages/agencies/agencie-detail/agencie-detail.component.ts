import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAgencie } from 'src/app/interfaces/agencies.interface';
import { AgenciesService } from 'src/app/services/agencies.service';

@Component({
  selector: 'app-agencie-detail',
  templateUrl: './agencie-detail.component.html',
  styleUrls: ['./agencie-detail.component.scss']
})
export class AgencieDetailComponent implements OnInit {

  title: string;
  form!: FormGroup;
  agencieRequest: IAgencie;
  isNewRecord: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IAgencie, private dialogRef: MatDialogRef<AgencieDetailComponent>,
    public fb: FormBuilder, private agenciesService: AgenciesService) {
    this.isNewRecord = data.agencia ? false : true;
    if (this.isNewRecord) {
      this.title = `NUEVA AGENCIA`;
      this.agencieRequest = {
        agencia: '',
        distrito: '',
        provincia: '',
        departamento: '',
        direccion: '',
        lat: 0,
        lon: 0,
      };
    } else {
      this.title = `ACTUALIZAR AGENCIA "${data.agencia.toUpperCase()}"`;
      this.agencieRequest = { ...data };
    }
  }

  errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }

  cancel() {
    this.dialogRef.close({ data: 'you cancelled' })
  }

  submitForm() {

    if (this.form.invalid) {
      return;
    }

    if (this.isNewRecord) {
      this.agenciesService.add(this.form.value)
        .subscribe(response => {
          console.log('GUARDADO : ', response);
        })
    } else {

      for (const prop in this.form.controls) {
        this.form.value[prop] = this.form.controls[prop].value;
      }

      this.agenciesService.update(this.form.value)
        .subscribe(response => {
          console.log('ACTUALIZADO : ', response);
        })
    }

    this.dialogRef.close({ data: this.form.value })
  }

  ngOnInit(): void {
    const pr = this.agencieRequest;
    this.form = this.fb.group({
      agencia: [pr.agencia],
      departamento: [{ value: pr.departamento, disabled: true }],
      provincia: [{ value: pr.provincia, disabled: true }],
      distrito: [{ value: pr.distrito, disabled: true }],
      direccion: [pr.direccion, [Validators.required, Validators.minLength(10), Validators.maxLength(60)]],
      lat: [pr.lat, [Validators.required]],
      lon: [pr.lon, [Validators.required]],
    })
  }

}
