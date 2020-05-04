import { Component , OnInit, Inject} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Episode} from '../../shared/episode';
import {EpisodeProvider} from '../../providers/episode/episode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  episode: Episode;
  episodes: Episode[];

  episodeErr: string;


  constructor(public navCtrl: NavController
    , private episodeService: EpisodeProvider
    , @Inject('BaseURL') private BaseURL) {

  }

  ngOnInit(){
    this.episodeService.getEpisodes()
    .subscribe({ep => this.episodes = ep;}
      , {err => this.episodeErr = err;});
  }
}
