import React from "react";

function Header() {
    return <header class="header">
                <div class="header__wrapper header__wrapper--small">
                    <div class="header__logo">
                        <h1 class="header__logo-title">PortFolio</h1>
                    </div>
                    <div class="header__theme-btn button button--round"></div>
                </div>
            </header>;
}

export default Header;