'use client'

import { useState } from "react";
import {Button} from "@/components/ui/button";

const links = [
    'All',
    'Next 13',
    'Frontend',
    'Backend',
    'Fullstack',
]

const Filters = () => {

    const [active, setActive] = useState('');

    const handleFilter = (link: string) => {
        setActive(link)
    }

    return (
        <ul className="text-white-800 body-text no-scrollbar flex w-full max-wfull gap-2 overflow-auto py-12 sm:max-w-2xl">
            {links.map((link) => (
                <Button
                    key={link}
                    onClick={() => handleFilter(link)}
                    className={`${active === link ? "gradient_blue-purple" : ""} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
                >
                    {link}
                </Button>
            ))}
        </ul>
    );
}

export default Filters;
