import styled from "styled-components";

const HeadingWrapper = styled.header`
    background-color: cyan;
    color: black;
    padding: 20px;
`;

const Heading = ({ children }) => {
    return (
        <HeadingWrapper>
            <h1>{children}</h1>
        </HeadingWrapper>
    );
};

export default Heading;
