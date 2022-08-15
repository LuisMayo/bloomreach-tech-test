import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StepComponent } from './components/step/step.component';
import { FilterComponent } from './components/filter/filter.component';
import { DropdownModule } from 'primeng/dropdown';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
