import { Activity } from '@/app/admin/components/activities/Activities';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Activities | RSVI"
};

const page: React.FC = () => {
    return <Activity />
}

export default page