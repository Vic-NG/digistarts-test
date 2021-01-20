import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public loginForm: FormGroup;

  valor
  valor1

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      'num': ['', Validators.required]
      
    });
  }

  getValue(){
this.valor = this.loginForm.value;

this.valor1 = document.createElement('li');
  var conteudoNovo = document.createTextNode(this.valor.num);
  this.valor1.appendChild(conteudoNovo); 

console.log(this.valor.num)
  }






}
