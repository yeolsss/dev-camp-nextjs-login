"use client";

import { useCallback, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { FormSchema } from "@/app/(layout)/(root)/util/formUtil";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SIGN_UP_EMAIL,
  SIGN_UP_NAME,
  SIGN_UP_PASSWORD,
  SIGN_UP_PASSWORD_CONFIRM,
  SIGN_UP_PHONE,
  SIGN_UP_ROLE,
} from "@/app/(layout)/(root)/_constants/signUpConstants";
import { Bounce, toast } from "react-toastify";

interface ReturnType {
  form: UseFormReturn<{ [p: string]: string }, any, undefined>;
  handleOnClickNextStep: () => Promise<void>;
  prevSlice: () => void;
  activeStep: number;
}

const UseSignUpForm = (): ReturnType => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const totalSlides = 2;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      [SIGN_UP_NAME.id]: "",
      [SIGN_UP_EMAIL.id]: "",
      [SIGN_UP_PHONE.id]: "",
      [SIGN_UP_ROLE.id]: "",
      [SIGN_UP_PASSWORD.id]: "",
      [SIGN_UP_PASSWORD_CONFIRM.id]: "",
    },
  });

  const handleOnSubmit = useCallback((data: z.infer<typeof FormSchema>) => {
    if (data[SIGN_UP_PASSWORD.id] !== data[SIGN_UP_PASSWORD_CONFIRM.id]) {
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
  }, []);

  const handleOnClickNextStep = useCallback(async () => {
    let fieldsToValidate = [] as string[];

    switch (activeStep) {
      case 0:
        fieldsToValidate = [
          SIGN_UP_NAME.id,
          SIGN_UP_EMAIL.id,
          SIGN_UP_PHONE.id,
          SIGN_UP_ROLE.id,
        ];
        break;
      case 1:
        fieldsToValidate = [SIGN_UP_PASSWORD.id, SIGN_UP_PASSWORD_CONFIRM.id];
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
  }, [activeStep, setActiveStep, form, handleOnSubmit, totalSlides]);

  const prevSlice = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return { form, handleOnClickNextStep, prevSlice, activeStep };
};

export default UseSignUpForm;
