// IframeComponent.tsx
import React, { useEffect, useState } from 'react';

const IframeComponent: React.FC = () => {
  const [aspectRatio, setAspectRatio] = useState<number>(4/3); // Default aspect ratio
  const [iframeHeight, setIframeHeight] = useState<number | undefined>(undefined);

  const resizeIframe = () => {
    const iframeContainer = document.getElementById("iframeContainer");
    const iframe = document.getElementById("iframe");

    if (iframeContainer && iframe) {
      const newAspectRatio = iframe.offsetWidth > iframeContainer.offsetWidth ? 1 : 4 / 3;
      setAspectRatio(newAspectRatio);

      const height = iframeContainer.offsetWidth / newAspectRatio;
      setIframeHeight(height);
    }
  };

  useEffect(() => {
    // Call the resizeIframe function on page load and window resize
    window.addEventListener("load", resizeIframe);
    window.addEventListener("resize", resizeIframe);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("load", resizeIframe);
      window.removeEventListener("resize", resizeIframe);
    };
  }, []);

  return (
    <div id="iframeContainer" style={{ width: '33vw' }}>
      <iframe
        id="iframe"
        src="https://www.flitch.me/iframe.php?n=1641230780"
        style={{ width: '100%', height: iframeHeight }}
        frameBorder="0"
        title="Your Iframe"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
      ></iframe>
    </div>
  );
};

export default IframeComponent;
