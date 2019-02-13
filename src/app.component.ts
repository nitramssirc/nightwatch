import { Component } from "@angular/core";

@Component({
    selector:'app-root',
    template:`
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">N I G H T W A T C H E R</a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="navbar-collapse collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
            <a class="nav-link" [routerLink]="['/playRandom']">Play Random</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" [routerLink]="['/playRandom']">TV Shows</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" [routerLink]="['/movies']">Movies</a>
            </li>
        </ul>
        </div>
    </nav>
    <router-outlet></router-outlet>`
  })
  export class AppComponent {
  }