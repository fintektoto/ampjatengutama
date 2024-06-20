type LayoutProps = {
    children?: React.ReactNode;
};
  
export default function Layout({ children }: LayoutProps) {
    return (
        <>
            {children}
            <style jsx global>{`
                *, :after, :before {
                    box-sizing: border-box;
                    border: 0 solid #e5e7eb;
                }

                :host, html {
                    -webkit-text-size-adjust: 100%;
                    font-feature-settings: normal;
                    -webkit-tap-highlight-color: transparent;
                    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
                    font-variation-settings: normal;
                    line-height: 1.5;
                    -moz-tab-size: 4;
                    -o-tab-size: 4;
                    tab-size: 4;
                }
                
                html {
                    touch-action: manipulation;
                }

                body {
                    font-family: 'Open Sans', sans-serif;
                    background: #000 url('/media/jatengtoto-background-dca4b228c60af4bdf07d193213db3c5c.webp') center center no-repeat;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    min-height: 100vh;
                    margin: 0;
                    line-height: inherit;
                }
                
                button {
                    background: none;
                    background-color: transparent;
                    border-color: transparent;
                    border-width: 0;
                }

                a, button, input[type='submit'] {
                    cursor: pointer;
                }

                a {
                    text-decoration: none;
                }

                div, header, main {
                    display: block;
                    unicode-bidi: isolate;
                }

                .absolute {
                    position: absolute;
                }

                .relative {
                    position: relative;
                }
                
                .center {
                    text-align: center;
                }

                .animate-ping {
                    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                .bg-gradient-red {
                    background: linear-gradient(to left, rgba(185, 28, 28, 0.79), rgba(69, 10, 10, 1));
                }

                .bg-gradient-reddark {
                    background: linear-gradient(to left, rgba(153, 23, 23, 0.79), rgb(53, 3, 3));
                }

                .bg-gradient-dark {
                    background: linear-gradient(to left, rgba(53, 53, 53, 0.79), #0f0000c2);
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    padding: 5px;
                    width: 100%;
                    overflow: hidden;
                    max-width: 80rem;
                    min-height: 100vh;
                    margin: 0 auto;
                    box-shadow: 0 0 5px #ff0000, 0 0 5px #ffd971, 0 0 5px #ffd971;
                    padding-bottom: 8rem;
                }

                .static-header {
                    position: fixed;
                    display: inline-block;
                    background: transparent;
                    width: 100%;
                    padding: 5px;
                    max-width: 80rem;
                    top: 0;
                    left: 50%;
                    transform: translate(-50%, 0);
                    z-index: 999;
                }

                .page-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    padding: .5rem 0;
                }

                .navbar-wrapper {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 100%;
                    padding-bottom: .5rem;
                }

                .navbar-wrapper > .navbar {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    text-align: center;
                    align-items: center;
                    justify-content: space-between;
                    padding-left: 1rem;
                    padding-right: 1rem;
                }

                .navbar-wrapper > .navbar .livechat {
                    display: flex;
                    padding: .75rem 1rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    background-image: linear-gradient(to bottom, #ffb100 0%, #843a00 100%);
                    box-shadow: inset 0 0px 0 rgb(255, 187, 0);
                    border: 2px groove rgb(255, 187, 0);
                    border-radius: .25rem;
                    color: #fff;
                    transition: color 0.5s ease 0s infinite normal;
                }
                .navbar-wrapper > .navbar .livechat:hover {
                    color: #000;
                }
                .navbar-wrapper > .navbar .livechat .icon {
                    width: 1rem;
                    height: 1rem;
                    margin-right: .25rem;
                }
                .brand-logo {
                    background: transparent;
                    cursor: pointer;
                    width: 200px;
                    height: auto;
                }
                .main-page {
                    margin-top: 104px;
                }
                
                .playbutton-wrap {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: .5rem;
                    margin-bottom: 2rem;
                }
                
                .playbutton-wrap .button {
                    display: inline-flex;
                    color: rgb(255 255 255 / 1);
                    text-align: center;
                    font-weight: 500;
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                    padding: 1.5rem 2rem;
                    border-radius: 0.5rem;
                    font-size: 24px;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    cursor: pointer;
                }

                .playbutton-wrap .button .icon {
                    width: 1.5rem;
                    height: 1.5rem;
                    margin-right: 0.25rem;
                    margin-left: -0.25rem;
                }
                
                .playbutton-wrap a.bg-red-animation,
                .playbutton-wrap button.bg-red-animation{
                    background: linear-gradient(270deg, rgb(160, 0, 0) 0%, 
                        rgb(200, 1, 1) 21%, 
                        rgba(160, 0, 0, 1) 33%, 
                        rgb(200, 1, 1) 44%, 
                        rgba(160, 0, 0, 1) 60%, 
                        rgba(200, 1, 1, 1) 73%, 
                        rgba(160, 0, 0, 1) 85%, 
                        rgb(200, 1, 1) 100%);
                    background-size: auto;
                    background-size: 400% 400%;
                    background-position: 100% 50%;
                    transition: background-position 5s ease infinite;
                    box-shadow: inset 0px 0px 0px 1px rgb(255 0 0), inset 0px 2px 0px 0px rgb(120 0 0), inset 0px 0px 0px 2px rgb(255 0 0), 3px 3px 3px 1px rgb(0 0 0 / 20%);
                }
                
                .playbutton-wrap a.bg-red-animation:hover,
                .playbutton-wrap button.bg-red-animation:hover {
                    background-position: 0% 50%;
                }
                        
                .playbutton-wrapa .bg-gold-animation,
                .playbutton-wrap button.bg-gold-animation {
                    background: linear-gradient(270deg, rgb(189, 123, 2) 0%, 
                        rgb(226, 173, 0) 21%, 
                        rgba(209, 136, 0, 1) 33%, 
                        rgb(226, 173, 0) 44%, 
                        rgba(209, 136, 0, 1) 60%, 
                        rgba(226, 173, 0, 1) 73%, 
                        rgba(209, 136, 0, 1) 85%, 
                        rgb(226, 173, 0) 100%);
                    background-size: auto;
                    background-size: 400% 400%;
                    background-position: 100% 50%;
                    transition: background-position 5s ease infinite;
                    box-shadow: inset 0px 0px 0px 1px rgb(202 138 4), inset 0px 2px 0px 0px rgb(161 107 5), inset 0px 0px 0px 2px rgb(250 204 21), 3px 3px 3px 1px rgb(0 0 0 / 20%);
                }
                        
                .playbutton-wrapa .bg-gold-animation,
                .playbutton-wrap button.bg-gold-animation {
                    background-position: 0% 50%;
                }
                
                .running-text-wrap {
                    padding-left: 1rem;
                    padding-right: 1rem;
                    border-top: 2px solid #ed8c00;
                    border-bottom: 2px solid #ed8c00;
                }
                .running-text {
                    width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    color: #ffc400;
                    font-weight:bold;
                    box-sizing: border-box;
                    font-size: 0.875rem;
                }
                .running-text p {
                    margin: 0;
                    padding-top: .25rem;
                    padding-bottom: .25rem;
                }
                .datedesc-wrapper {
                    margin-top: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .datetime-panel {
                    text-align: center;
                    padding: 0.625rem 1.25rem;
                    border-color: rgb(234 179 8 / 1);
                    border-width: 1px;
                    border-radius: 0.25rem;
                    display: inline-block;
                }
                .datetime-panel h2 {
                    color: rgb(250 204 21 / 1);
                    font-weight: 600;
                    text-transform: uppercase;
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                    margin: 0;
                    padding: 0px;
                }
                .pagetitle-wrapper {
                    padding-left: 2rem;
                    padding-right: 2rem;
                }
                
                .pagetitle-wrapper .pagetitle {
                    margin: 0;
                    font-size: 2rem;
                    line-height: 1.5rem;
                    font-weight: 600;
                    text-align: center;
                    border-color: rgb(192, 131, 0);
                    text-transform: uppercase;
                    color: rgb(250 204 21 / 1);
                    border-style: solid;
                    border-bottom-width: 1px;
                    padding-bottom: .5rem;
                }

                .marquee span {
                    display: inline-block;
                    padding-left: 100%;
                    text-indent: 0;
                    animation: marquee 30s linear infinite
                }

                .marquee span:hover {
                    animation-play-state: paused
                }

                .main-page > *:not(:first-child) {
                    padding-top: .5rem;
                    padding-bottom: .5rem;
                    padding-left: 2rem;
                    padding-right: 2rem;
                }
                .form-login {
                    margin-top: 1rem;
                }
                .form-login .left {
                    float: left;
                }
                .form-login .right {
                    float: right;
                }
                .form-login .buttonjoin {
                    width: 100%;
                    clear: both;
                }
                .form-login .note {
                    font-size: 15px;
                    color: #d7d7d7;
                    margin-bottom: 10px;
                    margin-top: 10px;
                }
                .form-login .form-control {
                    display: block;
                    width: 100%;
                    padding: .375rem .75rem;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #212529;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    background-color: #fff;
                    background-clip: padding-box;
                    border: 1px solid #c59700;
                    border-radius: .5rem;
                    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                }

                .form-login .input-group {
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: stretch;
                    width: 100%;
                }

                .form-login .input-group-text {
                    display: flex;
                    align-items: center;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #fff;
                    text-align: center;
                    white-space: nowrap;
                    background-color: #000;
                    border: 1px solid #c59700;
                    padding: .5rem 1rem;
                    font-size: 1.25rem;
                    border-radius: 0.375rem;
                }

                .form-login .input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
                    margin-left: calc(1px * -1);
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
                
                .form-login .input-group-lg>.btn, 
                .form-login .input-group-lg>.form-control, 
                .form-login .input-group-lg>.form-select, 
                .form-login .input-group-lg>.input-group-text {
                    padding: .5rem 1rem;
                    font-size: 1.25rem;
                    border-radius: .5rem;
                }
                .form-login .input-group>.form-control, 
                .form-login .input-group>.form-floating, 
                .form-login .input-group>.form-select {
                    position: relative;
                    flex: 1 1 auto;
                    width: 1%;
                    min-width: 0;
                }

                .form-login .input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3), 
                .form-login .input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control, 
                .form-login .input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select, 
                .form-login .input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
                .form-login .input-group>.form-control:focus, 
                .form-login .input-group>.form-floating:focus, 
                .form-login .input-group>.form-select:focus {
                    outline: 0;
                    border: 1px solid #c59700;
                    box-shadow: 0 0 2px 1px #c59700;
                }
                #directFormLogin {
                    margin: 0 auto;
                    max-width: 42rem;
                    border: 2px solid #cca84c;
                    padding: 2rem 3rem;
                    width: 100%;
                    background: rgba(0, 0, 0, 0.39);
                    border-radius: 8px;
                }
                .form-login .input-group {
                    margin-top: 1rem;
                }

                .form-login .buttons {
                    text-align: center;
                    color: #fff;
                    padding: 10px 26px 10px 26px;
                    display: inline-block;
                    margin-bottom: 10px;
                    font-weight: 500;
                    font-size: 20px;
                }

                .form-login .button-green {
                    background: linear-gradient(0deg, rgb(168, 9, 9) 26%, rgb(255, 0, 0) 64%);
                    box-shadow: none;
                    border: 1px solid #edff00;
                }
                .form-login .contactSubmitButton {
                    line-height: 14px;
                    display: block;
                    height: 40px;
                    margin-right: 0px;
                    width: 100%;
                }
                
                table.toto-online-jatengtoto {
                    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    width: 100%;
                    text-align: left;
                    border-collapse: collapse;
                    font-size: calc(8px+1vh);
                    margin: 0 20px 0 0
                }

                table.toto-online-jatengtoto td,
                table.toto-online-jatengtoto th {
                    border: 1px solid #ffe600;
                    padding: 10px 5px 10px
                }

                table.toto-online-jatengtoto tbody td {
                    font-size: calc(8px+1vh);
                    font-weight: 500;
                    color: #bfbfbf
                }

                table.toto-online-jatengtoto thead {
                    background: #ffd700
                }

                table.toto-online-jatengtoto thead th {
                    font-size: calc(12px+1vh);
                    font-weight: 700;
                    color: #000;
                    text-align: center;
                    background: linear-gradient(to bottom, #ffd700 0%, #ffd700 50%, #ffd700 100%);
                }
                
                .gamelist-summary {
                    font-size: 1em;
                    color: #ffd700;
                    text-align: justify;
                }

                .gamelist-summary h1 {
                    font-size: 2.5em;
                    font-style: normal;
                    font-variant: normal;
                    font-weight: 500;
                    color: #ffd700;
                    margin: 10px 0 10px 0;
                    text-align: center;
                    padding-left: 1rem;
                    padding-right: 1rem;
                    border-bottom: 1px solid gold;
                    padding: 10px;
                    text-transform: uppercase;
                }

                .gamelist-summary h2 {
                    font-size: 1.7em;
                    font-style: normal;
                    font-variant: normal;
                    font-weight: 500;
                    color: #ffd700;
                    margin: 10px 0 10px 0;
                    text-align: center;
                    padding-left: 1rem;
                    padding-right: 1rem;
                }
                
                .gamelist-summary .caption-info {
                    display: block;
                    margin: 20px 0;
                }
                
                .gamelist-summary .caption-info > * {
                    width: 100%;
                    max-width: 300px;
                }
                
                .gamelist-summary .gameitems {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                }
                
                .gamelist-summary .gameitems > * {
                    width: 100%;
                    max-width: 25%;
                    padding: .5rem;
                }
                
                .gameitems amp-img {
                    border: 1px solid gold;
                    border-radius: 10px;
                    box-shadow: inset 20px -14px 20px gold;
                    transition: box-shadow 2s infinite alternate;
                }
                
                .gameitems amp-img:hover {
                    box-shadow: inset 20px -20px 20px red;
                }
                
                .main-page .footer-service {
                    margin-top: 0;
                    color: #fff;
                }
                
                .main-page .service {
                    padding-left: 0;
                    padding-right: 0;
                }

                .main-page .copyright {
                    width: 100%;
                    border-top: 1px solid #ffe600;
                    padding-top: 1rem;
                    margin-top: 2rem;
                    text-align: center;
                }
                
                .site-description {
                    font-size: 1em;
                    color: #ffd700;
                    text-align: justify;
                }

                .site-description h1 {
                    font-size: 2.5em;
                    font-style: normal;
                    font-variant: normal;
                    font-weight: 500;
                    color: #ffd700;
                    margin: 10px 0 10px 0;
                    text-align: center;
                    padding-left: 1rem;
                    padding-right: 1rem;
                }

                .site-description h2 {
                    font-size: 1.7em;
                    font-style: normal;
                    font-variant: normal;
                    font-weight: 500;
                    color: #ffd700;
                    margin: 10px 0 10px 0;
                    text-align: center;
                    padding-left: 1rem;
                    padding-right: 1rem;
                }
                
                .site-description .footer-service {
                    margin-top: 3rem;
                }
                
                .site-description .service {
                    padding-left: 0;
                    padding-right: 0;
                }

                .site-description .copyright {
                    width: 100%;
                    border-top: 1px solid #ffe600;
                    padding-top: 1rem;
                    margin-top: 2rem;
                    text-align: center;
                }
                
                .menubar {
                    display: grid;
                    height: 100%;
                    max-width: 100%;
                    grid-template-columns: repeat(5, minmax(0, 1fr));
                    margin-left: auto;
                    margin-right: auto;
                }

                .menubar .item {
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    border-color: rgb(161 98 7 / 1);
                    border-left-width: 1px;
                    border-right-width: 1px;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    display: inline-flex;
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    cursor: pointer;
                }

                .menubar .label {
                    color: rgb(202 138 4 / 1);
                    font-size: 0.75rem;
                    line-height: 1rem;
                    font-weight: medium;
                }

                .menubar .item .icon {
                    color: rgb(202 138 4 / 1);
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-bottom: 0.5rem;
                }

                .menubar .item:hover {
                    color: rgb(253 230 138 / 1);
                    background-color: rgb(39, 39, 39);
                }

                .menubar .item:hover > * {
                    color: rgb(253 230 138 / 1);
                }
                
                .list-menu-wrapper {
                    width: 100%;
                    background: linear-gradient(90deg, rgba(143, 98, 0, 1) 0%, rgba(238, 206, 60, 1) 50%, rgba(143, 98, 0, 1) 100%);
                }
                
                .list-menu-mobile {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: nowrap;
                    width: 100%;
                    margin: 0 auto;
                    padding: .25rem .5rem;
                }
                .list-menu-mobile a,
                .list-menu-mobile button {
                    width: 20%;
                    padding: 0px 5px;
                    display: inline-block;
                    margin-top: 5px;
                }

                .list-menu-mobile a amp-img,
                .list-menu-mobile button amp-img {
                    width: 100%;
                    border-radius: 7px;
                }
                
                .box-gradient-corner {
                    position: relative;
                    margin: auto;
                    min-width: 100px;
                    padding: 5px 10px;
                    background: rgba(53, 53, 53, 0.79);
                    color: #fff;
                    margin-bottom: 20px;
                    border: 2px solid;
                    border-image-slice: 1;
                    border-color: #FF0000;
                    transition: border-color 4s linear infinite;
                }
                
                .box-gradient-corner:hover {
                    border-color: #FFA500;
                } 

                .box-gradient-corner:after,
                .box-gradient-corner:before {
                    content: '';
                    position: absolute;
                    right: -3px;
                    bottom: -3px;
                    background: linear-gradient(45deg, #fb0000, rgb(255 141 0), rgb(73, 0, 0), rgb(192 29 29), #ffe200, #fb0000, rgb(255 167 0), rgb(73, 0, 0), rgb(192, 29, 29), #efff00);
                    background-size: 400%;
                    width: calc(100% + 6px);
                    height: calc(100% + 6px);
                    z-index: -1;
                    animation: steam 5s linear infinite;
                    border-radius: 10px
                }

                .box-gradient-corner:after {
                    filter: blur(50px)
                }
                
                .border-animation:after,
                .border-animation:before {
                    content: '';
                    position: absolute;
                    right: -3px;
                    bottom: -3px;
                    background: linear-gradient(45deg, #fb0000, rgb(255 141 0), rgb(73, 0, 0), rgb(192 29 29), #ffe200, #fb0000, rgb(255 167 0), rgb(73, 0, 0), rgb(192, 29, 29), #efff00);
                    background-size: 400%;
                    width: calc(100% + 6px);
                    height: calc(100% + 6px);
                    z-index: -1;
                    animation: steam 5s linear infinite
                }
                
                .drawlive-postbody {
                    margin: 0;
                    display: block;
                    width: 100%;
                }
                .table-responsive {
                    overflow: hidden;
                    display: block;
                    padding-top: 1.5rem;
                    padding-bottom: 1.5rem;
                }
                
                .modal.modalpop-overlay {
                    background-color: rgba(0, 0, 0, 0.59);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 9999;
                }

                .modalpop-card {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    max-width: 56rem;
                    background-color: #000;
                    max-height: 100vh;
                    border-radius: .5rem;
                    border-color: #ff9400;
                    border-width: 1px;
                    padding: 0 0 12px 0;
                    overflow-x: hidden;
                    overflow-y: auto;
                    border-image-slice: 1;
                    border-color: #FF0000;
                    transition: border-color 4s linear infinite;
                }
                
                .modalpop-card:hover {
                    border-color: #FFA500;
                } 

                .modalpop-card .modalpop-header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-top: .25rem;
                    padding-bottom: .25rem;
                }

                .modalpop-card .modalpop-header .close {
                    flex: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    margin-top: .5rem;
                    margin-bottom: .5rem;
                }

                .modalpop-card .modalpop-header .close .icon {
                    height: 1.75rem;
                    width: 1.75rem;
                    color: #ffb300;
                }
                
                .modal.modal-overlay {
                    background-color: rgba(0, 0, 0, 0.59);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 9999;
                }

                .modal-card {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    max-width: 100%;
                    background-color: #272727;
                    min-height: 18rem;
                    max-height: 100vh;
                    border-radius: .5rem;
                    border-color: #ff9400;
                    border-width: 1px;
                    padding: .25rem 1.5rem;
                    overflow-x: hidden;
                    overflow-y: auto;
                    border-image-slice: 1;
                    border-color: #FF0000;
                    transition: border-color 4s linear infinite;
                }
                
                .modal-card:hover {
                    border-color: #FFA500;
                } 

                .modal-card .modal-header {
                    display: flex;
                    align-items: center;
                    padding-top: .75rem;
                    padding-bottom: .75rem;
                    border-bottom: 1px solid;
                    border-image-slice: 1;
                    border-color: #FF0000;
                    transition: border-color 4s linear infinite;
                }
                
                .modal-card .modal-header:hover {
                    border-color: #FFA500;
                } 

                .modal-card .modal-header .modal-title {
                    flex: 1 1 0%;
                    font-size: 1rem;
                    line-height: 1.5rem;
                    text-transform: uppercase;
                    margin: 0;
                    color: #fff;
                    text-align: center;
                }

                .modal-card .modal-header .close {
                    flex: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                }

                .modal-card .modal-header .close .icon {
                    height: 1.25rem;
                    width: 1.25rem;
                    color: #ffb300;
                }
                
                .modal-card .drawresult-table {
                    width: 100%;
                    margin-bottom: 1rem;
                    vertical-align: top;
                    border-color: #dee2e6;
                    position: relative;
                    border-radius: 0.875rem;
                }

                .modal-card .drawresult-table::after,
                .modal-card .drawresult-table::before {
                    border-radius: 0.875rem;
                }

                .modal-card .drawresult-table .drawresult-tabwrap {
                    margin-left: .25rem;
                    margin-right: .25rem;
                    border-radius: 1rem;
                    padding-bottom: .25rem;
                    background: linear-gradient(0deg, #272727, #000);
                    text-align: center;
                }

                .modal-card .drawresult-table .drawresult-gridlist {
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: center;
                }

                .modal-card .drawresult-table .drawresult-gridlist > div:first-child {
                    width: 40px;
                }

                .modal-card .drawresult-table .drawresult-gridlist > div:last-child {
                    flex: 1 1 0%;
                }


                .modal-card .drawresult-table .drawresult-head,
                .modal-card .drawresult-table .drawresult-headtime {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    background: linear-gradient(0deg, #272727, #000);
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                    border-color: #ffe200;
                    border-bottom-width: 1px;
                    font-weight: 700;
                    color: #fff;
                    border-image-slice: 1;
                    border-color: #FF0000;
                    transition: border-color 4s linear infinite;
                }
            
                .modal-card .drawresult-table .drawresult-head:hover,
                .modal-card .drawresult-table .drawresult-headtime:hover {
                    border-color: #FFA500;
                } 

                .modal-card .drawresult-table .drawresult-headtime {
                    grid-template-columns: repeat(6, minmax(0, 1fr));
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                }

                .modal-card .drawresult-table .drawresult-row {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }

                .modal-card .drawresult-table .drawresult-rowtime div[role="list"] {
                    display: grid;
                    grid-template-columns: repeat(6, minmax(0, 1fr));
                }

                .modal-card .drawresult-table .drawresult-rowtime,
                .modal-card .drawresult-table .drawresult-rowone {
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                }

                .modal-card .drawresult-table .drawresult-rowone {
                    font-weight: 700;
                }

                .modal-card .drawresult-table .lg {
                    display: none;
                }

                .modal-card .drawresult-table .sm {
                    display: block;
                }

                .modal-card .drawresult-table .drawresult-head > *,
                .modal-card .drawresult-table .drawresult-headtime > * {
                    padding: .5rem .5rem;
                }

                .modal-card .drawresult-table div[role="list"] > * {
                    padding: .5rem .5rem;
                    color: #ffffff;
                    background-color: transparent;
                    border-bottom-width: 1px;
                    box-shadow: inset 0 0 0 9999px transparent;
                    border-image-slice: 1;
                    border-color: #FF0000;
                    transition: border-color 4s linear infinite;
                }
            
                .modal-card .drawresult-table div[role="list"] > *:hover {
                    border-color: #FFA500;
                } 

                .footer {
                    background-image: linear-gradient(to bottom, #2b2b2b, #000000);
                    border-color: rgb(202 138 4 / 1);
                    border-top-width: 1px;
                    width: 100%;
                    height: 4rem;
                    z-index: 50;
                    left: 0px;
                    bottom: 0px;
                    position: fixed;
                }
                
                #liveDraw .drawlive-wrapper {
                    width: 100%;
                    margin-top: 2.5rem;
                    position: relative;
                    border-radius: 10px;
                }

                #liveDraw .drawlive-items {
                    padding-left: 1rem;
                    padding-right: 1rem;
                    padding-top: 3rem;
                    padding-bottom: 3rem;
                    max-width: 80rem;
                    margin-left: auto;
                    margin-right: auto;
                }

                #liveDraw .drawlive-items ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                #liveDraw .drawresult-galleries {
                    -moz-column-gap: 1.5rem;
                    column-gap: 1.5rem;
                    row-gap: 2rem;
                    grid-template-columns: repeat(1, minmax(0, 1fr));
                    display: grid;
                }

                #liveDraw ul > li.drawresult-item {
                    border-width: 1px;
                    background-color: #272727;
                    border-color: #fff;
                    border-radius: 0.75rem;
                    overflow: hidden;
                }

                #liveDraw ul > li.drawresult-item .drawresult-header {
                    -moz-column-gap: 1rem;
                    column-gap: 1rem;
                    padding: 1.5rem;
                    background: linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(65, 65, 65, 0.5) 100%);
                    border-color: rgba(255, 255, 255, 0.5);
                    border-bottom-width: 1px;
                    align-items: center;
                    display: flex;
                }

                #liveDraw ul > li.drawresult-item .drawresult-header amp-img {
                    border-radius: 0.5rem;
                    background-color: rgb(221, 221, 221);
                    flex: none;
                    width: 3rem;
                    height: 3rem;
                }     

                #liveDraw ul > li.drawresult-item .drawresult-header .drawresult-title {
                    color: rgb(255, 255, 255);
                    line-height: 1.5rem;
                    font-weight: 700;
                    font-size: 1rem;
                    text-transform: uppercase;
                }  

                #liveDraw ul > li.drawresult-item .drawresult-header .drawresult-menu {
                    margin-left: auto;
                    position: relative;
                }  

                #liveDraw ul > li.drawresult-item .drawresult-menu button:not(.close) {
                    position: relative;
                    margin: auto 0;
                    min-width: 100px;
                    padding: 10px 10px;
                    background: linear-gradient(0deg, #000, #272727);
                    color: #fff;
                    cursor: pointer;
                    border: 1px solid #fff;
                }

                #liveDraw ul > li.drawresult-item .drawresult-main {
                    margin: 0;
                    line-height: 1.5rem;
                    font-size: 0.875rem;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    padding-left: 1.5rem;
                    padding-right: 1.5rem;
                    margin-top: -0.75rem;
                    margin-bottom: -0.75rem;
                }
                
                #liveDraw ul > li.drawresult-item .drawresult-main div[role="list"] > dl[role="listitem"],
                #liveDraw ul > li.drawresult-item .drawresult-main div[role="list"] > div[role="listitem"] {
                    background-color: #272727;
                    z-index: 1;
                    position: relative;
                }
                
                #liveDraw ul > li.drawresult-item .drawresult-main div[role="list"] dl:not(.drawresult-post) > :not([hidden]) ~ :not([hidden]),
                #liveDraw ul > li.drawresult-item .drawresult-main div[role="list"] div:not(.drawresult-post) > :not([hidden]) ~ :not([hidden]),
                #liveDraw ul > li.drawresult-item .drawresult-main div[role="list"] > :not([hidden]) ~ :not([hidden]) {
                    border-color: rgb(94, 94, 94);
                    border-top-width: calc(1px* calc(1 - 0));
                    border-bottom-width: calc(1px* 0);
                }

                #liveDraw ul > li.drawresult-item .drawresult-post {
                    -moz-column-gap: 1rem;
                    column-gap: 1rem;
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    justify-content: space-between;
                    display: flex;
                    margin: 0;
                }

                #liveDraw ul > li.drawresult-item .drawresult-post.title {
                    color: rgb(255, 187, 0);
                }
                
                #liveDraw ul > li.drawresult-item .drawresult-post.closed {
                    height: fit-content;
                    display: block;
                    margin: auto;
                    text-transform: uppercase;
                }

                #liveDraw ul > li.drawresult-item .amphtml-hidden .drawresult-post.closed {
                    display: none;
                }

                #liveDraw ul > li.drawresult-item .drawresult-post.title2 {
                    color: rgb(255, 187, 0);
                    border-color: rgb(94, 94, 94);
                    border-top-width: calc(1px* 0);
                    border-bottom-width: calc(1px* calc(1 - 0));
                }

                #liveDraw ul > li.drawresult-item .drawresult-post .value {
                    font-weight: 600;
                }

                #liveDraw ul > li.drawresult-item .title,
                #liveDraw ul > li.drawresult-item .title2 {
                    display: block;
                    text-align: center;
                    font-weight: 600;
                    font-size: 14px;
                }

                #liveDraw ul > li.drawresult-item .starter {
                    -moz-column-gap: 1rem;
                    column-gap: 1rem;
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    justify-content: space-between;
                    flex-direction: column;
                    display: flex;
                }

                #slider {
                    border-bottom: 4px solid;
                    border-image-slice: 1;
                    border-color: #FF0000;
                    transition: border-color 4s linear infinite;
                }
                #slider:hover {
                    border-color: #FFA500;
                } 
                #LoginButton, #loginBtnHeader {
                    background: linear-gradient(270deg, rgb(143 98 0) 0%, rgb(244 212 62) 21%, rgb(143 98 0) 33%, rgb(244 212 62) 44%, rgb(143 98 0) 60%, rgb(244 212 62) 73%, rgb(143 98 0) 85%, rgb(244 212 62) 100%);
                    background-size: auto;
                    background-size: 400% 400%;
                    transition: box-shadow 5s ease infinite;
                    color: #000;
                    box-shadow: inset 0px 0px 0px 1px rgb(255 191 0), inset 0px 2px 0px 0px rgb(255 170 0), inset 0px 0px 0px 2px rgb(255 189 0), 3px 3px 3px 1px rgb(0 0 0 / 20%);
                    border-radius: 15px 2px 15px 5px;
                    border: 2px solid #f2df0a;
                    text-shadow: 0px 0px 5px #fff, 0 0 5px #fffc00;
                }

                #LoginButton, #loginBtnHeader:hover {
                    box-shadow: inset 20px -20px 20px red;
                }            

                @media (max-width: 576px)
                {
                    .brand-logo {
                        width: 160px;
                    }
                    .navbar-wrapper {
                        padding: .25rem;
                    }
                    .navbar-wrapper > .navbar .livechat {
                        text-indent: -999px;
                        padding: .75rem;
                    }
                    .navbar-wrapper > .navbar .livechat span {
                        display: none;
                    }
                    .navbar-wrapper > .navbar .livechat .icon {
                        width: 1rem;
                        height: 1rem;
                        margin-right: .25rem;
                    }
                    .main-page {
                        margin-top: 88px;
                    }
                    .main-page > *:not(:first-child) {
                        padding-left: .5rem;
                        padding-right: .5rem;
                    }
                    .list-menu-mobile {
                        padding: 0;
                    }
                    .list-menu-mobile a amp-img,
                    .list-menu-mobile button amp-img {
                        width: 100%;
                        border-radius: 7px;
                    }
                    table.toto-online-jatengtoto {
                        font-size: .875em;
                    }
                    .site-description {
                        font-size: .857em;
                    }

                    .site-description h1 {
                        font-size: 2em;
                        font-weight: 900;
                    }

                    .site-description h2 {
                        font-size: 1.5em;
                        font-weight: 700;
                    }

                    .pagetitle-wrapper .pagetitle {
                        font-size: 1rem;
                        padding-bottom: .5rem;
                    }
                    .drawlive-postbody {
                        margin: 0;
                        padding: 0;
                    }
                    .box-gradient-corner {
                        background: none;
                        animation: none;
                        border: none;
                    }
                    .box-gradient-corner:after, .box-gradient-corner:before {
                        background: none;
                        animation: none;
                        border: none;
                    }
                    .gamelist-summary .caption-info > * {
                        width: 100%;
                        max-width: 240px;
                        margin: 0 auto;
                        display: block;
                    }
                    .gamelist-summary {
                        font-size: .857em;
                    }

                    .gamelist-summary h1 {
                        font-size: 2em;
                        font-weight: 900;
                    }

                    .gamelist-summary h2 {
                        font-size: 1.5em;
                        font-weight: 700;
                    }
                
                    .gamelist-summary .gameitems > * {
                        width: 100%;
                        max-width: 50%;
                        padding: .5rem;
                    }
                    .modalpop-card {
                        max-width: 22rem;
                    }
                    .modalpop-card .modalpop-header .close {
                        margin-top: .25rem;
                        margin-bottom: .25rem;
                    }
                    .modalpop-card .modalpop-header .close .icon {
                        height: 1.25rem;
                        width: 1.25rem;
                    }
                    #liveDraw .drawlive-wrapper {
                        border: none;
                    }
                    #liveDraw .drawlive-items {
                        padding: 0;
                    }
                    #link-wrapper a {
                        margin: 0 auto;
                    }        
                    #link-wrapper a {
                        margin: 0 auto;
                    }
                    #directFormLogin {
                        padding: 2rem 1rem;
                    }
                }
                @media (min-width: 576px)
                {
                    body {
                        background-attachment: fixed;
                    }
                    .menubar {
                        max-width: 32rem;
                    }

                    .menubar .label {
                        font-size: 0.875rem;
                        line-height: 1.25rem;
                    }
                    
                    .list-menu-mobile a amp-img,
                    .list-menu-mobile button amp-img {
                        width: 100%;
                        border-radius: 15px;
                    }

                    .site-description .service {
                        padding-left: 0;
                        padding-right: 0;
                    }
                    .pagetitle-wrapper .pagetitle {
                        font-size: 1.5rem;
                        padding-bottom: 1rem;
                    }
                    .form-login .input-group>.btn, 
                    .form-login .input-group>.form-control, 
                    .form-login .input-group>.form-select, 
                    .form-login .input-group>.input-group-text {
                        padding: .5rem 1rem;
                        font-size: 1.25rem;
                        border-radius: .5rem;
                    }
                    
                    .gamelist-summary .service {
                        padding-left: 0;
                        padding-right: 0;
                    }
                
                    .gamelist-summary .gameitems > * {
                        width: 100%;
                        max-width: 33%;
                        padding: .5rem;
                    }
                    
                    .modal-card {
                        max-width: 42rem;
                    }

                    .modal-card .drawresult-table .drawresult-gridlist > div:first-child {
                        width: 200px;
                    }

                    .modal-card .drawresult-table .lg {
                        display: block;
                    }

                    .modal-card .drawresult-table .sm {
                        display: none;
                    }
                    
                    .modalpop-card {
                        max-width: 42rem;
                    }
                    
                    .footer {
                        height: 5rem;
                    }
                    
                    #liveDraw .drawlive-wrapper {
                        width: 32rem;
                    }

                    #liveDraw .drawlive-items {
                        padding-left: 1.5rem;
                        padding-right: 1.5rem;
                    }
                }
                @media only screen and (min-width: 768px)
                {
                    .menubar {
                        max-width: 56rem;
                    }

                    .form-login {
                        margin: 4rem 0;
                    }

                    .site-description .service {
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                    
                    .gamelist-summary .service {
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }

                    #liveDraw .drawlive-wrapper {
                        width: 48rem;
                    }
                }

                @media only screen and (min-width: 992px)
                {
                    .menubar {
                        max-width: 80rem;
                    }

                    .menubar .item .icon {
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                    
                    .list-menu-mobile a amp-img,
                    .list-menu-mobile button amp-img {
                        width: 100%;
                        border-radius: 18px;
                    }

                    .site-description .service {
                        padding-left: 5rem;
                        padding-right: 5rem;
                    }

                    .pagetitle-wrapper .pagetitle {
                        font-size: 2rem;
                        padding-bottom: 1rem;
                    }
                    
                    .gamelist-summary .service {
                        padding-left: 5rem;
                        padding-right: 5rem;
                    }
                
                    .gamelist-summary .gameitems > * {
                        width: 100%;
                        max-width: 25%;
                        padding: .5rem;
                    }
                    
                    .modalpop-card {
                        max-width: 56rem;
                    }

                    #liveDraw .drawlive-wrapper {
                        width: 64rem;
                    }

                    #liveDraw .drawresult-galleries {
                        grid-template-columns: repeat(3, minmax(0, 1fr));
                    }

                    #liveDraw ul > li.drawresult-item .drawresult-menu button:not(.close) {
                        min-width: 50px;
                    }
                }

                @media only screen and (min-width: 1200px)
                {
                    .list-menu-mobile a amp-img,
                    .list-menu-mobile button amp-img {
                        width: 100%;
                        border-radius: 20px;
                    }
                    #liveDraw .drawlive-wrapper {
                        width: 72rem;
                    }
                    #liveDraw .drawresult-galleries {
                        -moz-column-gap: 2rem;
                        column-gap: 2rem;
                    }
                }
            `}</style>
            <style amp-keyframes jsx global>{`
                @keyframes steam {
                    0% {
                        transform: translateX(0);
                    }

                    50% {
                        transform: translateX(400%);
                    }

                    100% {
                        transform: translateX(0);
                    }
                }

                @keyframes marquee {
                    0% {
                        transform: translate(0, 0)
                    }

                    100% {
                        transform: translate(-100%, 0)
                    }
                }

                @keyframes ping {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `}</style>
        </>
    );
}  