export class Task implements ITask{
    constructor(public name: string, public assignee: string, public completed: boolean){
    }
}

interface ITask{
    name: string;
    assignee: string;
    completed: boolean;
}