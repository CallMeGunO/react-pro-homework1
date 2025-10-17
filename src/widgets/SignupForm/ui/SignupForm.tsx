import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/Button';
import { DividerX } from '@shared/DividerX';
import { InputRHF } from '@shared/Input';
import { type FC } from 'react';
import { useFieldArray, useForm, type SubmitHandler } from 'react-hook-form';

import { validationSchema, type FormValues } from '../model';
import styles from './SignupForm.module.css';

export const SignupForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        control,
    } = useForm<FormValues>({
        resolver: zodResolver(validationSchema),
    });

    const { fields, append, remove } = useFieldArray({
        control: control,
        name: 'socialNetworkLinks',
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

    return (
        <form
            className={styles.container}
            onSubmit={handleSubmit(onSubmit, () => {
                console.log({ errors, isValid, isSubmitting });
            })}
        >
            <InputRHF
                label='Username'
                type='text'
                placeholder='username'
                {...register('username')}
            />
            {errors.username && (
                <div className={styles.errorMessage}>
                    {errors.username.message}
                </div>
            )}
            <DividerX />
            <InputRHF
                label='Email'
                type='email'
                placeholder='email'
                {...register('email')}
            />
            {errors.email && (
                <div className={styles.errorMessage}>
                    {errors.email.message}
                </div>
            )}
            <DividerX />
            <InputRHF
                label='Password'
                type='password'
                placeholder='password'
                {...register('password')}
            />
            {errors.password && (
                <div className={styles.errorMessage}>
                    {errors.password.message}
                </div>
            )}
            <DividerX />
            <InputRHF
                label='Confirm Password'
                type='password'
                placeholder='passwordConfirm'
                {...register('passwordConfirm')}
            />
            {errors.passwordConfirm && (
                <div className={styles.errorMessage}>
                    {errors.passwordConfirm.message}
                </div>
            )}

            {fields.map((item, index) => {
                return (
                    <>
                        <InputRHF
                            label='Social Network Link'
                            key={item.id}
                            type='url'
                            placeholder={`socialNetworkLink ${index + 1}`}
                            {...register(`socialNetworkLinks.${index}.value`)}
                        />
                        {errors?.socialNetworkLinks?.[index] && (
                            <div className={styles.errorMessage}>
                                {
                                    errors.socialNetworkLinks[index]?.value
                                        ?.message
                                }
                            </div>
                        )}
                        {!!fields.length && (
                            <Button onClick={() => remove(index)}>
                                Remove
                            </Button>
                        )}
                        <DividerX />
                    </>
                );
            })}
            <Button onClick={() => append({ value: '' })}>
                Add Social Network Link
            </Button>
            {errors.socialNetworkLinks && (
                <div className={styles.errorMessage}>
                    {errors.socialNetworkLinks.message}
                </div>
            )}

            <Button type='submit'>Submit</Button>
        </form>
    );
};
