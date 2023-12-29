import { Component } from '@angular/core';
import ListHeader from '../../types/listHeader';
import { CardProjectComponent } from '../../components/card-project/card-project.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
