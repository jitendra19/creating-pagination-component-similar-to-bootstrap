import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPaginationAdvanced } from './pagination-advanced';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [BrowserModule, NgbModule, FontAwesomeModule],
  declarations: [NgbdPaginationAdvanced],
  exports: [NgbdPaginationAdvanced],
  bootstrap: [NgbdPaginationAdvanced]
})
export class NgbdPaginationAdvancedModule {}
