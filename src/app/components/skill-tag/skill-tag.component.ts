import { Component, Input } from '@angular/core';
import ListSkillTag from '../../types/listSkillTag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-tag.component.html',
  styleUrl: './skill-tag.component.scss'
})
export class SkillTagComponent {
  @Input() skill:ListSkillTag;
}
