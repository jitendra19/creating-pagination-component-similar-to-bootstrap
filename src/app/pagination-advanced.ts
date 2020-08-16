import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngbd-pagination-advanced',
  templateUrl: './pagination-advanced.html',
  styleUrls: ['./pagination-advanced.css']
})
export class NgbdPaginationAdvanced implements OnInit {
    page = 1;
    currentPage=1;
    sizeofPage=10;
    numberOfRecords=550;
    firstPage = 1;
    lastPage = Math.ceil(this.numberOfRecords/this.sizeofPage);
    pageArray = []; // min is 6, max is 7

    ngOnInit(): void {        
      this.getPages();
    } 
    getPages() {
      if(this.lastPage > 7) {
        this.pageArray = this.currentPage === this.firstPage 
                ? [1,2,3,4,5,'...', this.lastPage] 
                : [ 1, '...',this.lastPage-4,this.lastPage-3,this.lastPage-2,this.lastPage-1, this.lastPage]
      } else {
        this.pageArray = [];    
        for(let j=1;j<=this.lastPage;j++) {
          this.pageArray.push(j);      
        }      
      }
    } 

    buttonClick(e) {
      const value = e.target.innerHTML;
      console.log(value);
      if(Number(value)) {
        this.currentPage = Number(value);      
      } else {    
          switch(value) {        
            case '--':
              this.currentPage = this.firstPage;            
              this.getPages();
              break;
            case '-':
              this.currentPage--;
              if(this.pageArray.indexOf(this.currentPage)<0) {
                this.pageArray = this.currentPage<=5
                                  ?  [1,2,3,4,5,'...', this.lastPage]
                                  : this.currentPage>this.lastPage-5
                                    ? [ 1, '...',this.lastPage-4,this.lastPage-3,this.lastPage-2,this.lastPage-1, this.lastPage]
                                    : [1, '...', this.currentPage-4, this.currentPage-3, this.currentPage-2, this.currentPage-1, this.currentPage,'...', this.lastPage]                                 
                
              }
              break;           
            case '++':
              this.currentPage = this.lastPage;            
              this.getPages();
              break;
            case '+':
              this.currentPage++;
              if(this.pageArray.indexOf(this.currentPage)<0) {
                this.pageArray = this.currentPage>this.lastPage-5 
                                ? [ 1, '...',this.lastPage-4,this.lastPage-3,this.lastPage-2,this.lastPage-1, this.lastPage]
                                : [1, '...', this.currentPage, this.currentPage+1, this.currentPage+2, this.currentPage+3, this.currentPage+4,'...', this.lastPage]              
              }
              break;           
            default: // in case of '...'            
              break;
          }        
        }  
    }

    shouldIconsDisabled(whichIcon) {
      if(this.lastPage <= 7) {
        return true;
      }
      switch(this.currentPage) {
        case this.firstPage:
          return whichIcon ==='first' || whichIcon ==='previous';
        case this.lastPage:
          return whichIcon ==='last' || whichIcon ==='next';                
        default:
          return false;
      }    
    }

    isCurrentPage(i) {
      return this.currentPage===i;
    }
}
