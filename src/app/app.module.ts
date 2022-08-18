import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StepComponent } from './components/step/step.component';
import { FilterComponent } from './components/filter/filter.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputNumberModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
