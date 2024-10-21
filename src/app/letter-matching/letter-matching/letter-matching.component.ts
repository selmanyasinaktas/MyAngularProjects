import { Component } from '@angular/core';
import { lorem } from 'faker';
 
@Component({
  selector: 'app-letter-matching',
  templateUrl: './letter-matching.component.html',
  styleUrl: './letter-matching.component.css'
})
export class LetterMatchingComponent {
  randomText: string = lorem.sentence();  
  enteredText: string = '';        
  messageVisible: boolean = false; 
  isCorrect: boolean = false;  
  transitionVisible: boolean = false
  
  getInputValue(event: Event) {
    const input = event.target as HTMLInputElement;  // EventTarget'ı HTMLInputElement olarak cast ediyoruz
    this.enteredText = input.value;
  }

  compare(letter: string, enteredLetter: string): string {
    if (!enteredLetter) return ''; 
    return letter === enteredLetter ? 'text-green-500' : 'text-red-500';
    
  }


  
  checkInput() {
    this.isCorrect = this.randomText === this.enteredText;
    this.transitionVisible = true;
    this.messageVisible = true;
    
    setTimeout(() => {
      this.transitionVisible = false;
      
    },1000);

    setTimeout(() => {
      this.messageVisible = false;
    }, 2000); 
  }
}
