import React from 'react'; // we need this to make JSX compile
import {
    globalCss
} from '../../styles/stitches.config';
import userIcon from './img/userIcon.png';

type CardProps = {
    name: string,
}

const Avatar = () => <aside>
    <div style = {{
        height: '58px',
        width: '58px',
        borderRadius: "50%",
        backgroundColor: '#E5E7EB',
        marginLeft: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <img style = {{
            height: '80%',
            width: '80%'
        }} src = {userIcon}></img>
    </div>
</aside>

export const UserDetails = ({name}: CardProps) => <aside>
    <div style = {{
        padding: '10px',
        height: '80px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }}>
        <Avatar />
        <span style = {{
            color: 'white',
            fontSize: '21px',
            marginRight: '22%',
            marginLeft: '3px',
            fontFamily: 'monospace'
        }}>{name}</span>
    </div>
</aside>
