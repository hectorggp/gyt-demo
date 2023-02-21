import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  demoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) {
    this.demoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      sexo: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  async submitForm() {
    console.log(this.demoForm)
    if (this.demoForm.valid) {
      // Envía el formulario al servidor
      const toast = await this.toastController.create({
        message: '¡Formulario enviado con éxito!',
        duration: 2000
      });
      toast.present();
    }
  }

}
