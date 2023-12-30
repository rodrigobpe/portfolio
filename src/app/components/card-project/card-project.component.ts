import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import ListProjects from '../../types/listProjects';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {
  @Input() listProjects:ListProjects;
}
