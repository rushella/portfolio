import Header from "./header";
import Section from "./section";
import { projects, links, fullname, bio} from "./consts";

function App() {
  return (
    <>
      <Header fullname={fullname} bio={bio}/>
      <Section
        className="flex-col"
        code="prj"
        name="/projects"
        items={projects}
      />
      <Section className="flex-col" code="lnk" name="/links" items={links} />
      
      <footer className="text-zinc-400 mt-auto">
        <hr className="border-zinc-700" />
        <span>2025</span>
      </footer>
    </>
  );
}

export default App;
