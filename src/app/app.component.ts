import { Component,  } from '@angular/core';
import { ConnexionComponent } from './connexion/connexion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'm1p10meanFront';
  displayConn=false;
  displayIn=false;
  onPress(id:any){
    if(id==1){
      this.displayConn = !this.displayConn;
      this.displayIn = false;
    }else{
      this.displayConn = false;
      this.displayIn = !this.displayIn;
    }
  }
}
