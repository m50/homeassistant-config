if (window.location.href.indexOf('kiosk') > 0) {
    try {
        const home_assistant_main = document
            .querySelector("body > home-assistant").shadowRoot
            .querySelector("home-assistant-main");

        const hui_root = home_assistant_main.shadowRoot
            .querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace").shadowRoot
            .querySelector("hui-root").shadowRoot;

        hui_root.querySelector('#layout > app-header')
            .style.display = "none";
        hui_root.querySelector('#layout > #view')
            .style.minHeight = '100vh';

        window.dispatchEvent(new Event('resize'));
    }
    catch (e) {
        console.log(e);
    }
}
