import {useEffect, useRef} from "react";
import styles from './sketchfab-frame.module.css';

import PropTypes from 'prop-types';

const SketchfabFrame = ({uid}) => {
    const iframeRef = useRef(null);

    useEffect(() => {
        // By default, the latest version of the viewer API will be used.
        const client = new window.Sketchfab( iframeRef.current );

        client.init( uid, {
            success: function onSuccess( api ){
                api.start();
                api.addEventListener( 'viewerready', function() {
                    console.log( 'Viewer is ready' );
                } );
            },
            error: function onError() {
                console.log( 'Viewer error' );
            }
        } );
    }, [])

    return (
        <iframe className={styles.sketchfabFrame} ref={iframeRef} src="" allow="autoplay; fullscreen; xr-spatial-tracking" allowFullScreen></iframe>
    );
}

SketchfabFrame.propTypes = {
    uid: PropTypes.string.isRequired,
};

export default SketchfabFrame;