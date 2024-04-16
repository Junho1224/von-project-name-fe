'use client';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import { PG } from '@/app/components/common/enums/PG';

const pages = [ '카운트','게시판 목록', '게시글 목록', '사용자 목록'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (event: any) => {
        // alert('클릭한 메뉴 : ' + event.target.innertext)
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        // <AppBar position="static">
        //     <Container maxWidth="xl">
        //         <Toolbar disableGutters>
        //             {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
        //             <Typography
        //                 variant="h6"
        //                 noWrap
        //                 component="a"
        //                 href="/"
        //                 sx={{
        //                     mr: 2,
        //                     display: { xs: 'none', md: 'flex' },
        //                     fontFamily: 'monospace',
        //                     fontWeight: 500,
        //                     fontSize: '2rem',
        //                     letterSpacing: '.3rem',
        //                     color: 'inherit',
        //                     textDecoration: 'none',
        //                 }}
        //             >
        //                 Home
        //             </Typography>

        //             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        //                 <IconButton
        //                     size="large"
        //                     aria-label="account of current user"
        //                     aria-controls="menu-appbar"
        //                     aria-haspopup="true"
        //                     onClick={handleOpenNavMenu}
        //                     color="inherit"

        //                 >
        //                     <MenuIcon />
        //                 </IconButton>
        //                 <Menu
        //                     id="menu-appbar"
        //                     anchorEl={anchorElNav}
        //                     anchorOrigin={{
        //                         vertical: 'bottom',
        //                         horizontal: 'left',
        //                     }}
        //                     keepMounted
        //                     transformOrigin={{
        //                         vertical: 'top',
        //                         horizontal: 'left',
        //                     }}
        //                     open={Boolean(anchorElNav)}
        //                     onClose={handleCloseNavMenu}
        //                     sx={{
        //                         display: { xs: 'block', md: 'none' },
        //                     }}
        //                 >
        //                     {pages.map((page) => (
                                

        //                         <MenuItem key={page} onClick={handleCloseNavMenu}>
        //                             <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>  {page}</Typography>
        //                         </MenuItem>
        //                     ))}
        //                 </Menu>
        //             </Box>
        //             <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

        //             <Box sx={{ flexGrow: 1, display: 'flex' }}>
        //             {/* { xs: 'none', md: 'flex' } */}

        //                 {pages.map((page) => (
        //                     <Link 
        //                     key={page} 
        //                     href={`${page === '회원가입' ? `${PG.USER}/join` :
        //                      page === '로그인' ? `${PG.USER}/login` :
        //                      page === '카운트' ? `${PG.DEMO}/redux-counter` :
        //                      page === '게시판 목록' ? `${PG.BOARD}/list` :
        //                      page === '게시글 목록' ? `${PG.ARTICLE}/list` :
        //                      page === '사용자 목록' ? `${PG.USER}/list` :
        //                       page.toLowerCase()}`} 
        //                     passHref
        //                   >

        //                         <Button
        //                             key={page}
        //                             onClick={handleCloseNavMenu}
        //                             sx={{ my: 2, color: 'white', display: 'block', fontSize: '15px' }}
        //                         >
        //                             {page}
        //                         </Button>
        //                     </Link>
        //                 ))}
        //             </Box>

        //             <Box sx={{ flexGrow: 0 }}>
        //                 <Tooltip title="Open settings">
        //                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        //                         <Avatar alt="Remy Sharp" />
        //                     </IconButton>
        //                 </Tooltip>
        //                 <Menu
        //                     sx={{ mt: '45px' }}
        //                     id="menu-appbar"
        //                     anchorEl={anchorElUser}
        //                     anchorOrigin={{
        //                         vertical: 'top',
        //                         horizontal: 'right',
        //                     }}
        //                     keepMounted
        //                     transformOrigin={{
        //                         vertical: 'top',
        //                         horizontal: 'right',
        //                     }}
        //                     open={Boolean(anchorElUser)}
        //                     onClose={handleCloseUserMenu}
        //                 >
        //                     {settings.map((setting) => (
        //                         <MenuItem key={setting} onClick={handleCloseUserMenu}>
        //                             <Typography textAlign="center" sx={{ fontSize: '3rm' }}>{setting}</Typography>
        //                         </MenuItem>
        //                     ))}
        //                 </Menu>
        //             </Box>
        //         </Toolbar>
        //     </Container>
        // </AppBar>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src= "/style/pic/images.jpg" alt="user photo"/>
      </button>
     
      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    );
}
export default Header;