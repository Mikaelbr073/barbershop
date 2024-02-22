
import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbabershop-info";
import ServiceItem from "./_components/service-item";



interface BarbershopDetailsPageProps{
    params: {
        id?: string
    }
}


const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps) => {

    if (!params.id){
        //TODO: redirecionar para a home
        return null
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true
        }
    });

    if(!barbershop){
        // TODO
        return null
    }

    return (  
        <div>
            <BarbershopInfo barbershop={barbershop}/>
            <div className="flex flex-col gap-3 py-6">
                {barbershop.services.map((service)=> (
                    <ServiceItem key={service.id} service={service}/>
                ))}
            </div>
        </div>
    );
}
 
export default BarbershopDetailsPage;