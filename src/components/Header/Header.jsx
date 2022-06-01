import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";
import Badge from "@mui/material/Badge";
import FaceIcon from "@mui/icons-material/Face";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

function Header() {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-left">
          <div className="logo">OYEKES</div>
          <div className="header-text">HAIR</div>
          <div className="header-text">FABRICS</div>
        </div>
        <div className="header-center">
          <div className="search-box">
            <Input fullWidth disableUnderline placeholder="Search the Store" />
            <SearchIcon cursor="pointer" />
          </div>
        </div>
        <div className="header-right">
          <Badge>
            <FaceIcon cursor="pointer" />
          </Badge>
          <Badge color="error" badgeContent={1}>
            <FavoriteRoundedIcon cursor="pointer" />
          </Badge>
          <Badge color="error" badgeContent={1}>
            <LocalMallRoundedIcon cursor="pointer" />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
