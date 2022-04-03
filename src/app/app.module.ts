import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //This allows two way binding [()] = "example"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { PostsComponent } from './posts.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from 'src/summary.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    PostsComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //This allows two way binding [()] = "example"
    HttpClientModule
  
  ],
  providers: [
    CoursesService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
