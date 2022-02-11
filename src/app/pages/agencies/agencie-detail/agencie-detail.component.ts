import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  fromType: string;

  constructor(public fb: FormBuilder, private router: Router,
    private activatedRoute: ActivatedRoute,
    private agenciesService: AgenciesService) {
    this.fromType = this.activatedRoute.snapshot.params["type"];

    if (this.fromType.toLowerCase() !== 'edit') {
      this.title = `NUEVA AGENCIA`;
      this.agencieRequest = {
        agencia: '',
        distrito: '',
        provincia: 'Lima',
        departamento: 'Lima',
        direccion: '',
        lat: 0,
        lon: 0,
      };
    } else {
      const data = this.router.getCurrentNavigation()!.extras.state;
      if (!data) {
        this.router.navigate(["/agencies"]);
      }
      //@ts-ignore
      const agencie = data.agencie as IAgencie;
      console.log('AGENCIA', agencie)
      this.title = `ACTUALIZAR AGENCIA "${agencie.agencia.toUpperCase()}"`;
      this.agencieRequest = { ...agencie };
    }
  }

  errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }

  cancel() {
    this.router.navigate(["/agencies"]);
  }

  submitForm() {

    if (this.form.invalid) {
      return;
    }

    for (const prop in this.form.controls) {
      this.form.value[prop] = this.form.controls[prop].value;
    }

    if (this.fromType.toLowerCase() !== 'edit') {
      this.agenciesService.add(this.form.value)
        .subscribe(response => {
          console.log('GUARDADO : ', response);
        })
    } else {
      this.agenciesService.update(this.form.value)
        .subscribe(response => {
          console.log('ACTUALIZADO : ', response);
        })
    }
    this.router.navigate(["/agencies"]);
  }

  handleSearch(event: any) {

  }

  ngOnInit(): void {

    const pr = this.agencieRequest;
    this.form = this.fb.group({
      agencia: [pr.agencia],
      departamento: [{ value: pr.departamento, disabled: true }],
      provincia: [{ value: pr.provincia, disabled: true }],
      distrito: [{ value: pr.distrito, disabled: this.fromType.toLowerCase() === 'edit' }],
      direccion: [pr.direccion, [Validators.required, Validators.minLength(10), Validators.maxLength(60)]],
      lat: [pr.lat, [Validators.required]],
      lon: [pr.lon, [Validators.required]],
    })
  }

}
