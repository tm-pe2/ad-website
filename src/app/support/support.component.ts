import { Component, OnInit } from '@angular/core';
import { SupportService } from 'src/app/support.service';
import { Faq } from './faq';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  faqs: Faq[] = [];

  constructor(private supportService: SupportService) { }

  ngOnInit(): void {
    this.getFaqs();
  }

  getFaqs(): void {
    this.supportService.getFaqs().
    subscribe(faqs => this.faqs = faqs);
  }
}
