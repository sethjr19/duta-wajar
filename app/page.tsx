import Image from "next/image";
import Main from '../app/components/main'
import About from "./components/about";
import Projects from "./components/projects";
import Whatwedo from "./components/whatwedo";
import FormSection from "./components/formsection";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <NavBar/>
      <Main></Main>
      <About></About>
      <Projects></Projects>
      <Whatwedo></Whatwedo>
      <FormSection></FormSection>
      <Footer></Footer>
    </main>
  );
}
