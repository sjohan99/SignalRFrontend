
import { useState} from 'react';

import { HubConnection } from '@microsoft/signalr';

export default function UserComponent(props: {connection: HubConnection}) {
    const [pageViewCount, setPageViewCount] = useState<number>(0)

    // connect to methods that hub invokes aka receive notifications from hub
    props.connection.on('updateTotalViews', (value) => {
        setPageViewCount(value)
    })

    return (
        <div>
            <span>Total Views: {pageViewCount}</span>
        </div>
    );
  }