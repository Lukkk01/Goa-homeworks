import SimpleComponent from "./SimpleComponent.jsx"
import ClassNameExample from "./ClassNameExample"
import SelfClosingExample from "./SelfClosingExample.jsx/index.js"
import CurlyBracesExample from "./CurlyBracesExample"
import JsInJsx from "./JsInJsx"
import VariableAttributes from "./VariableAttributes"
import ConditionalRender from "./ConditionalRender"
import ListRender from "./ListRender"
import EventExample from "./EventExample"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Info from "./Components/Info"
import Card from "./Components/Card"

function App() {
  return (<>
    {/* Task 2 */}
    <SimpleComponent />

    {/* Task 3 */}
    {/* class იმიტომ არ ვიყენებთ რომ ის არის რეზერვირებული სიტყვა javascript-ში */}
    <ClassNameExample />

    {/* Task 4 */}
    <SelfClosingExample />

    {/* Task 5 */}
    <JsInJsx />

    {/* Task 6 */}
    <CurlyBracesExample />

    {/* Task 7 */}
    <VariableAttributes />

    {/* Task 8 */}
    <ConditionalRender />

    {/* Task 9 */}
    <ListRender />

    {/* Task 10 */}
    <EventExample />

    {/* Task 11 */}
    {/* ALl components exported */}

    {/* Task 12 */}
    {/* Import all components in order */}
    <Header />
    <Card />
    <Info />
    <Footer />
  </>)
}

export default App