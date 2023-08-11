import  React,{useState} from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

const App = () =>
{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onLeaveFeedback = event => {
  const { name } = event.target;
    switch (name) {
      case "good":
        setGood(good => good + 1,);      
        break;
        case "neutral":
          setNeutral(neutral => neutral + 1,);      
          break;
        case "bad":
          setBad(bad => bad + 1,);      
            break;  
      default:
        break;
    }
};
  const countTotalFeedback=()=> {
  return good + neutral + bad;
}
  const countPositiveFeedbackPercentage=(good)=> {
  return Math.round((good / countTotalFeedback()) * 100);
};
return(
  <div
    style={{
      height: '100vh',
      color: '#010101'
    }}
  >
  <Section title="Please leave feedback">
  <FeedbackOptions
    options={Object.keys({good,neutral, bad})}
    onLeaveFeedback={onLeaveFeedback}
    />
  </Section>
  <Section title="Statistics" >
    {countTotalFeedback()?
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={countTotalFeedback(good,neutral,bad)}
      positivePercentage={countPositiveFeedbackPercentage(good)}
    />:<Notification message="There is no feedback"/>}
  </Section>
  </div>
);
}

// class App extends React.Component{
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = event => {
//     const { name } = event.target;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };
//   countTotalFeedback() {
//     const {good,neutral, bad} = this.state;
//     return good + neutral + bad;
//   }
//   countPositiveFeedbackPercentage(good) {
//     return Math.round((good / this.countTotalFeedback()) * 100);
//   }
  
//   render()
//   {
//     const { good, neutral, bad } = this.state;
//     return(
//     <div
//       style={{
//         height: '100vh',
//         color: '#010101'
//       }}
//     >
//     <Section title="Please leave feedback">
//     <FeedbackOptions
//       options={Object.keys(this.state)}
//       onLeaveFeedback={this.onLeaveFeedback}
//       />
//     </Section>
//     <Section title="Statistics" >
//       {this.countTotalFeedback()?
//       <Statistics
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         total={this.countTotalFeedback(good,neutral,bad)}
//         positivePercentage={this.countPositiveFeedbackPercentage(good)}
//       />:<Notification message="There is no feedback"/>}
//     </Section>
//     </div>
//   );
// }
// }

export default App;
