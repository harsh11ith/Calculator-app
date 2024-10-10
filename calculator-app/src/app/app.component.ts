import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], // Removed 'evaluate' from imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'calculator-app';
  toshow = '0';
  currvalue = '';

  writetoinput(value: string) {
    this.currvalue = this.currvalue + value;
    this.toshow = this.currvalue;
  }

  equals() {
    try {
      this.toshow = evaluate(this.currvalue); 
      this.currvalue = this.toshow;
    } catch (error) {
      this.toshow = 'Error';
    }
  }

  clear() {
    this.currvalue = '';
    this.toshow = '0';
  }

  // Slicing to remove the last element
  back() {
    this.currvalue = this.currvalue.slice(0, -1);
    this.toshow = this.currvalue;
    if (this.toshow == '') {
      this.toshow = '0';
    }
  }

  calevalue(solve: any) {
    if (solve.charAt(0) == '0') {
      solve = solve.slice(1);
    }
    try {
      this.toshow = evaluate(solve); 
    } catch (error) {
      this.toshow = 'Error'; 
    }
  }
}
