import { experimentOn } from 'component-lab'

const commonContext = {
}

export default experimentOn('Stick Buttons')
  .case('Basic', {
    context: commonContext,
    template: `
    <tfn-stick-buttons [buttons]="['LP', 'HP', 'T', 'LK', 'HK', 'S']"></tfn-stick-buttons>
    `
  })
