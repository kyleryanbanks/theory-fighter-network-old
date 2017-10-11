import { experimentOn } from 'component-lab'

const commonContext = {
  onClick(event) {
    console.group('Click')
    console.log('Event', event)
    console.groupEnd()
  },
  onFavorite(event) {
    console.group('Favorite')
    console.log('Event', event)
    console.groupEnd()
  },
  onUnfavorite(event) {
    console.group('Unfavorite')
    console.log('Event', event)
    console.groupEnd()
  },
  onInfo(event) {
    console.group('Info')
    console.log('Event', event)
    console.groupEnd()
  },
  onShare(event) {
    console.group('Share')
    console.log('Event', event)
    console.groupEnd()
  },
  notebooks: [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    },
    {
      title: 'Title 5'
    }
  ],
  title: 'Shelf Title'
}

export default experimentOn('Shelf')
  .case('Basic', {
    context: commonContext,
    template: `
      <tfn-shelf
        (click)="onClick($event)"
        (favorite)="onFavorite($event)"
        (unfavorite)="onUnfavorite($event)"
        (info)="onInfo($event)"
        (share)="onShare($event)"
        [notebooks]="notebooks"
        [title]="title"></tfn-shelf>
    `
  })
