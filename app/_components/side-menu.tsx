'use client'
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, UserIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const SideMenu = () => {
    const { data } = useSession()

    const handleLogoutClick = () => signOut();
    const handleLoginClick = () => signIn("google");

    return (
        <>
            <SheetHeader className="text-left border-b border-solid border-secondary p-5">
                <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {data?.user ? (
                <div className="p-5 justify-between items-center flex flex-row">
                    <div className="flex items-center gap-3 px-5 py-6">
                        <Avatar>
                            <AvatarImage className="rounded-full max-h-10 max-w-10" src={data.user?.image ?? ""} />
                        </Avatar>
                        <h2 className="font-bold">{data.user.name}</h2>
                    </div>

                    <Button onClick={handleLogoutClick} variant="secondary" size="icon">
                        <LogOutIcon />
                    </Button>
                </div>
            ) : (
                <div className="flex flex-col px-5 py-6 gap-3">
                    <div className="flex items-center">
                        <UserIcon size={32} />
                        <h1 className="font-semibold gap-3 ">Olá, faça seu login</h1>
                    </div>
                    <Button onClick={handleLoginClick} variant="secondary" className="w-full justify-start">
                        <LogInIcon className="mr-2" size={18} />
                        Fazer Login
                    </Button>
                </div>
            )}

            <div className="flex flex-col gap-3 px-5">

                <Button variant="outline" className="justify-start" asChild>
                    <Link href="/">
                        <HomeIcon className="mr-2" size={18}></HomeIcon>
                        Início
                    </Link>
                </Button>

                {data?.user && (
                    <Button variant="outline" className="justify-start" asChild>
                        <Link href="/bookings">
                            <CalendarIcon className="mr-2" size={18}></CalendarIcon>
                            Agendamentos
                        </Link>
                    </Button>
                )}

            </div>



        </>
    );
}

export default SideMenu;