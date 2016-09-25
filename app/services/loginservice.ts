import {Component, OnInit, Injectable } from '@angular/core';

@Injectable()
export class LoginService{
    public login(username: string, password: string) : boolean {
        return (username === password);
    }
}