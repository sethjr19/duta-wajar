import About from "../components/about"
import NavBar2 from "../components/navbar2";

const AboutPage: React.FC = (props:any) =>  {
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between overflow-hidden bg-white">
            <NavBar2/>
            <div className="my-[3rem]"></div>
            <About></About>
        </main>
    )
}


export default AboutPage;