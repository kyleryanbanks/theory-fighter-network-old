import { experimentOn } from 'component-lab'

const commonContext = {
  onDirection(event) {
    console.group('Direction')
    console.log('Event', event)
    console.groupEnd()
  }
}

export default experimentOn('Stick Input')
  .case('Basic', {
    context: commonContext,
    template: `
    <tfn-stick-input
      (direction)="onDirection($event)"></tfn-stick-input>
    `
  })
