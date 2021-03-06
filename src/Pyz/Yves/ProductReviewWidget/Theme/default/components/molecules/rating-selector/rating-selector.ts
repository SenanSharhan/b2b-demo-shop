import Component from 'ShopUi/models/component';

export default class RatingSelector extends Component {
    protected input: HTMLInputElement;
    protected steps: HTMLElement[];

    protected readyCallback(): void {}

    protected init(): void {
        this.input = <HTMLInputElement>this.getElementsByClassName(`${this.jsName}__input`)[0];
        this.steps = <HTMLElement[]>Array.from(this.getElementsByClassName(`${this.jsName}__step`));

        if (!this.readOnly) {
            this.checkInput(this.value);
            this.mapEvents();
        }
    }

    protected mapEvents(): void {
        this.steps.forEach((step: HTMLElement) => {
            step.addEventListener('click', (event: Event) => this.onStepClick(event));
        });
    }

    protected onStepClick(event: Event): void {
        event.preventDefault();

        const step = <HTMLElement>event.currentTarget;
        const newValue = parseFloat(step.getAttribute('data-step-value'));

        this.checkInput(newValue);
        this.updateRating(newValue);
    }

    checkInput(value: number): void {
        if (!this.disableIfEmptyValue) {
            return;
        }

        if (!value) {
            this.input.setAttribute('disabled', 'disabled');

            return;
        }

        this.input.removeAttribute('disabled');
    }

    updateRating(value: number): void {
        this.input.setAttribute('value', `${value}`);

        this.steps.forEach((step: HTMLElement) => {
            const stepValue = parseFloat(step.getAttribute('data-step-value'));

            if (value >= stepValue) {
                step.classList.add(`${this.name}__step--active`);

                return;
            }

            step.classList.remove(`${this.name}__step--active`);
        });
    }

    protected get value(): number {
        return parseFloat(this.input.value);
    }

    protected get readOnly(): boolean {
        return this.hasAttribute('readonly');
    }

    protected get disableIfEmptyValue(): boolean {
        return this.hasAttribute('disable-if-empty-value');
    }
}
