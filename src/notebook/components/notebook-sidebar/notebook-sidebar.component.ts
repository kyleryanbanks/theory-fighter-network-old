import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'tfn-notebook-sidebar',
  templateUrl: './notebook-sidebar.component.html',
  styleUrls: ['./notebook-sidebar.component.scss']
})
export class NotebookSidebarComponent implements OnInit {

  navigation = [
    {
      heading: 'Overview',
      icon: 'person',
      subheadings: [
        {
          title: 'Basics',
          link: 'basics'
        },
        {
          title: 'Gameplan',
          link: 'gameplan'
        }
      ],
    },
    {
      heading: 'Theory',
      icon: 'lightbulb_outline',
      subheadings: [
        {
          title: 'Notes',
          link: 'notes'
        },
        {
          title: 'WIP',
          link: 'wip'
        },
        {
          title: 'Inbox',
          link: 'inbox'
        }
      ]
    },
    {
      heading: 'Move List',
      icon: 'view_list',
      subheadings: [
        {
          title: 'Basic Mobility',
          link: 'basics'
        },
        {
          title: 'Normals',
          link: 'normals'
        },
        {
          title: 'Command Normals',
          link: 'commands'
        },
        {
          title: 'Special Moves',
          link: 'specials'
        },
        {
          title: 'Super Moves',
          link: 'supers'
        },
        {
          title: 'Infinity Stones',
          link: 'stones'
        }
      ]
    },
    {
      heading: 'Sequences',
      icon: 'linear_scale',
      subheadings: [
        {
          title: 'Okizeme',
          link: 'okizeme'
        },
        {
          title: 'Neutral Setups',
          link: 'neutral'
        },
        {
          title: 'Blockstrings',
          link: 'blockstrings'
        },
        {
          title: 'Combos',
          link: 'combos'
        }
      ]
    },
    {
      heading: 'Matchups',
      icon: 'compare_arrows',
      subheadings: [
        {
          title: 'Character',
          link: 'character'
        },
        {
          title: 'Teams',
          link: 'teams'
        }
      ]
    },
    {
      heading: 'Training Regiment',
      icon: 'fitness_center',
      subheadings: [
        {
          title: 'Combos',
          link: 'combos'
        },
        {
          title: 'Punishes',
          link: 'punishes'
        },
        {
          title: 'Setups',
          link: 'setups'
        },
        {
          title: 'Advanced Mobility',
          link: 'mobility'
        },
        {
          title: 'Conversions',
          link: 'conversions'
        }
      ]
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNav(link: String) {
    this.router.navigate([`${link}`])
  }

}
