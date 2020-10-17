import React from 'react'
import {Overlay,Popover} from 'react-bootstrap'


const MessageOverlay = ({show,target,ref}) => {
    return (
        <Overlay
            show={show}
            target={target}
            placement="bottom"
            
            containerPadding={20}
        >
            <Popover id="popover-contained">
            <Popover.Title as="h3">Messages</Popover.Title>
            <Popover.Content>
                User Messagges
            </Popover.Content>
            </Popover>
        </Overlay>
    )
}

export default MessageOverlay
