import About from "../components/about"
import NavBar2 from "../components/navbar2";
import { poppins } from '../fonts';


const CertsPage: React.FC = (props:any) =>  {
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between overflow-hidden bg-white">
            <NavBar2/>
            <div className="my-[3rem] mx-[3rem] mt-[8rem]">
                 <div className="flex items-center justify-center">
                    <h2 className={`text-4xl border-b-[3px] border-yellow-300 text-black pb-3 text-center lg:text-start max-w-[20rem] ${poppins.className}`}>Our Certificates</h2>
                </div>
           
            <div className="grid  grid-cols-1 md:grid-cols-2 p-[2rem] md:p-[5rem] gap-[5rem]">
            
                <div>
                    <img src="certs-1.jpg" alt="Cert 1" className="w-[30rem]"/>
                </div>
                <div>
                    <img src="certs-2.jpg" alt="Cert 1" className="w-[30rem]" />
                </div>
            </div>
            </div>
           
        </main>
    )
}


export default CertsPage;