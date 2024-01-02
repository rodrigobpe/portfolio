import { Component } from '@angular/core';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import ListProjects from '../../types/listProjects';
import { CommonModule } from '@angular/common';
import { SkillTagComponent } from '../../components/skill-tag/skill-tag.component';
import ListSkillTag from '../../types/listSkillTag';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProjectComponent, CommonModule, SkillTagComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  listProjects: ListProjects[] = [
    {
      title: "Poke Angular",
      github: "https://github.com/rodrigobpe/poke-angular",
      live_preview: "https://rodrigobpe.github.io/poke-angular/",
      img: "assets/poke-angular.png",
      description: "O projeto foi desenvolvido com intúito de aprimorar meus conhecimentos em Angular. A ideia principal do projeto é prover ao usuário as 9 gerações de pokémons, informando nome e tipo do pokémon. Posteriormente irei realizar mais algumas features para o projeto.",
      tags: ['Angular', 'Poke Api']
    },

  ]

  skills: ListSkillTag[] = [
    {
      name: 'Angular',
      color:'angular'
    },
    {
      name: 'Vue',
      color:'vue'
    },
    {
      name: 'Nuxt.js',
      color:'nuxt'
    },
    {
      name: 'Express.js',
      color:'express'
    },
    {
      name: 'PostgreSQL',
      color:'postgres'
    },
    {
      name: 'MySQL',
      color:'mysql'
    },
    {
      name: 'Nest.js',
      color:'nest'
    },
    {
      name: 'Figma',
      color:'figma'
    },
  ]
}
