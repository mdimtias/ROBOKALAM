import React from "react";
import InstructionalVideo from "./component/InstructionalVideo";
import LiveStream from "./component/LiveStream";
import Form from "./component/Form";
function App() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="col-span-2">
            <InstructionalVideo></InstructionalVideo>
          </div>
          <div className="col-span-1">
            <LiveStream></LiveStream>
          </div>
        </div>
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
