"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./confing/FirebaseConfing";
const Dashboard = () => {
    const { user } = useKindeBrowserClient();
    const db = getFirestore(app);

    useEffect(() => {
        if (user?.email) {
            MeetingRegistered();
        }
    }, [user]);


    const MeetingRegistered = async () => {
        const docRef = doc(db, "meeting", user?.email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    };
    return <div>dashboard</div>;
};

export default Dashboard;
