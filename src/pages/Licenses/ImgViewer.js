import {useCallback, useState} from "react";
import {Controlled as ControlledZoom} from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ImgViewer = ({picture, width = "100%", height = 300, styles}) => {
    const [isZoomed, setIsZoomed] = useState(false);
    // const handleImgLoad = useCallback(() => {
    //   setIsZoomed(true);
    // }, []);;

    const handleZoomChange = useCallback((shouldZoom) => {
        setIsZoomed(shouldZoom);
    }, []);

    return (
        <>
            <ControlledZoom
                isZoomed={isZoomed}
                openText={"zoom"}
                onZoomChange={handleZoomChange}
                overlayBgColorEnd={"rgba(0,0,0,0.52)"}
                wrapStyle={{filter: "blur(0px)", display: "inline-block", ...styles}}
            >
                <img
                    alt="License"
                    // onLoad={handleImgLoad}
                    src={picture}
                    width={width}
                    height={height}
                />
            </ControlledZoom>
        </>
    );
};
export default ImgViewer;
