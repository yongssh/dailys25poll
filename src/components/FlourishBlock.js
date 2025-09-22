import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../index.css';

/**
 * Renders narrative slides alongside a Flourish embed.
 * @param {string} storyId - Flourish visualization ID
 * @param {Array<{slide:number,title:string,content:string}>} slides
 */

export function FlourishBlock({ storyId, children }) {
  const embedUrl = `https://flo.uri.sh/visualisation/${storyId}/embed?auto=1#slide-0`;

  return (
    <div className="flourish-block">
      <div className="narrative">
        {children}
      </div>
      <div className="viewer">
        <iframe
          src={embedUrl}
          title="Interactive or visual content"
          className="flourish-embed-iframe"
          frameBorder="0"
          scrolling="no"
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        />
      </div>
    </div>
  );
}

FlourishBlock.propTypes = {
  storyId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};