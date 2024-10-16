import React from 'react';

import { HeroParallax } from '@/components/ui/hero-paralax';

export function ProjectsSection() {
    return <HeroParallax products={products} />;
}

const products = [
    {
        title: 'Sokru',
        link: 'https://github.com/alexlm78/sokru',
        thumbnail: '/projects/mern-memories.png'
    },
    {
        title: 'Totito (Tic Tac Toe)',
        link: 'https://github.com/alexlm78/totito',
        thumbnail: '/projects/next-event.png'
    },
    {
        title: 'Online Profile',
        link: 'https://www.kreaker.dev',
        thumbnail: '/projects/portfoliov2.png'
    },
    {
        title: 'Artemis',
        link: '',
        thumbnail: '/projects/artemis.png'
    }
];
