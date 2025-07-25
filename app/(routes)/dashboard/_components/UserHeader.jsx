"use client";
import React from "react";
import Image from "next/image";
import {
    LogoutLink,
    useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function UserHeader() {
    const { user } = useKindeBrowserClient();

    return (
        user && (
            <div className="">
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center float-right p-3">
                        <Image
                            className="rounded-full"
                            src={user?.picture}
                            width={50}
                            height={50}
                            alt="image"
                        />
                        <ChevronDown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>

                        <DropdownMenuItem>
                            <LogoutLink>Logout</LogoutLink>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        )
    );
}

export default UserHeader;
