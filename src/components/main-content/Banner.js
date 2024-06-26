import React from 'react';
import styled from 'styled-components';
import BannerDetail from './BannerDetail';
import MainMoviePoster from './MainMoviePoster';

const GridContainer = styled.div`
    height: 400px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    padding: 0 10px;
    // border: 1px solid green;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px; // 둥근 모서리
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // 은은한 그림자 효과
`;

const DetailGridItem = styled.div`
    grid-column: 1 / 3;
    // border: 1px solid yellow;
`;
const MoviePosterGridItem = styled.div`
    grid-column: 3 / 6;
    // border: 1px solid black;
`;
const Banner = ({ data }) => {
    if (!data || Object.keys(data).length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <GridContainer>
            <DetailGridItem>
                <BannerDetail data={data} />
            </DetailGridItem>
            <MoviePosterGridItem>
                <MainMoviePoster data={data} />
            </MoviePosterGridItem>
        </GridContainer>
    );
};

export default Banner;
