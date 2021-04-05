var App = App || {};

App.ClickCounterView = (clickCounter, options) => {
    if (!clickCounter) throw Error('clickCounter');
    if (!options.updateEl) throw Error('updateEl');

    const view = {
        updateView() {
            options.updateEl.innerHTML = clickCounter.getValue();
        },
        increaseAndUpdateView() {
            clickCounter.increase();
            this.updateView();
        }
    };

    options.triggerEl.addEventListener('click', () => {
        view.increaseAndUpdateView();
    });
    return view;
}