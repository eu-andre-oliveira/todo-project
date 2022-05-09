import { TarefaService } from './../services/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Component({
  selector: 'app-extrato-todo',
  templateUrl: './extrato-todo.component.html',
  styleUrls: ['./extrato-todo.component.scss']
})
export class ExtratoTodoComponent implements OnInit {
    tarefas: Tarefa[] = [];

  constructor(private service: TarefaService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((tarefas: Tarefa[])=>{
      this.tarefas = tarefas;
    });
  }
}
