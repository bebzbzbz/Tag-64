import './index.css'
import FAQItem from './components/FAQItem'
import Form from './components/Form'
import DayNight from './components/DayNight'
import Counter from './components/Counter'
Counter

function App() {

  return (
    <>
      <h2>Level 1_1</h2>
      <ul className='FAQ'>
        <FAQItem question="Why is React great?" answer="Fast learning curve"/>
      </ul>

      <h2>Level 1_3</h2>
      <Counter />

      <h2>Level 1_6</h2>
      <Form/>

      <h2>Level 2_2</h2>
      <DayNight/>
    </>
  )
}

export default App
