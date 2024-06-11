import About from "../components/about"
import FormSection from "../components/formsection";
import NavBar2 from "../components/navbar2";

const ContactPage: React.FC = (props:any) =>  {
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between overflow-hidden bg-white">
            <NavBar2/>
            <div className="mt-[6rem]">
                <FormSection/>
            </div>
            
        </main>
    )
}


export default ContactPage;