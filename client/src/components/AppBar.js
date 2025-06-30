// import * as React from 'react';
// import { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { Collapse } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
// import '../bootstrap-grid.css';
// import '../critical.css';
// import '../font-awesome.min.css';
// import '../index.css';
// import '../slick.min.css';
// import '../style.css';
// import '../App.css';
// import { Link as RouterLink } from "react-router-dom";
// import { makeStyles } from "@material-ui/styles";
// import { ClassNames } from '@emotion/react';
// import Modal from 'react-bootstrap/Modal';
// import { useNavigate } from 'react-router-dom';
// // import Button from 'react-bootstrap/Button';

// import main from '../assets/images/mainlogo.png';


// const useStyles = makeStyles(theme => ({
//     style: { backgroundColor: "#262c30", border: "solid red 2px", minWidth: "70px", width: "100%", padding: "0px", paddingRight: "20px", margin: "0px", textAlign: "center" },
//     toggleColor: { color: "#fff" },
//     container: { backgroundColor: "cyan", border: "solid red 2px", width: "100%", margin: "0px", marginRight: "0px" }

// }));

// const ResponsiveAppBar = () => {
//     const classes = useStyles();
//     const [modalShow, setModalShow] = React.useState(false);

//     const [open, setOpen] = useState(false);

//     const [anchorElNav, setAnchorElNav] = useState(null);
//     const [anchorElUser, setAnchorElUser] = useState(null);

//     const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };


//     return (
//         <>
//             <AppBar position="static" sx={{ backgroundColor: "#262c30", padding: "0px", minHeight: "70px", textAlign: "top-center", maxHeight: "70px", p: 0, }}>
//                 <Container maxWidth="xl" sx={{ textAlign: "center", height: "70px", }}>
//                     <Toolbar disableGutters sx={{ textAlign: "center", height: "100%" }}>
//                         <Box sx={{ flexGrow: 0, }} style={{ float: "left", textAlign: "top-center", paddingRight: "0%" }}>
//                             <a href="/" className="logo"><img src={main} alt="logo" style={{ height: "60px", width: "150px", textAlign: "center", paddingRight: "0%" }} /></a>
//                         </Box>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             sx={{
//                                 display: { xs: 'block', md: 'none', },
//                                 padding: "0px",
//                             }}
//                             PaperProps={{
//                                 style: {
//                                     position: "static",
//                                     top: "auto",
//                                     zIndex: 1,
//                                     marginRight: "0%",
//                                     marginTop: "69px",
//                                     float: "right",
//                                     backgroundColor: "#262c30",
//                                     borderRadius: "0px",
//                                 }
//                             }}
//                         >
//                             <MenuItem className="activemenu" ><li className="activeli"  ><a href="/" >Home</a></li></MenuItem>
//                             <MenuItem className="activemenu"><li className="activeli"  ><a href="/about" >About</a></li></MenuItem>
//                             {/* <MenuItem className="activemenu"><li className="activeli"><a href="/products">Products</a></li></MenuItem> */}
//                             <MenuItem className="activemenu"><li className="activeli"><a href="/services">Services</a></li></MenuItem>
//                             <MenuItem className="activemenu"><li className="activeli"><a href="/gallery">Gallery</a></li></MenuItem>
//                             <MenuItem className="activemenu"><li className="activeli"><a href="/contact">Contact</a></li></MenuItem>
//                             <MenuItem><ul className="header-icon" style={{ padding: "0px", }}>

//                                 <li className="search icon1" style={{}}>
//                                     <a className="icon" href="#" style={{ paddingLeft: "0px" }}>
//                                         <i className="fa fa-search" onClick={() => { setModalShow(true); setAnchorElNav(null); }}></i>
//                                     </a>

//                                 </li>


//                                 <li className="favorites icon1" style={{}}>
//                                     <a className="icon" href="https://www.facebook.com/multiplexdrone/" target="_blank" style={{ textAlign: "center", }}>
//                                         <i className="fa fa-facebook" aria-hidden="true" style={{ textAlign: "center", }}></i>
//                                     </a>
//                                 </li>

//                                 <li className="icon1">
//                                     <a className="icon" href="https://www.youtube.com/channel/UCIwF0gAUl27P-6cahvTE7vw" target="_blank">
//                                         <i className="fa fa-youtube" aria-hidden="true"></i>
//                                     </a>
//                                 </li>
//                                 <li className="icon1">
//                                     <a className="icon" href="https://www.linkedin.com/company/multiplex-drone" target="_blank">
//                                         <i className="fa fa-linkedin" aria-hidden="true"></i>
//                                     </a>
//                                 </li>
//                             </ul>
//                             </MenuItem>
//                         </Menu>


//                         <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }, height: "100%", marginLeft: "10px", textAlign: "center" }}>
//                             <span style={{ float: "left", width: "80%", paddingRight: "0%", textAlign: "center" }}>
//                                 <ul className="header-icon" style={{ width: "100%", justifyContent: "center" }}><li className="link-head">
//                                     <a href="/">Home</a>
//                                 </li>
//                                     <li className="link-head"><a href="/about">About</a></li>
//                                     {/* <li className="link-head"><a href="/products">Products</a></li> */}
//                                     <li className="link-head"><a href="/services">Services</a></li>
//                                     <li className="link-head" style={{ visibility: "visible" }}><a href="/gallery">Gallery</a></li>
//                                     <li className="link-head"><a href="/contact">Contact</a></li>

//                                 </ul></span>
//                             <span style={{ float: "right", width: "20%" }}>
//                                 <ul className="header-icon" >


//                                     <li className="search icon1" style={{ visibility: "visible" }}>
//                                         <a className="icon" href="#">
//                                             <i className="fa fa-search" onClick={() => setModalShow(true)}></i>
//                                         </a>

//                                     </li>


//                                     <li className="favorites icon1" style={{ visibility: "visible", }}>
//                                         <a className="icon" href="https://www.facebook.com/multiplexdrone/" target="_blank">
//                                             <i className="fa fa-facebook" aria-hidden="true"></i>
//                                         </a>
//                                     </li>

//                                     <li className="icon1" style={{ visibility: "visible", }}>
//                                         <a className="icon" href="https://www.youtube.com/channel/UCIwF0gAUl27P-6cahvTE7vw" target="_blank">
//                                             <i className="fa fa-youtube" aria-hidden="true"></i>
//                                         </a>
//                                     </li>
//                                     <li className="icon1" style={{ visibility: "visible", }}>
//                                         <a className="icon" href="https://www.linkedin.com/company/multiplex-drone" target="_blank">
//                                             <i className="fa fa-linkedin" aria-hidden="true"></i>
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </span>

//                         </Box>



//                         <Typography
//                             variant="h5"
//                             noWrap
//                             component="p"
//                             href=""
//                             sx={{
//                                 mr: 2,
//                                 display: { xs: 'flex', md: 'none' },
//                                 flexGrow: 1,
//                                 fontFamily: 'monospace',
//                                 fontWeight: 700,
//                                 letterSpacing: '.3rem',
//                                 color: 'inherit',
//                                 textDecoration: 'none',
//                             }}
//                         >




//                             <br />

//                         </Typography>
//                         <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
//                             <IconButton

//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleOpenNavMenu}
//                                 color="inherit"
//                                 style={{ width: "inherit" }}
//                             >
//                                 <MenuIcon sx={{ fontSize: 30 }} />
//                             </IconButton>

//                         </Box>
//                     </Toolbar>
//                 </Container>

//             </AppBar>
//         </>
//     );
// };
// export default ResponsiveAppBar;


import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import '../App.css';
import '../style.css';
import main from '../assets/images/mainlogo.png';

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    const socialLinks = [
        { icon: "fa-facebook", href: "https://www.facebook.com/multiplexdrone/" },
        { icon: "fa-youtube", href: "https://www.youtube.com/channel/UCIwF0gAUl27P-6cahvTE7vw" },
        { icon: "fa-linkedin", href: "https://www.linkedin.com/company/multiplex-drone" }
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: "#143E61", minHeight: "70px" }}>
            <Container maxWidth="xl" sx={{ height: "70px" }}>
                <Toolbar disableGutters sx={{ height: "100%" }}>

                    {/* Logo */}
                    <Box sx={{ flexGrow: 0 }}>
                        <a href="/" className="logo">
                            <img src={main} alt="logo" style={{ height: 60, width: 150 }} />
                        </a>
                    </Box>

                    {/* Mobile Menu Icon */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ color: "#F57C00" }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Desktop Nav */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center", ml: 3 }}>
                        {navLinks.map(({ name, href }) => (
                            <a
                                key={name}
                                href={href}
                                className="nav-link"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                    margin: "0 16px",
                                    fontWeight: 500,
                                    fontSize: "15px",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#F57C00")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                            >
                                {name}
                            </a>
                        ))}
                    </Box>

                    {/* Social Icons - Desktop */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        <a href="#" onClick={() => setModalShow(true)} className="icon" style={{ color: "white" }}>
                            <i className="fa fa-search" />
                        </a>
                        {socialLinks.map(({ icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon"
                                style={{
                                    color: "white",
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#F57C00")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                            >
                                <i className={`fa ${icon}`} />
                            </a>
                        ))}
                    </Box>
                </Toolbar>

                {/* Mobile Nav Menu */}
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    PaperProps={{
                        sx: {
                            backgroundColor: "#143E61",
                            color: "white",
                            mt: "10px",
                            borderRadius: 0,
                        }
                    }}
                >
                    {navLinks.map(({ name, href }) => (
                        <MenuItem key={name} onClick={handleCloseNavMenu}>
                            <a
                                href={href}
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                    width: "100%",
                                }}
                            >
                                {name}
                            </a>
                        </MenuItem>
                    ))}

                    <MenuItem>
                        <Box sx={{ display: 'flex', gap: 2, px: 1 }}>
                            <a href="#" onClick={() => { setModalShow(true); setAnchorElNav(null); }} className="icon" style={{ color: "white" }}>
                                <i className="fa fa-search" />
                            </a>
                            {socialLinks.map(({ icon, href }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon"
                                    style={{
                                        color: "white",
                                        transition: "color 0.3s",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F57C00")}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                                >
                                    <i className={`fa ${icon}`} />
                                </a>
                            ))}
                        </Box>
                    </MenuItem>
                </Menu>
            </Container>
        </AppBar>
    );
};

export default ResponsiveAppBar;
