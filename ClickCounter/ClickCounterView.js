var App = App || {};

App.ClickCounterView = (clickCounter, updateEl) => {
    return {
        updateView() {
            updateEl.innerHTML = clickCounter.getValue();
        }
    }
}