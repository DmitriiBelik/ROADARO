import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Router from 'next/router';
import { initialValuesForm, ValidationSchema } from './data';
import { Formik } from "formik";
import PersonalInfoForm from './PersonalInfoForm';
import { addParams } from '../../services/auth';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/redux';

const steps = ['Регистрация', 'Заполнение личной информации', 'Подтверждение личной информации'];

export default function PersonalInfo(currentUser: any) {
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const {userState, userParams} = useAppSelector(state => state.user)

    useEffect(() => {
        if(!userState) {
            Router.push('/signIn')
        }
    }, [userState])

    useEffect(() => {
        //@ts-ignore
        if(userParams[0].sex) {
            Router.push('/')
        }
    }, [userParams])


  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <Formik 
        initialValues={initialValuesForm}
        validationSchema={ValidationSchema}
        onSubmit={(values) => handleNext()}
        enableReinitialize
    >
        {props => (
            <Box sx={{ width: '1200px', margin: '0 auto', marginTop: '20px' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};

                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                    })}
                </Stepper>
                {activeStep === steps.length ? console.log(Router.push('/'))  : (
                    <React.Fragment>
                        {activeStep == 1 
                        ? <PersonalInfoForm/>
                        : <Typography sx={{ mt: 2, mb: 1 }}>Вы уверены, что хотите закончить регистрацию?</Typography>
                        }
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            {activeStep !== 1 && 
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={() => {
                                    handleBack()
                                    props.resetForm()
                                }}
                                sx={{ mr: 1 }}
                            >
                                Назад
                            </Button>}
                        <Box sx={{ flex: '1 1 auto' }} />
                            {activeStep === steps.length - 1 
                                ? <Button onClick={() => {
                                    addParams(currentUser?.currentUser, props.values)
                                    handleNext()
                                }}>Завершить</Button>
                                : <Button onClick={() => props.handleSubmit()}>Далее</Button>
                            }
                        </Box>
                    </React.Fragment>
                )}
            </Box>
    )}
    </Formik>
  );
}