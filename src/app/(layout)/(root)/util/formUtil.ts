import { z } from "zod";
import {
  SIGN_IN_EMAIL,
  SIGN_IN_NAME,
  SIGN_IN_PASSWORD,
  SIGN_IN_PASSWORD_CONFIRM,
  SIGN_IN_PHONE,
  SIGN_IN_ROLE,
} from "@/app/(layout)/(root)/_constants/signInConstants";

interface FormData {
  [key: string]: string; // 모든 키는 문자열 값을 갖는다고 가정
}

export const FormSchema = z.object({
  [SIGN_IN_NAME.id]: z.string().min(2, {
    message: "이름은 2글자 이상이어야 합니다.",
  }),
  [SIGN_IN_EMAIL.id]: z
    .string()
    .email({ message: "올바른 이메일을 입력해주세요." }),
  [SIGN_IN_PHONE.id]: z
    .string()
    .min(11, {
      message: "연락처는 11자리여야 합니다.",
    })
    .regex(/^010\d{8}$/, {
      message: "연락처는 '010'으로 시작하는 11자리 숫자를 입력해주세요.",
    }),
  [SIGN_IN_ROLE.id]: z.string().min(1, {
    message: "역할을 선택해주세요.",
  }),
  [SIGN_IN_PASSWORD.id]: z
    .string()
    .min(6, {
      message: "비밀번호는 최소 6자리 이상이어야 합니다.",
    })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/, {
      message:
        "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.",
    }),
  [SIGN_IN_PASSWORD_CONFIRM.id]: z
    .string()
    .min(6, {
      message: "비밀번호는 최소 6자리 이상이어야 합니다.",
    })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/, {
      message:
        "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.",
    }),
});
