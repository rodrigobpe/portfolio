import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import ListHeader from '../../types/listHeader';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  listHeader: ListHeader[] = [
    {
      name: "Quem eu sou?",
      link: "#about"
    },
    {
      name: "Projetos",
      link: "#projects"
    },
    {
      name: "Serviços",
      link: "#services"
    },
    {
      name: "Habilidades",
      link: "#skills"
    },
    {
      name: "Contato",
      link: "#skills"
    }
  ]
}
