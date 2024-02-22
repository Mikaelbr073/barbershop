'use client'
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { SheetTrigger, Sheet, SheetContent } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import SideMenu from "./side-menu";



const Header = () => {
   return (
      <Card>
         <CardContent className="px-5 py-8 justify-between items-center flex flex-row">
            <Image src="/Logo.png" alt="F5W barber" height={22} width={120}></Image>
            <Sheet>
               <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                     <MenuIcon></MenuIcon>
                  </Button>
               </SheetTrigger>
               <SheetContent className="p-0">
                  <SideMenu/>
               </SheetContent>
            </Sheet>
         </CardContent>
      </Card>
   );
}

export default Header;