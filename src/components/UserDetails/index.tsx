import React from "react";
import { styled } from "../../styles/stitches.config";
import userIcon from './img/userIcon.png';

const StyledUserDetail = styled("div", {
    padding: '19px',
    height: '60px',
    width: '260px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    color: 'white',
    fontSize: '22px',
    fontFamily: "$mainFont",
    fontWeight: "100",
});

const StyledAvatar = styled("div", {
    height: '57px',
    width: '57px',
    borderRadius: "50%",
    backgroundColor: '#1E3A8A',
    marginRight: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export function UserDetails() {
    return <StyledUserDetail>
        <StyledAvatar>
            <img style = {{
                height: '80%',
                width: '80%',
            }} src = {userIcon}></img>
        </StyledAvatar>
        <span>Jake Nixon</span>
    </StyledUserDetail>;
}
