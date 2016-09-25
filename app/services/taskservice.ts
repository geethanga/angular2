import {Component, OnInit, Injectable } from '@angular/core';
import {Task} from '../Models/Task';
import {TASKS} from '../mocks/task-mocks';

@Injectable()
export class TaskService{
    tasks: Array<Task> = [new Task("Pick Laundry", "Tom Hanks", false), new Task("Code in Angular", "Tom Cruise", false)];
    
    public insert(taskName: string, assigneeName: string){
        let task = new Task(taskName, assigneeName, false);
        TASKS.push(task);
    }

    public  getTasks(): Task[]{
        return TASKS;
    }
}