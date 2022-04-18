import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    NgxChartsModule
  ],
  exports: [
    //imports
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    NgxChartsModule,
    //declarations
    PageNotFoundComponent
  ]
})
export class SharedModule { }
