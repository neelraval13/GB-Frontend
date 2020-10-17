import React from 'react'
import {Overlay,Popover} from 'react-bootstrap'
import ToggleSwitch from '../../../Layout/Toggle';


const ProfileOverlay = ({show,target,ref}) => {
    return (
        <Overlay
            show={show}
            target={target}
            placement="bottom"
            
            containerPadding={20}
        >
            <Popover id="popover-contained">
            <Popover.Title as="h3">Your Account</Popover.Title>
            <Popover.Content>
                <ToggleSwitch />
            </Popover.Content>
            </Popover>
        </Overlay>
    )
}

export default ProfileOverlay
