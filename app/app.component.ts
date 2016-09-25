import { Component } from '@angular/core';
import { TasksComponent } from './components/tasks.component';
import { LoginComponent } from './components/login.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  providers: [ROUTER_PROVIDERS],
  directives: [TasksComponent, LoginComponent, ROUTER_DIRECTIVES],
  templateUrl: 'app.component.html'
})

@RouteConfig([
      { path:'/login', name: 'Login', component:LoginComponent, useAsDefault: true},  
      { path:'/tasks', name: 'Tasks', component:TasksComponent}
])

export class AppComponent { }