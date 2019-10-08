import React from 'react';
import { Icon } from 'semantic-ui-react';
import Logo from '../Logo';

export default function Footer() {
  return (
    <footer className="container">
      <div>
        <Logo size="small" />
      </div>
      <div className="padded-item">
        <b>MAI Youth Team</b>
        <p>
          <br />
          Muslim Association of Ireland Youth Committee
          <br />
          Greenhills Road, Tymon North
          <br />
          Dublin 24, Ireland
          <br />
          <br />
          <a className="email-link" href="mailto:info@maiyouth.ie">
            <Icon name="mail outline" />
            info@maiyouth.ie
          </a>
        </p>
      </div>
      <div className="icon-links">
        <a className="fb" href="https://www.facebook.com/MAIYouthIE"><Icon name="facebook official" size="big" /></a>
        <a className="ig" href="https://www.instagram.com/mai_youth/"><Icon name="instagram" size="big" /></a>
        <a className="yt" href="https://www.youtube.com/channel/UCs33Qsphxz4uBuCgm1kGIqA"><Icon name="youtube play" size="big" /></a>
      </div>
    </footer>
  );
}
