var App = App || {};

App.ClickCounterView = (clickCounter, updateEl) => {
    if (!clickCounter) throw Error('clickCounter');
    if (!updateEl) throw Error('updateEl');
    return {
        updateView() {
            updateEl.innerHTML = clickCounter.getValue();
        }
    }
}