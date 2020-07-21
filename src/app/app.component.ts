import { Component,ViewChild,ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('content') content : ElementRef ;

  public downloadPDF(){
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor': function(element , renderer){
        return true ; 
      }
    };
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML,15,15,{

      'width': 190,
      'elmentHandler':specialElementHandlers
    });

doc.save('test.pdf');
  }
  title = 'htmltopdf';
}
