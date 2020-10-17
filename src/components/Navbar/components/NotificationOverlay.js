import React from 'react'
import {Overlay,Popover} from 'react-bootstrap'

const NotificationOverlay = ({show,target,ref}) => {
    return (
        <Overlay
            show={show}
            target={target}
            placement="bottom"
            
            containerPadding={20}
        >
            <Popover id="popover-contained">
            <Popover.Title as="h3">Notifications</Popover.Title>
            <Popover.Content>
                Use Notifications
            </Popover.Content>
            </Popover>
        </Overlay>
    )
}

export default NotificationOverlay
