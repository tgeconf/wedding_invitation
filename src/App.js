import "./App.css";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import invitation from "./invitation.png";

function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <div className="App">
      <SwipeableViews
        containerStyle={{ height: "100vh" }} // ensure container occupies the full height
        slideStyle={{ height: "100vh" }} // each slide occupies the full height
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        resistance // This provides some resistance at the edges
        axis="y" // This restricts the sliding to the y-axis (vertical)
      >
        <div className="page">
          <h1>Page 1</h1>
          <p>Content for the first page.</p>
        </div>
        <div className="page">
          <h1>Page 2</h1>
          <p>Content for the second page.</p>
        </div>
        <div className="page">
          <h1>Page 3</h1>
          <p>Content for the third page.</p>
        </div>
      </SwipeableViews>
    </div>
  );
}

export default App;
