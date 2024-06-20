import { Inter } from "next/font/google";
import { useAmp } from "next/amp";
import { Helmet } from 'react-helmet';
import Head from 'next/head'
import Script from "next/script";
import Layout from "../components/Layout";
import type { Metadata } from 'next';
import React from 'react';
import { useState } from 'react';
import { Button, Form } from "react-amphtml";
import AppLogo from './logo.png';

const inter = Inter({ subsets: ["latin"] });

export const dynamicParams = true;
/*export const config = { amp: 'hybrid' }*/
export const config = {
  amp: true,
};

export const metadata: Metadata = {
  title: 'PORTAL JATENGTOTO PLATFORM IDNPLAY TERBAI',
  description: 'JatengToto',
}

export default function HomePage() {
  return (
    <>
      <Head>
          <title>My page title</title>
          <link rel="canonical" href="/" />
          <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
          <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="Meta Tags — Preview, Edit and Generate" />
          <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
          <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate" />
          <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
          <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
          <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js" />
          <link rel="preload" as="image" href="/media/jatengtoto-logo-6a3a19d5e4f6ea7ce3bcef91f93010b6.webp" /> 
          <link rel="preload" as="image" href="/media/jatengtoto-banner-47a508d2771c883d0fb2becb690d8fef.webp" />
          <link rel="preload" as="image" href="/media/jatengtoto-background-dca4b228c60af4bdf07d193213db3c5c.webp" />          
      </Head>
      <Layout>
        <div className="static-header">
          <header className="page-header bg-gradient-dark">
              <div className="navbar-wrapper bg-gradient-dark">
                  <div className="navbar">
                      <Button className="brand-logo" on="tap:directFeatured.submit" role="button" aria-label="JatengToto" specName={"default"}>
                          <amp-img layout="intrinsic" width={102} height={59} alt="JATENGTOTO JATENG TOTO JATENGTOGEL JATENG TOGEL"
                                src="/media/jatengtoto-logo-6a3a19d5e4f6ea7ce3bcef91f93010b6.webp"></amp-img>
                      </Button>
                      <Button className="livechat" on="tap:directLiveChat.submit" role="button" aria-label="Live Chat" specName={"default"}>
                          <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
                          </svg>
                          <span>Live Chat</span>
                      </Button>
                  </div>
              </div>
          </header>
        </div>
        <footer className="footer link-wrapper">
            <div className="menubar">
                <Button type="button" on="tap:directPrediksi.submit" className="item" aria-label="Prediksi" specName={"default"}>
                    <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5m0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z"/>
                    </svg>
                    <span className="label">Prediksi</span>
                </Button>
                <Button type="button" on="tap:directRtpSlot.submit" className="item" aria-label="RtpSlot" specName={"default"}>
                    <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2"/>
                        <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23"/>
                    </svg>
                    <span className="label">RTPSlot</span>
                </Button>
                <Button type="button" on="tap:directPlayGuide.submit" className="item" aria-label="PlayGuide" specName={"default"}>
                    <svg className="relative icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                        <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"></path>
                    </svg>
                    <span className="relative label">PlayGuide</span>
                    <svg className="animate-ping absolute icon" style={{marginLeft: '0.125rem', marginTop: '-1.5rem'}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                        <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"></path>
                    </svg>
                    <span className="animate-ping absolute label" style={{marginTop: '2rem'}}>PlayGuide</span>
                </Button>
                <Button type="button" on="tap:directPromoPage.submit" className="item" aria-label="Promo" specName={"default"}>
                    <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                    </svg>
                    <span className="label">Promo</span>
                </Button>
                <Button type="button" on="tap:directBuktiJP.submit" className="item" aria-label="BuktiJP" specName={"default"}>
                    <svg className="icon" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.778 477.778">
                        <path d="M238.889,0C106.955,0,0,106.955,0,238.889s106.955,238.889,238.889,238.889c131.934,0,238.889-106.955,238.889-238.889
                            S370.823,0,238.889,0z M238.889,368.948c-71.823,0-130.051-58.228-130.051-130.059c0-71.831,58.228-130.059,130.051-130.059
                            c71.823,0,130.051,58.228,130.051,130.059C368.94,310.72,310.712,368.948,238.889,368.948z"/>
                        <path d="M267.07,232.194v-0.957c25.491-12.107,34.093-30.903,34.093-48.423c0-25.809-20.079-50.974-60.221-50.974
                            c-36.316,0-64.03,22.295-64.03,55.112c0,17.839,9.876,35.685,32.815,46.518l0.312,0.956c-25.475,10.833-41.09,29.31-41.09,55.43
                            c0,30.266,26.128,56.075,69.458,56.075c39.504,0,70.407-24.215,70.407-60.213C308.813,260.547,292.871,242.388,267.07,232.194z
                            M203.352,185.039c0-17.84,12.752-33.128,36.004-33.128c25.165,0,35.04,17.202,35.04,33.765c0,18.804-13.703,31.541-31.541,37.598
                            C218.966,216.897,203.352,205.746,203.352,185.039z M239.029,325.54c-26.44,0-42.366-18.484-41.401-39.504
                            c0-19.759,13.048-35.685,37.264-42.691c28.042,7.963,45.554,20.07,45.554,45.234C280.446,309.925,264.208,325.54,239.029,325.54z"
                            />
                    </svg>
                    <span className="label">Jackpot</span>
                </Button>
            </div>
        </footer>
        <div id="modalPopupPromo" className="modal modalpop-overlay">
                <div className="modalpop-card">
                <div className="modalpop-header">
                    <Button type="button" on="tap:modalPopupPromo.hide" className="close" aria-label="Close" specName={"default"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"></path>
                        </svg>
                    </Button>
                </div>
                <div className="modalpop-content">
                    <amp-img src="/media/jatengtoto-banner-47a508d2771c883d0fb2becb690d8fef.webp"
                                layout="responsive" width={743} height={533} alt="Jateng Toto Togel Slot Games Live Casino"></amp-img>
                </div>
            </div>
        </div>
        <Form id="directWapVersion" method="post" action-xhr="https://jateng-utama.amplink.me/index.html" target="_top" on="submit-success:AMP.navigateTo(url=event.response.playgame)" specName={"FORM [method=POST]"}>
            <input type="hidden" name="page" value="lite" />
        </Form>
        <Form id="directForgotPass" method="post" action-xhr="https://jateng-utama.amplink.me/index.html" target="_top" on="submit-success:AMP.navigateTo(url=event.response.playgame)" specName={"FORM [method=POST]"}>
            <input type="hidden" name="page" value="forgot/password" />
        </Form>
        <Form id="directRegister" method="post" action-xhr="https://jateng-utama.amplink.me/index.html" target="_top" on="submit-success:AMP.navigateTo(url=event.response.playgame)" specName={"FORM [method=POST]"}>
            <input type="hidden" name="page" value="register" />
        </Form>
        <Form id="directLogin" method="post" action-xhr="https://jateng-utama.amplink.me/index.html" target="_top" on="submit-success:AMP.navigateTo(url=event.response.playgame)" specName={"FORM [method=POST]"}>
            <input type="hidden" name="name" value="jatengtoto" />
        </Form>
        <Form id="directPlayGame" method="post" action-xhr="https://jateng-utama.amplink.me/index.html" target="_top" on="submit-success:AMP.navigateTo(url=event.response.playgame)" specName={"FORM [method=POST]"}>
            <input type="hidden" name="name" value="jatengtoto" />
        </Form>
        <Form id="directPrediksi" method="post" action-xhr="https://jateng-utama.amplink.me/index.html" target="_top" on="submit-success:AMP.navigateTo(url=event.response.playgame)" specName={"FORM [method=POST]"}>
            <input type="hidden" name="href" value="https://jatengcuansatu.com/" />
        </Form>
        <Form id="directRtpSlot" method="post" action-xhr="https://jateng-utama.amplink.me/index.html" target="_top" on="submit-success:AMP.navigateTo(url=event.response.playgame)" specName={"FORM [method=POST]"}>
            <input type="hidden" name="href" value="https://jatengcuansatu.com/rtp-slot/" />
        </Form>
        <Form id="directPromoPage" method="post" action-xhr="https://jateng-utama.amplink.me/index.html" target="_top" on="submit-success:AMP.navigateTo(url=event.response.playgame)" specName={"FORM [method=POST]"}>
            <input type="hidden" name="page" value="promotion" />
        </Form>
        <Form id="directPlayGuide" method="post" action-xhr="https://jateng-utama.amplink.me/index.html" target="_top" on="submit-success:AMP.navigateTo(url=event.response.playgame)" specName={"FORM [method=POST]"}>
            <input type="hidden" name="page" value="rules-game" />
        </Form>
        <Form id="directBuktiJP" method="post" action-xhr="https://jateng-utama.amplink.me/index.html" target="_top" on="submit-success:AMP.navigateTo(url=event.response.playgame)" specName={"FORM [method=POST]"}>
            <input type="hidden" name="href" value="https://jatengcuansatu.com/bukti-jp-2024/" />
        </Form>
        <Form id="directLiveChat" method="post" action-xhr="https://jateng-utama.amplink.me/index.html" target="_top" on="submit-success:AMP.navigateTo(url=event.response.playgame)" specName={"FORM [method=POST]"}>
            <input type="hidden" name="href" value="https://direct.lc.chat/17543496" />
        </Form> 
      </Layout>
    </>
  );
}
