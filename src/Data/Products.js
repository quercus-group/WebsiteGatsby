import React from 'react';
import { CircleSquare, Rocket, ChartBubble, Tools, Bulb, Puzzle } from 'tabler-icons-react';

const Products = [
    {
        title: 'Stakeholder Engagement',
        teaser: 'Helping to design, navigate and lead multi-stakeholder projects.',
        icon: <Puzzle className='icon'/>
    },
    {
        title: 'Innovation Services',
        teaser: 'Supporting the innovation process from ideation to scaling.',
        icon: <Rocket className='icon'/>
    },
    {
        title: 'Cluster Development',
        teaser: 'Building cluster organizations as thriving innovation communities.',
        icon: <CircleSquare className='icon'/>
    },
    {
        title: 'Business Support',
        teaser: 'Helping international businesses to access international markets.',
        icon: <ChartBubble className='icon'/>
    },
    {
        title: 'Research & Insight',
        teaser: 'Making sense of an increasingly interconnected world.',
        icon: <Bulb className='icon'/>
    },
    {
        title: 'Ventures',
        teaser: 'Building new impact organizations, projects and alliances from scratch.',
        icon: <Tools className='icon'/>
    }
]

export default Products