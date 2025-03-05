import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../../services/flowbite.service';

@Component({
  selector: 'app-dismiss',
  templateUrl: './dismiss.component.html',
  styleUrls: ['./dismiss.component.css']
})
export class DismissComponent implements OnInit {
  title = 'web-app';
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
