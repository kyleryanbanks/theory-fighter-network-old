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
  notebook: {
    title: 'Some Title',
    id: 'Random_Key_123'
  }
}


export default experimentOn('Cover Card')
  .case('Basic', {
    context: commonContext,
    template: `
      <tfn-cover-card
        (cover)="onCover($event)"
        (favorite)="onFavorite($event)"
        (unfavorite)="onUnfavorite($event)"
        (info)="onInfo($event)"
        (share)="onShare($event)"
        [notebook]="notebook"></tfn-cover-card>
    `
  })
