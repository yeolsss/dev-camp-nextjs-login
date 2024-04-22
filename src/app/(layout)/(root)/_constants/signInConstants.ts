export type SignInInputConstants = {
  id: string;
  label: string;
  placeholder?: string;
  inputType?: string;
};

export const SIGN_IN_NAME: SignInInputConstants = {
  id: "name",
  label: "이름",
  placeholder: "홍길동",
  inputType: "text",
};
export const SIGN_IN_EMAIL: SignInInputConstants = {
  id: "email",
  label: "이메일",
  placeholder: "hello@sparta-devcamp.com",
  inputType: "text",
};
export const SIGN_IN_PHONE: SignInInputConstants = {
  id: "phone",
  label: "연락처",
  placeholder: "01000000000",
  inputType: "text",
};
export const SIGN_IN_ROLE: SignInInputConstants = { id: "role", label: "역할" };
export const SIGN_IN_PASSWORD: SignInInputConstants = {
  id: "password",
  label: "비밀번호",
  inputType: "password",
};

export const SIGN_IN_PASSWORD_CONFIRM: SignInInputConstants = {
  id: "passwordConfirm",
  label: "비밀번호 확인",
  inputType: "password",
};
