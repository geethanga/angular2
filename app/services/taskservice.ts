import {Component, OnInit, Injectable } from '@angular/core';
import {Task} from '../Models/Task';
import {TASKS} from '../mocks/task-mocks';

@Injectable()
export class TaskService{
    
    public insert(taskName: string, assigneeName: string){
        let task = new Task(taskName, assigneeName, false);
        TASKS.push(task);
    }

    public  getTasks(): Promise<Task[]>{
        return Promise.resolve(TASKS);
    }
}