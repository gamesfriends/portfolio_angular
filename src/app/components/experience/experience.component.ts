import { Component, OnInit } from '@angular/core';
import { DataDBService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  miPortfolio: any;

  constructor(private datosPortfolio: DataDBService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtainData().subscribe(data => {
      console.log(data);
      this.miPortfolio = data.experience;
      console.log(this.miPortfolio);
    });
  }

}
