import { Component, OnInit } from '@angular/core';
import { ConversorService } from './conversor.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  par: {
    val: number,
    uni: string
  }
  para = 'm'
  resultado: number
  unidades: string[]

  constructor(private conversorService: ConversorService) { }
  ngOnInit() {
    this.unidades = this.conversorService.getUnidades()
  }

  formatarUnidade(unidade) {
    this.resultado = null
    if (unidade.valid) {
      this.par = this.conversorService.formatarUnidade(unidade.value)
    }
  }

  verificacaoSubmit(verificar){
    return verificar.valid && !!this.par
  }

  converter(){
    this.resultado = this.conversorService.converterParaUnidade(this.par.val, this.par.uni, this.para)
  }

}
