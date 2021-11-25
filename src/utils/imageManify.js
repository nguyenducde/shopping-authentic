import ReactImageMagnify from 'react-image-magnify';

export const imageManify = (img1, img2) => {
    return (
        <div style={{width: 36 + 'rem', height: 54 + 'rem'}}>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: img1,
                },
                largeImage: {
                    src: img2,
                    width: 1200,
                    height: 1800,

                },
                hoverDelayInMs: 100,
                hoverOffDelayInMs: 100,
                fadeDurationInMs: 100,
                enlargedImageContainerDimensions: {
                    width: '150%', height: '100%'
                }
            }} />
        </div>
    )
}
