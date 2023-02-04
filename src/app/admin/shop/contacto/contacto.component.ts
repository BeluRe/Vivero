import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

 form: FormGroup | any ;

  constructor(private formBuilder: FormBuilder) { 
    this.buildForm();
  }
  
  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['',  [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(80)]],
      
    });
    this.form.valueChanges
    .subscribe((value: any) => {
      console.log(value);
    });
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  get emailField(){
    return this.form.get('email');
  }
}
