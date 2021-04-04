describe('App.ClickCounterView module의', () => {
    let clickCounter, updateEl, view;
    beforeEach(() => {
        clickCounter = App.ClickCounter();
        // counter값을 출력할 span element 생성
        updateEl = document.createElement('span');
        view = App.ClickCounterView(clickCounter, updateEl);
    });
    describe('updateView()는', () => {
        it('ClickCounter의 getValue() 값을 출력한다.', () => {
            // 출력할 값 "준비"
            const counterValue = clickCounter.getValue();
            // ClickCounterView의 updateView()메소드를 실행한다.
            view.updateView();
            //실행한 다음에 출력된 값을 확인한다. "검증"
            expect(updateEl.innerHTML).toBe(counterValue.toString());
        });
    });
});