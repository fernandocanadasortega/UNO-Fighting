import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.page.html',
  styleUrls: ['./user-stats.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UserStatsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
