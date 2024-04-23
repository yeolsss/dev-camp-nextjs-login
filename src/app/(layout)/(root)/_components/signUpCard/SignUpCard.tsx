"use client";

import { Card, CardContent } from "@/components/ui/card";
import SignUpCardHeader from "@/app/(layout)/(root)/_components/header";
import { Form } from "@/components/ui/form";
import {
  SIGN_UP_EMAIL,
  SIGN_UP_NAME,
  SIGN_UP_PASSWORD,
  SIGN_UP_PASSWORD_CONFIRM,
  SIGN_UP_PHONE,
  SIGN_UP_ROLE,
} from "@/app/(layout)/(root)/_constants/signUpConstants";
import SignUpFormField from "../sigUpFormField";
import SignUpButtonGroup from "../signUpButtongroup";
import "react-toastify/dist/ReactToastify.css";
import useSignUpForm from "@/hooks/form/useSignUpForm";
import FormSection from "@/app/(layout)/(root)/_components/formSection";
import SignUpForm from "@/app/(layout)/(root)/_components/signUpForm";

function SignUpCard() {
  const { form, handleOnClickNextStep, prevSlice, activeStep } =
    useSignUpForm();

  return (
    <Card className="w-[380px] m-auto">
      <SignUpCardHeader />
      <CardContent>
        <Form {...form}>
          <SignUpForm>
            <FormSection
              className={
                activeStep === 0 ? "translate-x-[0%]" : "translate-x-[-100%]"
              }
            >
              <SignUpFormField id={SIGN_UP_NAME} />
              <SignUpFormField id={SIGN_UP_EMAIL} />
              <SignUpFormField id={SIGN_UP_PHONE} />
              <SignUpFormField id={SIGN_UP_ROLE} />
              <SignUpButtonGroup
                handler={handleOnClickNextStep}
                currentStep={activeStep}
              />
            </FormSection>

            <FormSection
              className={
                activeStep === 1 ? "translate-x-[-100%]" : "translate-x-[100%]"
              }
            >
              <SignUpFormField inputType="password" id={SIGN_UP_PASSWORD} />
              <SignUpFormField
                inputType="password"
                id={SIGN_UP_PASSWORD_CONFIRM}
              />
              <SignUpButtonGroup
                handler={handleOnClickNextStep}
                currentStep={activeStep}
                prevHandler={prevSlice}
              />
            </FormSection>
          </SignUpForm>
        </Form>
      </CardContent>
    </Card>
  );
}

export default SignUpCard;
