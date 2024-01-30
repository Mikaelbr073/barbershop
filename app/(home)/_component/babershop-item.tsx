import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent} from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client"
import { StarIcon } from "lucide-react";
import Image from "next/image";
interface babershopItenProps {
    barbershop: Barbershop;
}


const BarbershopItem = ( {barbershop }: babershopItenProps) => {
    return (
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="px-1 pb-0">
               <div className="px-1 w-full h-[159px] relative">
                <div className="absolute top-3 left-3 z-50">
                    <Badge className="flex gap-2 items-center opacity-85 ">
                        <StarIcon size={12}></StarIcon>
                        <span className="text-xs">5,0</span>
                    </Badge>
                </div>
               <Image 
                src={barbershop.imageUrl}
                fill
                style={{objectFit: "cover"}}
                sizes="100vw" 
                alt={barbershop.name} 
                className="rounded-2xl"/>
               </div>
                <div className="px-1">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis flex-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                    <Button className="w-full mt-3" variant="secondary"  >Reserva</Button>
                </div>
            </CardContent>
        </Card>
        
    );
}
 
export default BarbershopItem;