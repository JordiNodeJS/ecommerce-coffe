import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFoter = [
    {
        id: 1,
        name: "Sobre nosotros",
        link: "#"

    },
    {
        id: 2,
        name: "Productos",
        link: "#"

    },
    {
        id: 3,
        name: "Mi cuenta",
        link: "#"

    },
    {
        id: 4,
        name: "Politica de privacidad",
        link: "#"

    },
]

const Footer = () => {
    return ( 
        <footer className="mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p>
                        <span className="font-bold">
                            CoffeDev
                        </span>
                        E-commerce
                    </p>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {dataFoter.map((data)=> (
                            <li key={data.id}>
                                <Link href={data.link} className="hover:underline me-4 md:me-6">
                                    {data.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6"/>
                <span className="block text-sm text-gray-500
                 sm:text-center dark:text-gray-400">
                    &copy; 2024{' '}
                    <Link href={"#"}>CoffeDev.</Link> 
                    {' '}Todos los derechos reservados
                </span>
            </div>
        </footer>
     );
}
 
export default Footer;