import { experimentOn } from 'component-lab'

const commonContext = {
}

export default experimentOn('Stick Buttons')
  .case('Basic', {
    context: commonContext,
    template: `
    <tfn-stick-buttons [buttons]="['LP', 'LK', 'HP', 'HK', 'T', 'S', 'PP', 'KK']"></tfn-stick-buttons>
    `
  })
