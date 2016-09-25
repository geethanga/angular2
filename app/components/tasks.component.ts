import { Component, OnInit } from '@angular/core';
import {TaskService} from '../services/taskservice';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Task} from '../models/Task';

    @Component({
      moduleId: module.id,
      selector: 'tasks',
      providers: [TaskService],
      directives: [AlertComponent,DROPDOWN_DIRECTIVES, CORE_DIRECTIVES],
      templateUrl: 'tasks.component.html',
      styles: [".red {color: red}", ".blue { color: blue}"]
    })

    export class TasksComponent implements OnInit {
      constructor(public taskService: TaskService){}
      toggle: boolean = false ;
      taskName: string;
      assigneeName: string;
      tasks : Array<Task>;

      ngOnInit():void {
        this.initializeTasks();
      }

      addTask(){
        this.taskService.insert(this.taskName, this.assigneeName);
        this.taskName = "";
        this.assigneeName = "";
      }

      initializeTasks(){
        this.tasks = this.taskService.getTasks();
      }
    } 

    