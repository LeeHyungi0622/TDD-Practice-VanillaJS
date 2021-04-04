describe('App.ClickCounterView module의', () => {
    let clickCounter, updateEl, view;
    beforeEach(() => {
        clickCounter = App.ClickCounter();
        // counter값을 출력할 span element 생성
        updateEl = document.createElement('span');
        view = App.ClickCounterView(clickCounter, updateEl);
    });

    //의존성 주입(Dependency Injection) 체크 (테스트 코드)
    it('clickCounter를 주입하지 않으면 에러를 던진다.', () => {
        const clickCounter = null;
        const updateEl = document.createElement('span');
        const actual = () => App.ClickCounterView(clickCounter, updateEl);
        expect(actual).toThrowError();
    });

    it('updateEl를 주입하지 않으면 에러를 던진다.', () => {
        const updateEl = null;
        const actual = () => App.ClickCounterView(clickCounter, updateEl);
        expect(actual).toThrowError();
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