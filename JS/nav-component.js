class NeuraliteNav extends HTMLElement {
    connectedCallback() {
        const active = this.getAttribute("active");

         this.innerHTML = `
            <aside class="sidebar">
                <img style="margin-bottom: 12px;" src="../icons/static/camera_eye.svg" height="56" width="56" alt="">

                <a href="home.html">
                    <div class="nav-tab gooey-hover ${active === "home" ? "highlighted" : ""}" id="homeTab">
                        <img src="../icons/static/pen_empty.svg" alt="Create test">
                    </div>
                </a>

                <a href="mylearn.html">
                    <div class="nav-tab ${active === "mylearn" ? "highlighted" : ""}" id="myLearnTab">
                        <img src="../icons/static/grad_empty.svg" alt="My learning">
                        <span class="notif-dot">1</span>
                    </div>
                </a>

                <a href="saved.html">
                    <div class="nav-tab ${active === "favorites" ? "highlighted" : ""}" id="favoritesTab">
                        <img src="../icons/static/favorite_empty.svg" alt="Favorites">
                    </div>
                </a>

                <a href="dashboard.html">
                    <div class="nav-tab ${active === "dashboard" ? "highlighted" : ""}" id="dashboardTab">
                        <img src="../icons/static/chart_empty.svg" alt="Dashboard">
                    </div>
                </a>

                <div class="sidebar-spacer"></div>

                <div class="sidebar-divider"></div>

                <a href="about.html">
                    <div class="nav-tab ${active==="about" ? "highlighted" : ""}" id="aboutTab">
                        <img src="../icons/static/circle_empty.svg">
                    </div>
                </a>

                <div class="nav-tab">
                    <img style="border-radius: 50%;" src="../icons/pfp/github_pfp.jpg" height="38px;" width="38px;">
                </div>

                <div class="nav-tab" id="signoutTab">
                    <img src="../icons/static/signout_empty.svg">
                </div>
            </aside>
        `;
    }
}

customElements.define("neuralite-nav", NeuraliteNav);