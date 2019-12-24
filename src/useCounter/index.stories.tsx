import 'vue-tsx-support/enable-check'
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { createComponent } from '../api'
import { ShowDocs } from '../utils_dev/storybook'
import { useCounter } from '.'

type Inject = {
  count: number
  inc: Function
  dec: Function
  set: Function
  reset: Function
}

// @ts-ignore
const Docs: any = () => <ShowDocs md={require('./index.md')} />

const Demo = createComponent({
  setup () {
    const [count, { inc, dec, set, reset }] = useCounter()
    return {
      count,
      inc,
      dec,
      set,
      reset,
    }
  },

  render (this: Vue & Inject) {
    const { count, inc, dec, set, reset } = this
    return (
      <div>
        <div>Count: {count}</div>
        <button onClick={() => inc()}>Increment</button>
        <button onClick={() => dec()}>Decrement</button>
        <button onClick={() => inc(5)}>Increment (+5)</button>
        <button onClick={() => dec(5)}>Decrement (-5)</button>
        <button onClick={() => set(100)}>Set (100)</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => reset(25)}>Reset (25)</button>
      </div>
    )
  },
})

storiesOf('State|useCounter', module)
  .add('docs', () => Docs)
  .add('demo', () => Demo)
