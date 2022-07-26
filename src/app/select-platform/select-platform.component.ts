import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_RESUME } from '../models/resume';
import { SelectPlatformService } from '../services/select-platform.service';

@Component({
  selector: 'app-select-platform',
  templateUrl: './select-platform.component.html',
  styleUrls: ['./select-platform.component.scss']
})
export class SelectPlatformComponent implements OnInit {
  platforms = MOCK_RESUME.platforms;
  url = 'localhost:4200'

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  redirect(item: string) {
    let urlPlatform = item.charAt(0).toLowerCase() + item.slice(1);
    this.router.navigate([`/${urlPlatform}`]);

  }
}
