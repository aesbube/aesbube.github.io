import { Global, css } from "@emotion/react";

const effects = css`
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .animated-content {
        animation: fadeIn 1s ease-out;
    }
`;

const Animations = () => {
    return <Global styles={effects} />;
}

export default Animations;