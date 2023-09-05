import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Lawyer,
} from 'src/app/helpers/types';
import { HttpService } from 'src/app/services/http.service';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
})
export class MainComponent implements OnInit {
  @ViewChild('matSelect') matSelect!: any;
  async ngOnInit(): Promise<void> {
     console.log("ngOnInit");
     
    }
    selectedLawyer?: Lawyer;
    query?: string;
    lawyerId?: string = '';

  logout() {
    this.selectedLawyer = undefined;
    this.query = undefined;
    localStorage.removeItem('lawyer');
    this.lawyerId = '';
  }

}



