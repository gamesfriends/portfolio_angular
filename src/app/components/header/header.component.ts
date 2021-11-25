import { Component, OnInit } from '@angular/core';
import { DataDBService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio: any;

  constructor(private datosPortfolio: DataDBService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtainData().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
    });
  }

}
