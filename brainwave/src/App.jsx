import ButtonGradient from "./assets/svg/ButtonGradient"
import Button from "./components/Button"
function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className="pt-[4.7rem] lg:pt-[5.6rem] ">
      <Button className="mt-10 p-4" href="#login">
        Buttonnn
      </Button>
    </div>
    <ButtonGradient/>
    </>
  )
}

export default App
