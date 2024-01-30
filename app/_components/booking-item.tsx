import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
    return (
        <Card>
            <CardContent className="p-5 flex justify-between py-0">
                <div className="flex flex-col gap-3 py-5">
                    <Badge className="opacity-25 w-fit">Confrimado</Badge>
                    <h2 className="font-bold">Corte de Cabelo</h2>
                    
                    <div className="flex items-center gap-2">
                        <Avatar>
                           <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png"></AvatarImage>
                           <AvatarFallback>M</AvatarFallback>
                        </Avatar>
                        <h3 className="text-sm">Vintage Barber</h3>
                    </div> 

                </div>

                <div className="flex flex-col px-3 items-center justify-center border-l border-solid border-secondary">
                    <p className="text-sm">Fevereiro</p>
                    <p className="text-2xl">06</p>
                    <p className="text-sm">09:45</p>
                </div>
            </CardContent>
        </Card>
    );
}
 
export default BookingItem;