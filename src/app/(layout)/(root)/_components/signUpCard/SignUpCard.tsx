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
import CustomToastContainer from "@/components/toastUi/CustomToastContainer";
import useSignUpForm from "@/hooks/form";

function SignUpCard() {
  const { form, handleOnClickNextStep, prevSlice, activeStep } =
    useSignUpForm();

  return (
    <>
      <Card className="w-[380px] m-auto">
        <SignUpCardHeader />
        <CardContent>
          <Form {...form}>
            <form className="relative overflow-hidden flex">
              <section
                className={`transition-transform ease-in-out duration-500 transform ${activeStep === 0 ? "translate-x-[0%]" : "translate-x-[-100%]"}`}
              >
                <div className="grid w-[330px] items-center gap-4">
                  <SignUpFormField id={SIGN_UP_NAME} />
                  <SignUpFormField id={SIGN_UP_EMAIL} />
                  <SignUpFormField id={SIGN_UP_PHONE} />
                  <SignUpFormField id={SIGN_UP_ROLE} />
                </div>

                <SignUpButtonGroup
                  handler={handleOnClickNextStep}
                  currentStep={activeStep}
                />
              </section>

              <section
                className={`flex flex-col justify-between transition-transform ease-in-out duration-500 transform ${activeStep === 1 ? "translate-x-[-100%]" : "translate-x-[100%]"}`}
              >
                <div className="grid w-[330px] items-center gap-4">
                  <SignUpFormField inputType="password" id={SIGN_UP_PASSWORD} />
                  <SignUpFormField
                    inputType="password"
                    id={SIGN_UP_PASSWORD_CONFIRM}
                  />
                </div>

                <SignUpButtonGroup
                  handler={handleOnClickNextStep}
                  currentStep={activeStep}
                  prevHandler={prevSlice}
                />
              </section>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* 비밀번호가 맞지 않으면 toast 출력 */}
      <CustomToastContainer />
    </>
  );
}

export default SignUpCard;
