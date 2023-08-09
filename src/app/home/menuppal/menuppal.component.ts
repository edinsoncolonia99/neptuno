import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-menuppal',
  templateUrl: './menuppal.component.html',
  styleUrls: ['./menuppal.component.css']
})
export class MenuppalComponent implements OnInit {
  
  constructor(private router: Router,
              private route: ActivatedRoute){

  }

  ngOnInit(): void {

    };
  
   redirectToLogin() {
    this.router.navigate(['/login']);  
  }

  showMessage() {
    alert('Se debe iniciar sesión');
  }
}
