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
    cover: {
      title: 'Some Title'
    }
  }
}


export default experimentOn('Cover Card')
  .case('Basic', {
    context: commonContext,
    template: `
      <tfn-cover-card
        (click)="onClick($event)"
        (favorite)="onFavorite($event)"
        (info)="onInfo($event)"
        (share)="onShare($event)"
        [notebook]="notebook"></tfn-cover-card>
    `
  })
