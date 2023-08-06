import Header from './components/header'
import content from './data/content.json'

function App() {
  return (
  <>
    <div className="h-screen max-w-[1560px] grid place-items-center grid-flow-row m-auto">
      <Header></Header>
      <div className="text-center">
        <h1 className="text-4xl font-bold pb-2">Ojas Baral</h1>
        <h1 className="text-lg pb-2">Computer Science Student</h1>
        <h1><a className="text-[#3562ff] hover:underline cursor-pointer" href="https://www.linkedin.com/in/ojasbaral" target="_blank">https://www.linkedin.com/in/ojasbaral</a ></h1>
        <h1><a className="text-[#3562ff] hover:underline cursor-pointer" href="https://github.com/ojasbaral" target="_blank">https://github.com/ojasbaral</a ></h1>
      </div>
    </div>

    <div className="max-w-[1200px] m-auto p-4">
      <h1 className="text-2xl">About</h1>
      <h1 className="pt-4">{content.about.content}</h1>

      <h1 className="pt-8">GPA: {content.about.GPA}</h1>
      <h1>Dean's List: {content.about.DL}</h1>
      <h1>Relevant Coursework: {content.about.RL} </h1>
    </div>

    <div className="max-w-[1200px] m-auto p-4 pt-12">
      <h1 className="text-2xl">Experience</h1>
      
    </div>
  </>
  );
}

export default App;
