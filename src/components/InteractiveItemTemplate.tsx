import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import styled from '@emotion/styled';

// /. imports

const ImageWrapper = styled.div`
    position: relative;
    height: min-content;
    flex-shrink: 0;
    transform: translate(0, 0);

    &::before {
        content: attr(data-count);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        z-index: 1;
        font-size: 56px;
        color: var(--white-color);
        font-weight: 400;

        text-shadow: rgb(36, 37, 70) 3px 0px 0px,
            rgb(36, 37, 70) 2.83487px 0.981584px 0px,
            rgb(36, 37, 70) 2.35766px 1.85511px 0px,
            rgb(36, 37, 70) 1.62091px 2.52441px 0px,
            rgb(36, 37, 70) 0.705713px 2.91581px 0px,
            rgb(36, 37, 70) -0.287171px 2.98622px 0px,
            rgb(36, 37, 70) -1.24844px 2.72789px 0px,
            rgb(36, 37, 70) -2.07227px 2.16926px 0px,
            rgb(36, 37, 70) -2.66798px 1.37182px 0px,
            rgb(36, 37, 70) -2.96998px 0.42336px 0px,
            rgb(36, 37, 70) -2.94502px -0.571704px 0px,
            rgb(36, 37, 70) -2.59586px -1.50383px 0px,
            rgb(36, 37, 70) -1.96093px -2.27041px 0px,
            rgb(36, 37, 70) -1.11013px -2.78704px 0px,
            rgb(36, 37, 70) -0.137119px -2.99686px 0px,
            rgb(36, 37, 70) 0.850987px -2.87677px 0px,
            rgb(36, 37, 70) 1.74541px -2.43999px 0px,
            rgb(36, 37, 70) 2.44769px -1.73459px 0px,
            rgb(36, 37, 70) 2.88051px -0.838247px 0px;
    }
`;

// /. styled components

interface propTypes {
    id: number;
    count: number;
    image: string;
    onDragStartHandler?: (arg1: any, arg2: number) => void;
}

// /. intefaces

const InteractiveItemTemplate = (props: propTypes) => {
    const { id, count, image, onDragStartHandler } = props;

    const [imageSrc, setImageSrc] = useState<string>(image);
    const [isImageErr, setImageErrStatus] = useState<boolean>(false);

    // /. hooks

    useEffect(() => {
        setImageSrc(image);
    }, [image]);

    // effects

    return (
        <ImageWrapper
            draggable
            data-count={count}
            onDragStart={e => onDragStartHandler && onDragStartHandler(e, id)}
        >
            <Image
                src={imageSrc}
                alt="interactive item"
                width={158}
                height={168}
                quality={100}
                style={{
                    borderRadius: isImageErr ? '100%' : 'none',
                    objectFit: isImageErr ? 'none' : 'contain'
                }}
                onError={() => {
                    setImageErrStatus(true);
                    setImageSrc('https://fakeimg.pl/130x130/ccc/444/');
                }}
            />
        </ImageWrapper>
    );
};

export default InteractiveItemTemplate;
