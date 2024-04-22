"use client";

import { Card, CardContent } from "@/components/ui/card";
import SignInCardHeader from "@/app/(layout)/(root)/_components/header";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SIGN_IN_EMAIL,
  SIGN_IN_NAME,
  SIGN_IN_PASSWORD,
  SIGN_IN_PASSWORD_CONFIRM,
  SIGN_IN_PHONE,
  SIGN_IN_ROLE,
} from "@/app/(layout)/(root)/_constants/signInConstants";
import SignInFormField from "@/app/(layout)/(root)/_components/sigInFormField";
import { FormSchema } from "@/app/(layout)/(root)/util/formUtil";
import { useState } from "react";
import SignButtonGroup from "@/app/(layout)/(root)/_components/signInButtongroup";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignInCard() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const totalSlides = 2;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      [SIGN_IN_NAME.id]: "",
      [SIGN_IN_EMAIL.id]: "",
      [SIGN_IN_PHONE.id]: "",
      [SIGN_IN_ROLE.id]: "",
      [SIGN_IN_PASSWORD.id]: "",
      [SIGN_IN_PASSWORD_CONFIRM.id]: "",
    },
  });

  const handleOnSubmit = (data: z.infer<typeof FormSchema>) => {
    if (data[SIGN_IN_PASSWORD.id] !== data[SIGN_IN_PASSWORD_CONFIRM.id]) {
      toast.error("비밀번호가 맞지않습니다.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }
    alert(JSON.stringify(data));
  };

  const handleOnClickNextStep = async () => {
    let fieldsToValidate = [] as string[];

    // 현재 단계에 따라 검증할 필드 설정
    switch (activeStep) {
      case 0:
        fieldsToValidate = [
          SIGN_IN_NAME.id,
          SIGN_IN_EMAIL.id,
          SIGN_IN_PHONE.id,
          SIGN_IN_ROLE.id,
        ];
        break;
      case 1:
        fieldsToValidate = [SIGN_IN_PASSWORD.id, SIGN_IN_PASSWORD_CONFIRM.id];
        break;
      // 추가 단계가 있다면 여기에 설정
      default:
        break;
    }

    const result = await form.trigger(fieldsToValidate);

    if (result) {
      if (activeStep < totalSlides - 1) {
        // 마지막 단계가 아니라면 다음 단계로 진행
        setActiveStep((prevStep) => prevStep + 1);
      } else {
        // 마지막 단계에서 유효성 검사가 성공하면 폼 서브밋
        await form.handleSubmit(handleOnSubmit)();
      }
    }
  };

  const prevSlice = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <>
      <Card className="w-[380px] m-auto">
        <SignInCardHeader />
        <CardContent>
          <Form {...form}>
            <form
              // onSubmit={form.handleSubmit(handleOnSubmit)}
              className="relative overflow-hidden flex"
            >
              <section
                className={`transition-transform ease-in-out duration-500 transform ${activeStep === 0 ? "translate-x-[0%]" : "translate-x-[-100%]"}`}
              >
                <div className="grid w-[330px] items-center gap-4">
                  <SignInFormField id={SIGN_IN_NAME} />
                  <SignInFormField id={SIGN_IN_EMAIL} />
                  <SignInFormField id={SIGN_IN_PHONE} />
                  <SignInFormField id={SIGN_IN_ROLE} />
                </div>

                <SignButtonGroup
                  handler={handleOnClickNextStep}
                  currentStep={activeStep}
                />
              </section>

              <section
                className={`flex flex-col justify-between transition-transform ease-in-out duration-500 transform ${activeStep === 1 ? "translate-x-[-100%]" : "translate-x-[100%]"}`}
              >
                <div className="grid w-[330px] items-center gap-4">
                  <SignInFormField inputType="password" id={SIGN_IN_PASSWORD} />
                  <SignInFormField
                    inputType="password"
                    id={SIGN_IN_PASSWORD_CONFIRM}
                  />
                </div>

                <SignButtonGroup
                  handler={handleOnClickNextStep}
                  currentStep={activeStep}
                  prevHandler={prevSlice}
                />
              </section>
            </form>
          </Form>
        </CardContent>
      </Card>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default SignInCard;
