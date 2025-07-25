"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import MeetingEventList from "./_component/MeetingEventList";

function MeetingType() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="p-5">
            <div className="flex flex-col  gap-5 mt-10">
                <h2 className="text-4xl font-bold">Your Meeting List</h2>
                <Input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-xs border-slate-400"
                    placeholder="Search Event"
                />

                <hr className="text-slate-400" />
            </div>

            <MeetingEventList
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
        </div>
    );
}

export default MeetingType;
