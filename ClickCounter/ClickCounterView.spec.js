describe('App.ClickCounterView module의', () => {
    let clickCounter, updateEl, triggerEl, view;
    beforeEach(() => {
        clickCounter = App.ClickCounter();
        // counter값을 출력할 span element 생성
        updateEl = document.createElement('span');
        triggerEl = document.createElement('button');
        // 인자를 많이 넘겨주는 것은 좋지 않기 때문에 updateEl, triggerEl 두 개의 인자는 객체의 형태로 넘겨준다.
        view = App.ClickCounterView(clickCounter, { updateEl, triggerEl });
    });

    describe('Negative test', () => {
        //의존성 주입(Dependency Injection) 체크 (테스트 코드)
        it('clickCounter를 주입하지 않으면 에러를 던진다.', () => {
            const clickCounter = null;
            const updateEl = document.createElement('span');
            const actual = () => App.ClickCounterView(clickCounter, { updateEl });
            expect(actual).toThrowError();
        });
        it('updateEl를 주입하지 않으면 에러를 던진다.', () => {
            const actual = () => App.ClickCounterView(clickCounter, { triggerEl });
            expect(actual).toThrowError();
        });
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
    // spec4) ClickCounterView module의 increaseAndUpdate module
    describe('increaseAndUpdateView()는', () => {
        // 하나의 테스트 코드는 하나의 기능만을 테스트하도록 설계한다.
        // it('카운트 값을 증가하고 그 값을 출력한다.', () => {});
        it('ClickCounter의 increase를 실행한다.', () => {
            //todo
            // clickCounter module의 increase함수를 감시
            spyOn(clickCounter, 'increase');
            view.increaseAndUpdateView();
            expect(clickCounter.increase).toHaveBeenCalled();
        });

        it('updateView를 실행한다.', () => {
            //todo
            spyOn(view, 'updateView');
            view.increaseAndUpdateView();
            expect(view.updateView).toHaveBeenCalled();
        });
    });
    it('클릭 이벤트가 발생하면 increaseAndUpdateView를 실행한다.', () => {
        //todo (준비)
        spyOn(view, 'increaseAndUpdateView');
        // click event
        triggerEl.click();
        // (검증)
        expect(view.increaseAndUpdateView).toHaveBeenCalled();
    });
});