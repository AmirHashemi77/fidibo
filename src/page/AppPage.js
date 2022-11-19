import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AppDescriptionMd from '../component/DownloadApp/AppDescriptionMd';
import AppDescriptionSm from '../component/DownloadApp/AppDescriptionSm';
import DownloadSection from '../component/DownloadApp/DownloadSection';
import FooterAppPage from '../component/DownloadApp/FooterAppPage';
import HeaderAppPage from '../component/DownloadApp/HeaderAppPage';
import HeroSection from '../component/DownloadApp/HeroSection';
import InstallHelp from '../component/DownloadApp/InstallHelp';

const AppPage = () => {
    const showHelper=useSelector((state)=>state.ui.showHelper)
    
    useEffect(()=>{
        document.title='دانلود فیدیبو'
       },[])
    return (
        <div>
            {showHelper && <InstallHelp/>}           
            <HeaderAppPage/>
            <HeroSection/>
            <DownloadSection/>
            <AppDescriptionSm/>
            <AppDescriptionMd/>
            <FooterAppPage/>
        </div>
    );
};

export default AppPage;