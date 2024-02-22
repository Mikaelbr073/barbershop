'use client'
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

const Header = () => {
    return (
       <Card>
            <CardContent className="px-5 py-8 justify-between items-center flex flex-row">
                 <Image src="/Logo.png" alt="F5W barber" height={22} width={120}></Image>
                 <Button variant="outline" size="icon">
                    <MenuIcon></MenuIcon>
                 </Button>
            </CardContent>
       </Card>
    );
}
 
export default Header;