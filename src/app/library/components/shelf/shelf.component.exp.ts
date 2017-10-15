import { experimentOn } from 'component-lab'

const commonContext = {
  onCover(event) {
    console.group('Cover')
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
      title: 'Title 1',
      id: 'Title_1_key'
    },
    {
      title: 'Title 2',
      id: 'Title_2_key'
    },
    {
      title: 'Title 3',
      id: 'Title_3_key'
    },
    {
      title: 'Title 4',
      id: 'Title_4_key'
    },
    {
      title: 'Title 5',
      id: 'Title_5_key'
    }
  ],
  title: 'Shelf Title'
}

export default experimentOn('Shelf')
  .case('Basic', {
    context: commonContext,
    template: `
      <tfn-shelf
        (cover)="onCover($event)"
        (favorite)="onFavorite($event)"
        (unfavorite)="onUnfavorite($event)"
        (info)="onInfo($event)"
        (share)="onShare($event)"
        [notebooks]="notebooks"
        [title]="title"></tfn-shelf>
    `
  })
