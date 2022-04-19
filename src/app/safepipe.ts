import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url:any) {
  	 // return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  	 debugger
  	    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);  
        var newUrl="https://www.youtube.com/embed/"+match[7]+"?rel=0"
        return this.sanitizer.bypassSecurityTrustResourceUrl(newUrl);
  }
} 