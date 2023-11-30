import React from 'react';
import './Desk.sass';
import CurrentStatus from '../CurrentStatus/CurrentStatus';
import { PromoNotification } from '../PromoNotification/PromoNotification';

function Desk(props) {
    return (
        <main className="content content_desk">
            <PromoNotification />
            <CurrentStatus />
        </main>
    );
}
export { Desk };
