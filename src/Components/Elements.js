import styled from 'styled-components'

export const Section = styled.section`
    grid-column: 2 / span 12;
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 4.5rem));
    grid-column-gap: 2rem;
    grid-template-rows: max-content;
    grid-row-gap: 2rem;
    padding-bottom: 10vh;
`

export const SectionTitle = styled.h2`
    grid-column: 3 / span 8;
`

export const SectionText = styled.div`
    grid-column: 3 / span 8;
`
export const GridPicture = styled.div`
    border-radius: 0.5rem;
    overflow: hidden;
    aspect-ratio: 1 / 1;
`