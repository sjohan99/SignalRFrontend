
import { useState} from 'react';

import { HubConnection } from '@microsoft/signalr';

export default function UserComponent(props: {connection: HubConnection}) {
    const [pageViewCount, setPageViewCount] = useState<number>(0)
    const [connectedUsersCount, setConnectedUsersCount] = useState<number>(0)

    // connect to methods that hub invokes aka receive notifications from hub
    props.connection.on('updateTotalViews', (value) => {
        setPageViewCount(value)
    })

    // When we get 'updateConnectedUsers' event from server we update the view
    props.connection.on('updateConnectedUsers', (value) => {
        setConnectedUsersCount(value)
    }) 

    return (
        <div style={{display: 'grid'}}>
            <span>Users connected: {connectedUsersCount}</span>
            <span>Total Views: {pageViewCount}</span>
        </div>
    );
  }