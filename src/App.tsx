import "./App.css";
import summaryData from "./data.json";
import { DetailsItem } from "./components/result-details/DetailsItem";
import React, { useEffect } from "react";

export interface SummaryItem {
  category: string;
  score: number;
}



function App() {

const finalResult = 76
const [value,setValue] =React.useState(0)
React.useEffect( ()=>{
  if(value < finalResult) {
    setTimeout(()=>setValue(value + 1),10)
  }
},[value])



  return (
    <main>
      <div className="summary-container">
        <div className="result grid-container">
          <h1 className="sub-title">Your Result</h1>

          <div className="circle">
            <span>{value}</span> <p>of 100</p>
          </div>

          <div className="grid-container">
            <h1 className="result-title">Great</h1>

            <p className="message">
              Your performance exceed 65% of the people conducting the test
              here!
            </p>
          </div>
        </div>

        <div className="summary">
          <div className="summary grid-container">
            <h1 className="summary-title">Summary</h1>

            <div className="details-item-list">
              <>

                {summaryData.map((item: SummaryItem) => {
                  return <DetailsItem {...item} key={item.category} />;
                })}

              </>
            </div>
            <button className="button">Continue</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
