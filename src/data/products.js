import React from 'react';
import { CircleSquare, Rocket, ChartBubble, Tools, Bulb, Puzzle } from 'tabler-icons-react';

const Products = [
    {
        id: 'a4c75865-f2e3-42bb-b2d2-1e7679824949',
        title: 'Stakeholder Engagement',
        teaser: 'Helping to design, navigate and lead multi-stakeholder projects.',
        icon: <Puzzle className='icon'/>
    },
    {
        id: 'dc6f8a11-0d8c-4b85-bfbc-c90844697697',
        title: 'Innovation Services',
        teaser: 'Supporting the innovation process from ideation to scaling.',
        icon: <Rocket className='icon'/>
    },
    {
        id: 'a5f05b59-d30e-49d9-b844-ce7674585489',
        title: 'Cluster Development',
        teaser: 'Building cluster organizations as thriving innovation communities.',
        icon: <CircleSquare className='icon'/>
    },
    {
        id: '279626a4-6b71-44a7-9345-54c7569d315a',
        title: 'Business Support',
        teaser: 'Helping international businesses to access international markets.',
        icon: <ChartBubble className='icon'/>
    },
    {
        id: '649fb126-a0c0-48ed-877a-227c52953c4e',
        title: 'Research & Insight',
        teaser: 'Making sense of an increasingly interconnected world.',
        icon: <Bulb className='icon'/>
    },
    {
        id: 'd58f5d2e-ed3e-4881-a775-4782eee09970',
        title: 'Ventures',
        teaser: 'Building new impact organizations, projects and alliances from scratch.',
        icon: <Tools className='icon'/>
    }
]

export default Products