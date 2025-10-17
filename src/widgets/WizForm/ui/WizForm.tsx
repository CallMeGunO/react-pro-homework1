import { useActionState, type FC } from 'react';

import styles from './WizForm.module.css';

async function increment(previousState: number) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return previousState + 1;
}

export const WizForm: FC = () => {
    const [step, formAction, isPending] = useActionState(increment, 0);

    return (
        <form className={styles.container}>
            {isPending && <div>Loading...</div>}
            {step === 0 && (
                <>
                    <label>Email</label>
                    <input name='email' type='email' placeholder='email' />
                </>
            )}
            {step === 1 && (
                <>
                    <label>Subscription Agreement</label>
                    <input name='agreement' type='checkbox' />
                </>
            )}
            {step === 2 && <div>DONE</div>}
            {step < 2 && <button formAction={formAction}>OK</button>}
        </form>
    );
};
