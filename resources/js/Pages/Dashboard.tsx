import React from 'react';
import Authenticated from '../Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { AuthUserInterface } from "../Interfaces/AuthUserInterface";

interface DashboardInterface {
    auth: AuthUserInterface,
    errors?: string[],
}

export default function Dashboard(props: DashboardInterface): JSX.Element {
    return (
        <Authenticated
            auth={props.auth}
            // todo: this doesnt exist on the Authenticated Page
            // errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">You&apos;re logged in!</div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
