// Make an object serializable to JSON.
//
// Useful to convert an object which may contain non-serializeable data such as
// Dates to an object that doesn't
export function makeSerializable<T extends any>(o: T): T {
    return JSON.parse(JSON.stringify(o));
}

import { useContext } from "react";
import prisma from "../libs/prisma";
import { SessionContext } from "../pages/_app";
export const getServerSideProps = async () => {
    const profile = await prisma.profiles.findMany({});
    const profile2 = profile.map((result: any) => {
        return {
            // ID: result.id,
            // updated_at: makeSerializable(result.updated_at),
            username: result.username,
            full_name: result.full_name,
        };
    });

    return {
        props: { body: { profile2 } },
    };
};

// export const session = useContext(SessionContext);
