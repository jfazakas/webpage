import { useState, useRef } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { Menu, MenuItem } from "@material-ui/core";
import { accountCircleMenuItems } from "../config/topMenuItems";
import { CSSTransition } from "react-transition-group";

const TopMenuAccountCircleCmp = ({ classes }) => {
  // const anchorEl = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setIsMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
    setAnchorEl(null);
  };

  const nodeRef = useRef(null);

  return (
    <CSSTransition nodeRef={nodeRef} timeout={0}>
      <div ref={nodeRef} className={classes.accountCircle}>
        <IconButton
          ref={anchorEl}
          size="medium"
          aria-label="User account"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          animation="false"
          id="menu-appbar"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          open={Boolean(isMenuOpen)}
          onClose={handleClose}
        >
          {accountCircleMenuItems &&
            accountCircleMenuItems.map((item, key) => (
              <MenuItem onClick={handleClose} key={key}>
                {item.enabled && item.name}
              </MenuItem>
            ))}
        </Menu>
      </div>
    </CSSTransition>
  );
};

export default TopMenuAccountCircleCmp;
